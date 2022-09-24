import { ReactComponent as MainImage } from 'assets/img/car-logo2.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <>
      <div className="home-main-container" >
        <div className="home-imagecar-container">
          <MainImage />
        </div>
        <div className="home-content-container">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>

      <div className="container-btn-catalogo">
        <div>
          <Link to="/catalog">
          <ButtonIcon />
          </Link>
        </div>
        <div className='container-subtitile'>
        <p>Comece agora a navegar</p>
        </div>
      </div>
    </>
  );
}

export default Home;
