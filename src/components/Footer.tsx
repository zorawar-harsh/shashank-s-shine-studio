import { motion } from 'framer-motion';
import { Instagram, Youtube, Star, Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';
// Example if using Lucide React

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/50">
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Shashank Car Detailing" className="h-12 sm:h-14 lg:h-16 w-auto mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
              Premium car detailing services that bring out the true beauty of your vehicle. 
              Quality, precision, and excellence in every detail.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.instagram.com/_shashank_car_detailing/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://www.youtube.com/@shashanksinghpukhray"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube"
              >
                <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Google Reviews"
              >
                <Star size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-2 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'Services', 'About', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-2 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Exterior Wash',
                'Interior Detailing',
                'Ceramic Coating',
                'Paint Correction',
                'PPF Installation',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-2 sm:mb-4">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-4">
              <li>
                <a href="tel:9506050605" className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone size={14} className="sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  +91 95 06 05 06 05
                </a>
              </li>
              <li>
                <a href="mailto:info@shashankdetailing.com" className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={14} className="sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  shashankcardetailing@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Near NandLal Chauraha, Govind Nagar Kanpur.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shashank Car Detailing. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
