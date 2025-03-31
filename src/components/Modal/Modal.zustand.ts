import { produce } from 'immer';
import { create } from 'zustand';
import type { ModalContextType as Actions, ModalQueueItem } from './types';

type State = {
  items: ModalQueueItem[];
  hasItems: boolean;
};

export const useModalState = create<State & Actions>()((set, get) => ({
  items: [],
  hasItems: false,
  showModal(modal) {
    if (get().items.findIndex(({ id }) => id === modal.id) !== -1) {
      return;
    }
    set((state) =>
      produce(state, (draft) => {
        draft.items.push({ id: modal.id, config: modal, status: 'pending' });
        draft.hasItems = draft.items.length !== 0;
      }),
    );
  },
  hideModal(id) {
    if (get().items.findIndex((modal) => id === modal.id) === -1) {
      return;
    }

    set((state) =>
      produce(state, (draft) => {
        draft.items = draft.items.filter((modal) => id !== modal.id);
        draft.hasItems = draft.items.length !== 0;
      }),
    );
  },
  hideAll() {
    set((state) => ({ ...state, items: [], hasItems: false }));
  },
}));
