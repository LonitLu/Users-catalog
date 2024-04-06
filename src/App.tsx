import "./normalize.css";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { Registration } from "./components/Registration/Registration";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
        <Profile />
        <Registration />
      </div>
    </>
  );
}

export default App;
