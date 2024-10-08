import styles from "./cover.module.scss";

export default function Cover() {
  return (
    <div className={styles["cover"]}>
      <div className={`${styles["cover__description"]} px-[20px]`}>
        <h1
          className={`${styles["cover__description_title"]} font-bold`}
        >
          Крупнейшая коллекция
          <br />
          природных артефактов
        </h1>
        <div
          className={`${styles["cover__description_text"]} mt-[16px] text-[16px]`}
        >
          Являясь всего лишь частью общей картины, интерактивные прототипы
          <br />
          которые представляют собой яркий пример европейского типа политической
          <br />
          и социальной культуры.
        </div>
      </div>
    </div>
  );
}
