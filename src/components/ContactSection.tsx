import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, MapPin, Clock, Send, Instagram, Youtube, Star } from 'lucide-react';
import { toast } from 'sonner';

const services = [
  'Exterior Wash',
  'Interior Detailing',
  'Ceramic Coating',
  'Paint Correction',
  'PPF Installation',
  'Full Detail Package',
];

export default function ContactSection() {


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `
      Hello, I would like to book an appointment.
      Name: ${formData.name}
      Phone: ${formData.phone}
      Email: ${formData.email}
      Service: ${formData.service}
      Preferred Date: ${formData.date}
      Message: ${formData.message}
    `.trim().replace(/\s+/g, ' ');

    const whatsappUrl = `https://wa.me/+919506050605?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...', {
      description: 'Please complete your booking there.',
    });
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="font-display text-xs sm:text-sm tracking-widest text-primary mb-2 sm:mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
            Book Your <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Ready to give your car the treatment it deserves? Fill out the form below 
            or contact us directly to schedule your appointment.
          </p>
          <div className="line-accent w-16 sm:w-24 mx-auto mt-4 sm:mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 ">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-semibold mb-1">Call Us</h4>
                  <a href="tel:9506050605" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors">
                    +91 95 06 05 06 05
                  </a>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Available Mon - Sat, 10 AM - 8 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-semibold mb-1">Visit Us</h4>
                  <iframe 
                  className='h-[180px] sm:h-[225px] w-full lg:w-[400px] '
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.2575487197205!2d80.30614067571287!3d26.44742587692753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47053dcbbb97%3A0x6891a56ce9112f8e!2sShashank%20Car%20Detailing!5e0!3m2!1sen!2sin!4v1770102056692!5m2!1sen!2sin" ></iframe>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-base sm:text-lg font-semibold mb-1">Working Hours</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: By Appointment Only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-4 sm:p-6 lg:p-8">
              <h3 className="font-display text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                Book Your Service
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-dark w-full text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-dark w-full text-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-dark w-full text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="input-dark w-full"
                    >
                      <option value="">Choose a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="input-dark w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-dark w-full resize-none"
                    placeholder="Tell us about your car and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send size={18} />
                      Book Appointment
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
