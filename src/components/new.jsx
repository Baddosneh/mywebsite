import React from 'react';

export default function CarDetails() {
  return (
    <div
      className="container-fluid py-5 p-5 mb-5 text-dark"
      style={{
        marginTop: '30px',
        minHeight: '100vh',
        borderRadius: '12px',
        color: '#000',
      }}
    >
      <h1
        className="display-4 fw-bold mb-4 text-center"
        style={{ fontFamily: 'Audiowide' }}
      >
        Drive Your Dreams
      </h1>

      <div className="row align-items-center g-4">
        {/* Info Section */}
        <div
          className="col-md-6 rounded p-3 d-flex flex-column justify-content-center"
          style={{
            backgroundColor: 'black',
            opacity: '0.8',
            height: '100%',
          }}
        >
          <h2 
            className="fw-bold mb-4 text-center mt-3"
            style={{ fontFamily: 'Audiowide', color: '#EA7300' }}
          >
            Luxury Cars for Every Occasion
          </h2>
          <p className='text-center text-white h3'>Dream ➵ Drive ➵ Own</p>
          <p
            className="lead mb-4 mt-3 shadow p-3 gap-2 rounded fw-bold"
            style={{ fontFamily: '', color: '#F8F4E1' }}
          >
            Welcome to AutoElite, your premier destination for luxury car
            rentals and purchases. We offer a curated selection of
            high-performance vehicles that redefine elegance and power. From
            sleek sedans to cutting-edge electric cars, our fleet is designed to
            impress. With transparent pricing, choose AutoElite.
          </p>
          <div className="d-flex flex-row justify-content-center gap-3">
            <img
              src="https://www.izmostock.com/wp-content/uploads/2015/12/bentley.png"
              className="img-fluid"
              alt="Bentley Logo"
            />
            <img
              src="https://www.izmostock.com/wp-content/uploads/2015/12/bmw.png"
              className="img-fluid"
              alt="BMW Logo"
            />
            <img src="https://www.izmostock.com/wp-content/uploads/2015/12/Tesla.png" className="img-fluid" alt="Mercedes Logo" />
          </div>
        </div>

        {/* Image Section */}
        <div
          className="col-md-6 d-flex  justify-content-center align-items-center"
          style={{
            height: '100%',
          }}
        >
          <img
            src="https://i.pinimg.com/736x/33/b7/80/33b7805bc529c57ba056a3551d856168.jpg"
            alt="Luxury Cars"
            className="img-fluid rounded m-2"
            style={{
              borderRadius: '20px',
              height: '80vh',
              objectFit: 'cover',
              width: '100vw',
            }}
          />
        </div>
      </div>
    </div>
  );
}