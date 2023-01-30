import "./index.css";
import logo from "../../assets/logo.svg"
import Illustration from "../../assets/Illustration.svg";

const HomePage = ({ setmainPage }) => {
  return (
    <div className="container-home">
      <div className="container-second">
        <img className="logo" src={logo} alt="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button className="button-start" onClick={() => setmainPage(false)}>
          Iniciar
        </button>
      </div>
      <img src={Illustration} alt="imagem home" />
    </div>
  );
};

export default HomePage;
