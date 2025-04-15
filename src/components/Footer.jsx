import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3 mb-4">
            <h3 className="h5 mb-3">AutoElite</h3>
            <p className="text-muted">
              Premium car rental and sales service since 2025. Experience luxury and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h4 className="h6 mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Our Fleet</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h4 className="h6 mb-3">Services</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Car Sales</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Car Rental</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Maintenance</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Insurance</a></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="col-md-3 mb-4">
            <h4 className="h6 mb-3">Connect With Us</h4>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-muted">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-muted">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-muted">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-top border-secondary mt-4 pt-4 text-center">
          <p className="text-muted mb-0">&copy; 2025 AutoElite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}