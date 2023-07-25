import { FC, useState } from "react";
import { ICard } from "../../utils/interfaces";

import "./card.css";
import { printDate, printRating } from "../../utils/helpers";
import { useCardsStore } from "../../store";

interface IProps {
  card: ICard;
}

const Card: FC<IProps> = ({ card }) => {
  const { id, date, rating, text } = card;
  const removeCard = useCardsStore((state) => state.removeCard);

  const [value, setValue] = useState(text);
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => setEditable((editable) => !editable);

  return (
    <section className="card mt-4">
      <div className="container card-container py-4">
        <div className="head flex justify-between items-center border-b pb-2 px-2 ">
          <div className="flex items-center gap-2">
            <span className="font-bold lg:text-xl">{printDate(date)}</span>
            <span className="text-gray-500 text-sm">{printRating(rating)}</span>
          </div>

          <div className="controls flex gap-4">
            <div
              onClick={toggleEditable}
              className="edit cursor-pointer transition-all hover:text-gray-400 active:scale-90"
            >
              {editable ? "Сохранить" : "Изменить"}
            </div>
            <div
              onClick={() => removeCard(id)}
              className="dele cursor-pointer transition-all hover:text-gray-400 active:scale-90"
            >
              Удалить
            </div>
          </div>
        </div>

        <div className="text min-h-[150px] px-2 pt-4">
          {editable ? (
            <textarea
              value={value}
              rows={3}
              onChange={(e) => setValue(e.target.value)}
              className="border py-1 px-1 min-w-full min-h-[35px] max-h-[300px]"
            />
          ) : (
            <p>{value || "Пусто"}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
