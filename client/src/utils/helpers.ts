import dayjs from "dayjs";
import locale from "dayjs/locale/ru";

export const printDate = (date: string) => {
  dayjs.locale(locale);

  const newDate = dayjs(date);

  return newDate.format("D MMMM");
};

export const printRating = (rating: string) => {
  switch (rating) {
    case "bad":
      return "Плохой день";
    case "ok":
      return "Нормальный день";
    case "good":
      return "Хороший день";

    default:
      return "Ошибка";
  }
};
