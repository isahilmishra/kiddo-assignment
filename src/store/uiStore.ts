import { create } from 'zustand';

interface UIState {
  isOverlayActive: boolean;
  triggerOverlay: () => void;
  hideOverlay: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isOverlayActive: false,
  triggerOverlay: () => set({ isOverlayActive: true }),
  hideOverlay: () => set({ isOverlayActive: false }),
}));
