import styles from "./Footer.module.css";
import imgArrow from '../../images/arrowDown.svg';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <button className={styles.btn}>
          <span className={styles.text}>Показать еще</span>
          <img src={imgArrow} />
        </button>
      </footer>
    </>
  );
};
