import './styles.css';
import CardImg from 'assets/img/car-catalog.png';
import ButtonBuy from 'components/ButtonBuy';

function CarCard() {
  return (
    <div className='card-car'>
      <div className='card-top-container'>
        <img src={CardImg} alt="Nome do carro" />
      </div>
      <div className='card-bottom-container'>
        <h6> Audi Supra TT </h6>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisio </p>
        <ButtonBuy></ButtonBuy>
      </div>
    </div>
  );
}

export default CarCard;
