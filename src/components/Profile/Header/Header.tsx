import BtnBack from "../../Buttons/BtnBack";
import BtnExit from "../../Buttons/BtnExit";
import styles from "./Header.module.css";
import photo from "../../../images/photo.png";

export const Header: React.FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.btn}>
          <BtnBack textBtn="Назад" />
          <BtnExit textBtn="Выход" />
        </div>
        <div className={styles.profile__data}>
          <img className={styles.photoImg} src={photo} />
          <span>
            <h2 className={styles.title}>Артур Королёв</h2>
            <span className={styles.text}>Партнер</span>
          </span>
        </div>
      </header>
    </>
  );
};
