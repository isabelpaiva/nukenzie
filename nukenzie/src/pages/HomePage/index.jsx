import './index.css';
// import logobranca from '../../assets/logobranca.svg'
import Illustration from '../../assets/Illustration.svg'

const HomePage = ({setPagePrincipal}) =>{
    
    return (
        <div className='container-home'>
            <div className='container-second'>
                {/* <img src={logobranca} alt="logo" /> */}
                <h1>Centralize o controle das suas finanças</h1>
                <p>de forma rápida e segura</p>
                <button className='button-iniciar' onClick={() => setPagePrincipal(false)}>Iniciar</button>
            </div>
            <img src={Illustration} alt="imagem home" />    
        </div>
    );
};

export default HomePage;