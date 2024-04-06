import BtnExit from "../Buttons/BtnExit";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.btn}>
          <BtnExit textBtn="Выход" />
        </div>
        <h1 className={styles.title}>Наша команда</h1>
        <p className={styles.text}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.
        </p>
      </header>
    </>
  );
};
