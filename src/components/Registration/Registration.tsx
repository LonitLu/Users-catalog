import styles from "./Registration.module.css";

export const Registration = () => {
  return (
    <>
      <div className={styles.register}>
        <form className={styles.form} action="">
          <h2>Регистрация</h2>

          <div className={styles.inputGroup}>
            <label htmlFor="name">Имя</label>
            <input
              placeholder="Артур"
              type="text"
              name="name"
              id="name"
              required
            ></input>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Электронная почта</label>
            <input
              className={styles.input__error}
              placeholder="example@mail.ru"
              type="email"
              name="email"
              id="email"
              required
            ></input>
            <span className={styles.error}>Ошибка</span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              placeholder="******"
              type="password"
              name="password"
              id="password"
              required
              autoComplete="on"
            ></input>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="passwordConfirm">Подтвердите пароль</label>
            <input
              placeholder="******"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              required
              autoComplete="on"
            ></input>
          </div>

          <input
            className={styles.btn}
            type="submit"
            name="register"
            value="Зарегистрироваться"
          ></input>
        </form>
      </div>
    </>
  );
};
