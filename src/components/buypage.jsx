import React, { useState } from 'react';

export default function BuyPage({ actionType, car, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${actionType} request for ${car.name}!`);
    // Add further logic here, such as sending the data to a server.
    onClose(); 
  };

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
      <div className="modal-dialog modal-dialog-centered">
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
              {actionType === 'buy' ? 'Buy' : 'Rent'} {car.name}
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
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{
                  fontSize: '1rem',
                  padding: '0.75rem',
                  borderRadius: '8px',
                }}
              >
                {actionType === 'buy' ? 'Confirm Purchase' : 'Confirm Rental'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}