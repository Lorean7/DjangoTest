import Image from "next/image";

import artifacts from "@public/artifacts.png";

import styles from "./artifacts.module.scss";

export default function New() {
  return (
    <div className={`${styles["new"]} container mt-[60px] px-[10px]`}>
      <h1 className={`${styles["new_title"]} text-[48px] font-bold`}>
        Новые артефакты
      </h1>
      <div
        className={`${styles["new__artifacts"]} flex flex-row container gap-[30px] mt-[30px]`}
      >
        <div className="flex-[0_0_75%]">
          <Image src={artifacts} alt="artifacts" />
        </div>
        <div
          className={`${styles["new__artifacts_info"]} bg-[#bae249] p-[16px] `}
        >
          <h1
            className={`${styles["new__info_title"]} text-[#1D2F30] text-[24px] font-bold`}
          >
            Kurische Nehrung 24
          </h1>
          <p
            className={`${styles["new__info_description"]} text-[#506829] text-[16px] mt-[8px]`}
          >
            Вот вам яркий пример современных тенденций - начало повседневной
            работы по формированию позиции выявляет срочную потребность методов
            управления процессами.
            <br />
            <br />
            Есть над чем задуматься: представители современных социальных
            резервов своевременно верифицированы.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
