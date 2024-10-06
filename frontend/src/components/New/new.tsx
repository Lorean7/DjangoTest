import Image from "next/image";

import artifacts from "@public/artifacts.png"

import styles from './new.module.scss'

export default function New() {
  return (
    <div className={`${styles["new"]} container mt-[120px]`}>
      <h1 className={`${styles["new_title"]} text-[48px] font-bold`}>
        Новые артефакты
      </h1>
      <div className={`${styles["new__artifacts"]} mt-[60px]`}>
        <Image src={artifacts} alt="artifacts" />
      </div>
    </div>
  );
}