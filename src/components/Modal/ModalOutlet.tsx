import { type FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { useModalState } from './Modal.zustand';
import type { ModalQueueItem } from './types';

const focusElementSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** 
 * Single Modal Entity 
 **/

type ModalProps = {
  item: ModalQueueItem;
  isTopmost: boolean;
  onDiscard(id: string): void;
};

const Modal: FC<ModalProps> = ({
  onDiscard,
  isTopmost,
  item: {
    config: { onClose, closeOnOverlayClick, closeOnEsc, props, title, Component, id, animation = 'fade' },
  },
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [showModal, setShowModal] = useState(true);

  const handleClose = useCallback(() => {
    if (closeOnOverlayClick) setShowModal(false);
  }, [closeOnOverlayClick]);

  const handleDiscard = useCallback(() => {
    onDiscard(id);
    onClose();
  }, [onDiscard, onClose, id]);

  const restoreFocus = useCallback(() => {
    if (!ref.current || ref.current.querySelector(':focus')) return;
    const firstFocusableEl = ref.current.querySelector(focusElementSelector) as HTMLElement;
    firstFocusableEl.focus();
  }, []);

  useEffect(() => {
    if(isTopmost) restoreFocus();
  }, [isTopmost])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isTopmost) {
        return;
      }

      if (event.key === 'Escape') {
        if (closeOnEsc) setShowModal(false);
        return;
      }

      if (event.key === 'Tab') {
        if (!ref.current) return;
        const focusable = ref.current.querySelectorAll(focusElementSelector);
        const firstFocusableEl = focusable[0] as HTMLElement;
        const lastFocusableEl = focusable[focusable.length - 1] as HTMLElement;

        if (event.shiftKey && document.activeElement === firstFocusableEl) {
          event.preventDefault();
          lastFocusableEl.focus();
        }
        if (!event.shiftKey && document.activeElement === lastFocusableEl) {
          event.preventDefault();
          firstFocusableEl.focus();
        }
        return;
      }
    };

    window.top?.addEventListener('keydown', onKeyDown);
    return () => window.top?.removeEventListener('keydown', onKeyDown);
  }, [closeOnEsc, isTopmost]);

  const classNames = useMemo(() => {
    switch (animation) {
      case 'scale': {
        return {
          appear: 'scale-0',
          appearActive: 'transition-scale duration-300 scale-100',
          enter: 'scale-0',
          enterActive: 'transition-scale duration-300 scale-100',
          exitActive: 'transition-scale duration-200 scale-0',
        };
      }
      case 'slide': {
        return {
          appear: '-translate-x-[1000%]',
          appearActive: 'transition-transform duration-300 translate-x-[0%]',
          enter: '-translate-x-[1000%]',
          enterActive: 'transition-transform duration-300 translate-x-[0%]',
          exitActive: 'translate-x-[1000%] transition-transform duration-200',
        };
      }
      case 'fade':
      default: {
        return {
          appear: 'opacity-0',
          appearActive: 'transition-opacity duration-300 opacity-100',
          enter: 'opacity-0',
          enterActive: 'transition-opacity duration-300 opacity-100',
          exitActive: 'transition-opacity duration-200 opacity-0',
        };
      }
    }
  }, [animation]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 opacity-[50%]" onClick={handleClose}></div>
      <div className="top-[50%] left-[50%] w-0 h-0 overflow-visible flex fixed items-center justify-center">
        <CSSTransition
          onExited={handleDiscard}
          onEntering={restoreFocus}
          nodeRef={ref}
          in={showModal}
          appear={true}
          timeout={500}
          classNames={classNames}
        >
          <div
            ref={ref}
            className="w-fit h-fit max-w-[90vw] max-h-[90vh] bg-white p-[20px] rounded-[8px] flex flex-col"
          >
            <div>{title}</div>
            <Component {...props} closeModal={handleClose} />
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

/** 
 * Modal List Renderer 
 **/

type ModalRendererProps = {
  items: ModalQueueItem[];
};

const ModalRenderer: FC<ModalRendererProps> = ({ items }) => {
  const hideModal = useModalState((state) => state.hideModal);

  return (
    <>
      {items.map((item, index) => (
        <Modal item={item} onDiscard={hideModal} key={item.id} isTopmost={index === items.length - 1} />
      ))}
    </>
  );
};

const usePortalRef = () => {
  const portalRef = useRef<HTMLDivElement>(
    (() => {
      const PORTAL_ID = 'portal-target';
      const PORTAL_SELECTOR = `#${PORTAL_ID}`;
      if (!document.querySelector(PORTAL_SELECTOR)) {
        const portalEl = document.createElement('div');
        portalEl.setAttribute('id', PORTAL_ID);
        portalEl.style.zIndex = '1600';
        document.body.append(portalEl);
      }
      return document.querySelector(PORTAL_SELECTOR) as HTMLDivElement;
    })(),
  );

  return portalRef.current;
}

export const ModalOutlet: FC = () => {
  const portalEl = usePortalRef();

  const items = useModalState((state) => state.items);
  const hasItems = useModalState((state) => state.hasItems);
  const itemsByPriority = useMemo<ModalQueueItem[]>(
    () => [...items].sort((itemA, itemB) => (itemA.config.priority || 0) - (itemB.config.priority || 0)),
    [items],
  );

  useEffect(() => {
    if (!portalEl) return;
    const siblings = Array.from(document.body.children).filter((node) => node !== portalEl);
    siblings.forEach((sibling) => {
      if (hasItems) {
        sibling.setAttribute('data-aria-hidden', sibling.ariaHidden || 'false');
        sibling.ariaHidden = 'true';
      } else if (sibling.getAttribute('data-aria-hidden') === 'false') {
        sibling.removeAttribute('aria-hidden');
        sibling.removeAttribute('data-aria-hidden');
      }
    });
  }, [hasItems]);

  return itemsByPriority.length && createPortal(<ModalRenderer items={itemsByPriority} />,  portalEl);
};
