import styles from "./cover.module.scss";

export default function Cover() {
  return (
    <div className={styles["cover"]}>
      <div className={styles["cover__description"]}>
        <h1>
          Крупнейшая коллекция
          <br />
          природных артефактов
        </h1>
        <div>
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
