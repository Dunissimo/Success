import { FC } from "react";
import Header from "./components/header/header";
import Card from "./components/card/card";
import AddCard from "./components/add-card/add-card";
import { useCardsStore } from "./store";

const App: FC = () => {
  const cards = useCardsStore((state) => state.cards);
  console.log(cards);

  return (
    <section className="pb-4">
      <Header />
      <AddCard />
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
      {cards.length === 0 ? (
        <div className="container pt-8 text-center text-gray-400">
          Пока нет записей
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default App;
