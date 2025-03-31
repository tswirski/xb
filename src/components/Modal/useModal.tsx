import { useModalState } from './Modal.zustand';
export const useModal = () => {
  const showModal = useModalState((state) => state.showModal);
  const hideModal = useModalState((state) => state.hideModal);
  const hideAll = useModalState((state) => state.hideAll);
  return {
    showModal,
    hideModal,
    hideAll,
  };
};
