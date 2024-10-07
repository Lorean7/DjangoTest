import Image from "next/image";

import contactsYt from '@public/contacts-yt.svg';
import contactsInst from "@public/contacts-inst.svg";
import contactsFace from "@public/contacts-face.svg";
import contactsTwit from "@public/contacts-twit.svg";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer
      className={`${styles["footer"]} flex flex-col items-center h-[80px]`}
    >
      <div
        className={`${styles["footer__contacts"]} flex items-center justify-center bg-[#0B1919] gap-[30px] w-full py-[18px] px-[18px]`}
      >
        <Image src={contactsYt} alt="youtube" />
        <Image src={contactsInst} alt="instagram" />
        <Image src={contactsFace} alt="facebook" />
        <Image src={contactsTwit} alt="twitter" />
      </div>
      <div className={`${styles["footer__fb"]} py-[2px] text-[13px] text-[#899D9D]`}>
        f&b ® 2020
      </div>
    </footer>
  );
}
