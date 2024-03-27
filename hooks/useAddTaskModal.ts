import { create } from 'zustand';

interface AddTaskModalState {
  isOpen: boolean;
  openAddTaskModal: () => void;
  closeAddTaskModal: () => void;
  toggleAddTaskModal: () => void;
}

const useAddTaskModal = create<AddTaskModalState>((set) => ({
  isOpen: false,
  openAddTaskModal: () => set({ isOpen: true }),
  closeAddTaskModal: () => set({ isOpen: false }),
  toggleAddTaskModal: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useAddTaskModal;
