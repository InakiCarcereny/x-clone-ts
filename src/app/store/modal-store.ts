import { create } from 'zustand';

interface ModalStore {
  isOpen: boolean;
  type: ModalType | null;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

type ModalType = 'post' | 'get-verified' | 'edit-profile';

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  type: null,
  openModal: (type: ModalType) => set({ isOpen: true, type }),
  closeModal: () => set({ isOpen: false, type: null }),
}));
