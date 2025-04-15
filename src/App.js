import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CarCard from './components/carCard';
import CarModal from './components/carModal';
import BuyPage from './components/buypage'; //
import { cars } from './data/cars';
import CarDetails from './components/new';
import './components/App.css'
import { Car as CarIcon, ShieldCheck, Clock } from 'lucide-react';

function App() {
  const [showModal, setShowModal] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [actionType, setActionType] = useState(null); // Track whether "buy" or "rent" is clicked

  const filteredCars = selectedCategory === 'all'
    ? cars
    : cars.filter(car => car.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleAction = (type, car) => {
    setActionType(type); // Set the action type ("buy" or "rent")
    setSelectedCar(car); 

  };

  return (
    <div>
      
      {/* Conditionally Render BuyPage */}
      {actionType && selectedCar ? (
        <BuyPage actionType={actionType} car={selectedCar} onClose={() => setShowModal(false)} />
      ) : (
        <>
          {/* Hero Section */}
      <section
     className="py-5 text-white pt-3"
      style={{
      backgroundImage: `url('https://www.hdwallpapers.in/download/black_car_in_black_background_hd_black-2560x1440.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '80vh',
    }}
   >
      <Navbar />

      <div className="container">
        <h1 className='text-center text-white mt-5 pt-5' id='fonte'>WELCOME|| Dream ➵ Drive ➵ Own</h1>
        <div className="row align-items-center">
      {/* Text Section */}
          <div className="col-5">
            <div className="p-4">
            <h1
            className="display-4 fw-bold text-primary mb-4 animate__animated animate__bounce"
            id="font"
          >
             AutoElite
            </h1>
            
            <p className="h3">
            Your premier destination for luxury car rentals and purchases.
            Whether you're looking to own your dream car or rent one for a
            special occasion, we offer a curated selection of high-performance
            vehicles that redefine elegance and power.
            </p>
          <div className="d-flex justify-content-start gap-3 mt-4">
            <button
              className="btn btn-primary btn-lg shadow"
              style={{
                borderRadius: '50px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Browse Cars
            </button>
            <button
              className="btn btn-light btn-lg shadow"
              style={{
                borderRadius: '50px',
                boxShadow: '0 4px 6px rgba(255, 255, 255, 0.1)',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
          <div className="col-md-7 d-flex flex-row">
            <img
          src="https://i.pinimg.com/474x/e6/5c/e2/e65ce23fad9201bce7b5beb5e500ba87.jpg"
          alt="Luxury Car"
          className="img-fluid rounded m-1"
          style={{
            borderRadius: '12px',
            maxHeight: '400px',
            objectFit: 'cover',
          }}
        />
            <img
          src="https://i.pinimg.com/474x/96/c2/9c/96c29cde7d4fcd21d5be4ad687fed524.jpg"
          alt="Luxury Car"
          className="img-fluid rounded m-1"
          style={{
            borderRadius: '12px',
            maxHeight: '400px',
            objectFit: 'cover',
          }}
        />
           <img
          src="https://i.pinimg.com/474x/58/a2/e2/58a2e20ad3f20f2fba379a1496f8a26f.jpg"
          alt="Luxury Car"
          className="img-fluid rounded m-1"
          style={{
            borderRadius: '12px',
            maxHeight: '400px',
            objectFit: 'cover',
          }}
        />
                </div>
            </div>
           </div>
         </section>

          {/* Features Section */}
          <section className="py-5 bg-dark text-white">
            <div className="container">
              <div className="row text-center">
                <div className="col-md-4">
                  <CarIcon size={48} className="mb-3" />
                  <h4 className="fw-bold">Premium Selection</h4>
                  <p>Curated collection of luxury vehicles.</p>
                </div>
                <div className="col-md-4">
                  <ShieldCheck size={48} className="mb-3" />
                  <h4 className="fw-bold">Secure Booking</h4>
                  <p>Safe and transparent process.</p>
                </div>
                <div className="col-md-4">
                  <Clock size={48} className="mb-3" />
                  <h4 className="fw-bold">24/7 Support</h4>
                  <p>Always here when you need us.</p>
                </div>
              </div>
            </div>
          </section>

          <CarDetails />
          {/* Categories Section */}
          <section className="py-5 rounded">
            <div className="container  w-75 align-items-center bg-light shadow p-3"
              style={{
                backgroundImage: `url('https://e1.pxfuel.com/desktop-wallpaper/997/110/desktop-wallpaper-another-bugatti-spyros-panopoulos-chaos.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '30vh',
                borderRadius: '20px',
              }} id='size'>
              <h2 className="fw-bold text-center text-white mb-3  p-3">Browse by Category</h2>
              <div className="d-flex overflow-auto gap-3 pb-2 justify-content-center" id='position'>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`btn btn-md mt-2 mb-2 m-2 shadow ${
                    selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-danger'
                  }`}
                  style={{
                    borderRadius: '15px',
                    boxShadow: '0 4px 6px rgba(168, 160, 160, 0.1)',
                  }}>
                  All Cars
                </button>
                {['SUV', 'Sedan', 'Sports', 'Luxury', 'Electric'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className={`btn btn-md mt-2 mb-2 m-2  ${
                      selectedCategory === category.toLowerCase()
                        ? 'btn-primary'
                        : 'btn-outline-danger'
                    }`}
                    style={{
                      borderRadius: '15px',
                      boxShadow: '0 4px 6px rgba(172, 169, 169, 0.1)',
                    }}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Car Grid Section */}
          <section className="py-5">
            <div className="container">
              <div className="row">
                {filteredCars.map((car) => (
                  <div className="col-md-4 mb-4" key={car.id}>
                    <CarCard
                      car={car}
                      onClick={() => setSelectedCar(car)}
                      // Add Buy and Rent buttons with handlers
                      renderActions={() => (
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-primary flex-fill"
                            onClick={() => handleAction('buy', car)}
                          >
                            Buy
                          </button>
                          <button
                            className="btn btn-outline-primary flex-fill"
                            onClick={() => handleAction('rent', car)}
                          >
                            Rent
                          </button>
                        </div>
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Car Modal */}
          {selectedCar && (
            <CarModal car={selectedCar} onClose={() => setSelectedCar(null)}
            handleAction={handleAction} />
          )}
        </>
      )}

      
    </div>
  );
}

export default App;
