import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Shield, Sparkles, Car, Brush, SprayCan } from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Exterior Wash',
    description: 'Complete exterior wash with premium foam, hand dry, and tire dressing for a showroom shine.',
    price: 'Starting ₹500',
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description: 'Deep cleaning of seats, carpets, dashboard, and all interior surfaces with premium products.',
    price: 'Starting ₹1,500',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-lasting ceramic protection that provides superior gloss and hydrophobic properties.',
    price: 'Starting ₹8,000',
  },
  {
    icon: Brush,
    title: 'Paint Correction',
    description: 'Remove swirl marks, scratches, and oxidation to restore your paint to perfection.',
    price: 'Starting ₹5,000',
  },
  {
    icon: SprayCan,
    title: 'PPF Installation',
    description: 'Paint Protection Film installation to protect your vehicle from chips and scratches.',
    price: 'Starting ₹15,000',
  },
  {
    icon: Car,
    title: 'Full Detail Package',
    description: 'Complete interior and exterior detailing with paint correction and ceramic coating.',
    price: 'Starting ₹12,000',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm tracking-widest text-primary mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Premium Detailing <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From basic wash to complete paint correction, we offer comprehensive 
            car care solutions tailored to your needs.
          </p>
          <div className="line-accent w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-primary font-semibold">
                  {service.price}
                </span>
                <a 
                  href="#contact" 
                  className="text-sm font-display tracking-wider text-foreground/60 hover:text-primary transition-colors"
                >
                  Book Now →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
