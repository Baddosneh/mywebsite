import React from 'react';
import { cars } from '../data/cars';

export default function Buy() {
  // Filter cars for sale (you can add a specific condition if needed)
  const carsForSale = cars.filter(car => car.price);

  return (
    <div
      className="py-5"
      style={{
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
        minHeight: '100vh',
      }}
    >
      <div className="container text-white">
        {/* Page Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">2025 Cars for Sale</h1>
          <p className="lead">
            Discover our exclusive collection of cars available for purchase. Luxury, performance, and style await you.
          </p>
        </div>

        {/* Cars for Sale */}
        <div className="row">
          {carsForSale.map(car => (
            <div className="col-md-4 mb-4" key={car.id}>
              <div className="card shadow-sm h-100">
                {/* Car Image */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title">
                    {car.brand} {car.name}
                  </h5>
                  <p className="card-text text-muted">{car.year}</p>
                  <p className="card-text">
                    <strong>Price:</strong> ${car.price.toLocaleString()}
                  </p>
                  <ul className="list-unstyled">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-muted">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Card Footer */}
                <div className="card-footer bg-transparent border-0">
                  <button className="btn btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}