import { create } from "zustand";
import { ICardsState } from "../utils/interfaces";

export const useCardsStore = create<ICardsState>()((set) => ({
  cards: [],

  addCard: (card) => set((state) => ({ cards: [card, ...state.cards] })),

  removeCard: (id) =>
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    })),

  removeCards: () => set(() => ({ cards: [] })),
}));
