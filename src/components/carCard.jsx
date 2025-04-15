import React from 'react';
import { Calendar, DollarSign } from 'lucide-react';

export default function CarCard({ car, onClick }) {
  return (
    <div
      className="card shadow-sm h-100 border-0"
      onClick={onClick}
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Image Section */}
      <div
        className="position-relative"
        style={{
          height: '200px',
          backgroundColor: '#f8f9fa',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={car.image}
          alt={car.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
            width: '100%',
            height: '100%',
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
      <div className="card-body" style={{ padding: '1.5rem' }}>
        <h5
          className="card-title"
          style={{
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginBottom: '0.5rem',
          }}
        >
          {car.brand} {car.name}
        </h5>
        <p
          className="card-text text-muted"
          style={{ fontSize: '0.9rem', marginBottom: '1rem' }}
        >
          {car.year}
        </p>

        {/* Price and Rent Section */}
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ marginBottom: '1rem' }}
        >
          <div className="d-flex align-items-center">
            <DollarSign className="me-2 text-primary" />
            <span
              className="fw-bold"
              style={{ fontSize: '1rem', color: '#007bff' }}
            >
              ${car.price.toLocaleString()}
            </span>
          </div>
          <div className="d-flex align-items-center">
            <Calendar className="me-2 text-primary" />
            <span
              className="fw-bold"
              style={{ fontSize: '1rem', color: '#007bff' }}
            >
              ${car.rentPrice}/day
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button
            className="btn btn-primary flex-fill"
            style={{
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
            }}
          >
            Buy Now
          </button>
          <button
            className="btn btn-outline-primary flex-fill"
            style={{
              fontSize: '0.9rem',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
            }}
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}