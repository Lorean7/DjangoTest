import Card from "./Card/card";

import styles from "./collection.module.scss";

export default function Collection() {
  return (
    <div className={`${styles["collection"]} mt-[60px] flex flex-row gap-[30px]`}>
      <Card
        rating={4}
        picture=""
        title="Fig. 1 (plant)"
        description="Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы."
      />
      <Card
        rating={4}
        picture=""
        title="Fig. 2 (flower)"
        description="Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий."
      />
      <Card
        rating={4}
        picture=""
        title="Fig. 3 (leaf)"
        description="Лишь непосредственные участники прогресса неоднозначны и будут в равной степени предоставлены сами себе для работы."
      />
    </div>
  );
}
