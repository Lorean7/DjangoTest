import styles from "./header.module.scss";

export default function Header() {
  return (
    <header
      className={`${styles["header"]} container flex items-center justify-center h-[60px] gap-[28px] mr-auto ml-auto`}
    >
      <ul className={`${styles["header__nav"]} flex gap-[64px]`}>
        <li className={`hover:text-[#BAE249]`}>Каталог</li>
        <li className={`hover:text-[#BAE249]`}>Галерея</li>
        <li className={`hover:text-[#BAE249]`}>О лаборатории</li>
        <li className={`hover:text-[#BAE249]`}>Контакты</li>
      </ul>
    </header>
  );
}
