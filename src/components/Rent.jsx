import React from 'react';
import { cars } from '../data/cars';

export default function Rent() {
  // Filter cars for rent
  const rentalCars = cars.filter(car => car.rentPrice);

  return (
    <div
      className="py-5 bg-dark"
      style={{
        
        minHeight: '100vh',
      }}
    >
      <div className="container text-white">
        {/* Page Header */}
        <div className="text-center m-5">
          <h1 className="display-4 fw-900">Welcome to AutoElite</h1>
          <h1 className="display-4 fw-bold">2025 Car Rentals</h1>
          <p className="lead">
            Explore our premium collection of cars available for rent. Luxury, performance, and comfort at your fingertips.
          </p>
        </div>

        {/* Cars for Rent */}
        <div className="row g-4">
          {rentalCars.map(car => (
            <div className="col-md-4 mb-4" key={car.id}>
              <div
                className="card shadow-sm h-100 border-0"
                style={{
                  borderRadius: '17px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Car Image */}
                <div
                  className="position-relative"
                  style={{
                    height: '200px',
                    backgroundColor: '#f8f9fa',
                  }}
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="img-fluid w-100 h-100"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <span
                    className="badge position-absolute top-0 end-0 m-3"
                    style={{
                      backgroundColor: '#007bff',
                      color: '#fff',
                      fontSize: '0.8rem',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                    }}
                  >
                    {car.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h5
                    className="card-title fw-bold"
                    style={{
                      fontSize: '1.25rem',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {car.brand} {car.name}
                  </h5>
                  <p className="card-text text-muted">{car.year}</p>
                  <p className="card-text text-muted"> 
                    <strong>Rent Price:</strong> ${car.rentPrice}/day
                  </p>
                  <ul className="list-unstyled">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-muted">
                        ✔️ {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-transparent border-0">
                  <button
                    className="btn btn-primary w-100"
                    style={{
                      fontSize: '1rem',
                      padding: '0.75rem',
                      borderRadius: '8px',
                    }}
                  >
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}