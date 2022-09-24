import CarCard from 'components/CarCard';


import './styles.css';

function Catalog() {
  return (
    <>
      <div className='container-search'>

        <div >
          <input className="search-container-box" type="text" placeholder="Digite sua busca"/>
        </div>

        <div className='btn-icon-search'>
          <p>BUSCAR</p>
        </div>

      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
          <div className="col-sm-6  col-lg-4 col-xl-4 col-xxl-3">
            <CarCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
