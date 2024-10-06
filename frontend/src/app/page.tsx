import Cover from "@components/Cover/cover";
import Collection from "@components/Collection/collection";
import Artifacts from "@/components/Artifacts/artifacts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={`flex flex-col items-center`}>
      <Cover />
      <Collection />
      <Artifacts />
    </div>
  );
}
