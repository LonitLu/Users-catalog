import { Card } from "./Card/Card";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </>
  );
};

export default Main;
