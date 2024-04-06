import styles from "./Buttons.module.css";
import exitImg from "../../images/exit.svg";

interface BtnExitProps {
  textBtn: string;
}

const BtnExit: React.FC<BtnExitProps> = ({ textBtn }) => {
  return (
    <button className={styles.btn} type="button">
      <span>{textBtn}</span>
      <img src={exitImg} />
    </button>
  );
};

export default BtnExit;
