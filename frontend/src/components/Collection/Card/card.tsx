import style from "./card.module.scss";

interface ICard {
  rating: number;
  picture?: string;
  title: string;
  description: string;
}

export default function Card(props: ICard) {
  return (
    <div
      className={`${style["card"]} flex flex-col border-[#0B1919] border-2 w-[255px]`}
    >
      <div className={`${style["card__preview"]} h-[180px] bg-[#0B1919]`}></div>
      <div
        className={`${style["card__item"]} flex flex-col p-[16px]`}
      >
        <div className={`${style["card__item-info"]} flex flex-col`}>
          <div className={`${style["card__info_title"]} font-bold text-[24px]`}>
            {props.title}
          </div>
          <div
            className={`${style["card__info_description"]} mt-[8px] text-[16px] text-[#899D9D]`}
          >
            {props.description}
          </div>
        </div>
        <div className={`${style["card__item-button"]}`}>
          <button
            className={`${style["card__button"]} mt-[16px] custom-btn-1 py-[10px] px-[28px]`}
          >
            Подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
