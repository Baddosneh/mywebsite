import React from 'react';

export default function About() {
  return (
    <div
      className="py-5 text-white"
      style={{
        background: 'linear-gradient(to right, #4facfe, #00f2fe)',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">About AutoElite</h1>
          <p className="lead">
            Your trusted partner for luxury car rentals and sales since 2025.
          </p>
        </div>

        {/* About Content */}
        <div className="row align-items-center">
          {/* Left Section: Image */}
          <div className="col-md-6 mb-4">
            <img
              src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Cars"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right Section: Text */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p>
              At <strong>AutoElite</strong>, we specialize in providing a premium car buying and renting experience. 
              Our mission is to deliver luxury, performance, and comfort to our customers. Whether you're looking to 
              own your dream car or rent one for a special occasion, we have you covered.
            </p>
            <p>
              With a curated collection of the finest vehicles, we ensure that every car meets the highest standards 
              of quality and performance. Our team is dedicated to making your experience seamless and enjoyable.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-5">
          <h2 className="text-center fw-bold mb-4">Why Choose AutoElite?</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="p-4 bg-white text-dark rounded shadow">
                <h4 className="fw-bold">Luxury Selection</h4>
                <p>Handpicked vehicles that define luxury and performance.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white text-dark rounded shadow">
                <h4 className="fw-bold">Trusted Service</h4>
                <p>Over 10,000 satisfied customers and counting.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white text-dark rounded shadow">
                <h4 className="fw-bold">Seamless Experience</h4>
                <p>Easy booking and transparent pricing for your convenience.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <h3 className="fw-bold">Ready to Drive Your Dreams?</h3>
          <p>Explore our collection of luxury cars today!</p>
          <button className="btn btn-primary btn-lg me-3">Browse Cars</button>
          <button className="btn btn-outline-light btn-lg">Contact Us</button>
        </div>
      </div>
    </div>
  );
}