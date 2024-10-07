import styles from "./application.module.scss";

export default function Application() {
  return (
    <div className={`${styles["application"]} flex justify-center items-center w-full mt-[60px] py-[60px]`}>
      <div className={`${styles["application__info"]} container flex flex-col`}>
        <h1
          className={`${styles["application__info-title"]} text-[48px] font-bold`}
        >
          Помочь проекту
        </h1>
        <p
          className={`${styles["application__info-description"]} text-[16px] mt-[16px]`}
        >
          Равным образом, экономическая повестка сегодняшнего дня не даёт нам
          иного выбора, кроме
          <br />
          определения прогресса профессионального сообщества. Как принято
          считать, элементы политического
          <br />
          процесса рассмотрены исключительно в разрезе маркетинговых и
          финансовых предпосылок.
        </p>
        <input
          className={`${styles["application__info-name"]} mt-[24px] py-[4px] pl-[16px] custom-input`}
          placeholder="Имя"
        />
        <input
          className={`${styles["application__info-email"]} mt-[24px] py-[4px] pl-[16px] custom-input`}
        placeholder="Email"
        />
        <button
          className={`${styles["application__info-btn"]} mt-[24px] px-[26px] py-[11px] custom-btn-2`}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}
