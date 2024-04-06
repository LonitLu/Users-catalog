import { Header } from './Header/Header';
import Main from './Main/Main';
import styles from './Profile.module.css';

export const Profile = () => {
  return (
    <>
      <div className={styles.profile}>
        <Header />
        <Main />
      </div>
    </>
  )
};