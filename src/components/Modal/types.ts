export type AnimationType = 'fade' | 'slide' | 'scale';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  animation?: AnimationType;
  closeOnEsc?: boolean;
  closeOnOverlayClick?: boolean;
}

export interface ModalContextType {
  showModal: (modal: ModalConfig) => void;
  hideModal: (id: string) => void;
  hideAll: () => void;
}

export interface ModalConfig extends Omit<ModalProps, 'isOpen'> {
  id: string;
  priority?: number;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
}

// TODO: Implement modal queue system
export interface ModalQueueItem {
  id: string;
  config: ModalConfig;
  status: 'pending' | 'visible' | 'hiding';
}
