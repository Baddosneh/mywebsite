import React from 'react';
import { Wine as Engine, Zap, Timer, Settings } from 'lucide-react';

export default function CarModal({ car, onClose, handleAction }) {
  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      role="dialog"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1050,
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content border-0 shadow-lg">
          {/* Modal Header */}
          <div
            className="modal-header"
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
            }}
          >
            <h5 className="modal-title fw-bold">
              {car.brand} {car.name}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>

          {/* Modal Body */}
          <div
            className="modal-body"
            style={{
              maxHeight: '500px',
              overflowY: 'auto',
            }}
          >
            {/* Image Section */}
            <div
              className="position-relative mb-4"
              style={{
                height: '300px',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                overflow: 'hidden',
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
            </div>

            {/* Car Details */}
            <div className="d-flex justify-content-between align-items-start mb-4">
              <div>
                <h2 className="fw-bold">{car.brand} {car.name}</h2>
                <p className="text-muted">{car.year}</p>
              </div>
              <div className="text-end">
                <p className="fs-4 fw-bold text-primary">${car.price.toLocaleString()}</p>
                <p className="text-muted">${car.rentPrice}/day</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="row text-center mb-4">
              <div className="col-6 col-md-3">
                <Engine className="text-primary mb-2" size={24} />
                <p className="mb-0">{car.specs.engine}</p>
              </div>
              <div className="col-6 col-md-3">
                <Zap className="text-primary mb-2" size={24} />
                <p className="mb-0">{car.specs.power}</p>
              </div>
              <div className="col-6 col-md-3">
                <Timer className="text-primary mb-2" size={24} />
                <p className="mb-0">{car.specs.acceleration}</p>
              </div>
              <div className="col-6 col-md-3">
                <Settings className="text-primary mb-2" size={24} />
                <p className="mb-0">{car.specs.transmission}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h5 className="fw-bold">Features</h5>
              <div className="row">
                {car.features.map((feature, index) => (
                  <div
                    key={index}
                    className="col-6 col-md-4 d-flex align-items-center mb-2"
                  >
                    <div
                      className="bg-primary rounded-circle me-2"
                      style={{ width: '8px', height: '8px' }}
                    ></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className=" d-flex gap-3">
            <button
              className="btn btn-primary w-100"
              style={{
                fontSize: '1rem',
                padding: '0.75rem',
                borderRadius: '8px',
              }}
              onClick={() => handleAction('buy', car)} // Handle Buy action
            >
              Buy Now
            </button>
            <button
              className="btn btn-outline-primary w-100"
              style={{
                fontSize: '1rem',
                padding: '0.75rem',
                borderRadius: '8px',
              }}
              onClick={() => handleAction('rent', car)} // Handle Rent action
            >
              Rent This Car
            </button>
          </div>

          </div>

          {/* Modal Footer */}
          <div className="modal-footer d-flex gap-3">
            
          </div>
        </div>
      </div>
    </div>
  );
}