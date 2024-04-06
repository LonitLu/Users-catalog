import styles from "./Buttons.module.css";
import backImg from "../../images/arrowBack.svg";

interface BtnBackProps {
  textBtn: string;
}

const BtnBack: React.FC<BtnBackProps> = ({ textBtn }) => {
  return (
    <button className={styles.btn} type="button">
      <span>{textBtn}</span>
      <img src={backImg} />
    </button>
  );
};

export default BtnBack;
