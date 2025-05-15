"use client"

import { create } from "zustand"

interface QuoteModalStore {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useQuoteModal = create<QuoteModalStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
