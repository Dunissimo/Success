import { FC, FormEventHandler, useState } from "react";
import { useCardsStore } from "../../store";
import { nanoid } from "nanoid";

const AddCard: FC = () => {
  const [visible, setVisible] = useState(false);
  const addCard = useCardsStore((state) => state.addCard);

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    const form = new FormData(e.currentTarget);

    const id = nanoid(6);
    const date = form.get("date") as string;
    const rating = form.get("rating") as string;
    const text = form.get("text") as string;

    addCard({ id, date, rating, text });

    setVisible(false);
  };

  const toggleVisible = () => setVisible((visible) => !visible);

  return (
    <section>
      <div className="container py-4">
        <button
          onClick={toggleVisible}
          className="py-1 px-1 text-xl transition-all hover:bg-gray-400 active:scale-95"
        >
          {visible ? "Отменить" : "Создать запись..."}
        </button>

        {visible && (
          <form
            action="post"
            className="add mt-4 flex flex-col"
            onSubmit={(e) => submitHandler(e)}
          >
            <div className="flex">
              <input
                type="date"
                required
                defaultValue={new Date().toISOString().slice(0, 10)}
                name="date"
                id="card-date"
                className="h-[40px] lg:max-w-[20%] mb-2 border px-1"
              />

              <select
                name="rating"
                required
                id="card-rating"
                className="h-[40px] ml-4 px-2"
              >
                <option value="bad">Плохой день</option>
                <option value="ok">Нормальный день</option>
                <option value="good">Хороший день</option>
              </select>
            </div>
            <textarea
              name="text"
              required
              id="card-text"
              placeholder="Что сегодня произошло?"
              cols={0}
              rows={3}
              className="min-h-[42px] max-h-[500px] border py-2 px-1"
            ></textarea>

            <button
              type="submit"
              className="self-start mt-2 py-1 px-1 text-xl transition-all hover:bg-gray-400 active:scale-95"
            >
              Создать
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default AddCard;
