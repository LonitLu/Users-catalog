import styles from "./Card.module.css";
import photo from "../../../images/photo.png";
import like from "../../../images/like.svg";
// import likeActive from "../../../images/likeActive.svg";

export const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <img className={styles.img__photo} src={photo} alt="photo" />
        <h2 className={styles.name}>Артур Королёв</h2>
        <div className={styles.like}>
          <img className={styles.img__like} src={like} alt="photo" />
          {/* <img className={styles.img__like} src={likeActive} alt="photo" /> */}
        </div>
      </div>
    </>
  );
};
