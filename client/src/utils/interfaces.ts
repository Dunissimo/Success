export interface ICard {
  id: string;
  date: string;
  rating: string;
  text: string;
}

export interface ICardsState {
  cards: ICard[];
  addCard: (card: ICard) => void;
  removeCard: (id: string) => void;
  removeCards: () => void;
}
