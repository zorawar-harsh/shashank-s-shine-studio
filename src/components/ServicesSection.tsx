import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Shield, Sparkles, Car, Brush, SprayCan } from 'lucide-react';



interface Service {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  price: string;
  // img?: string;
  video?: string;
  alt?: string;
}

const services: Service[] = [
  {
    icon: Droplets,
    title: 'Exterior Wash',
    description: 'Complete exterior wash with premium foam, hand dry, and tire dressing for a showroom shine.',
    price: 'Starting ₹500',
    video: 'https://res.cloudinary.com/ddwdo7ptb/video/upload/v1770285973/exterior-wash_yc2qng.mp4',
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description: 'Deep cleaning of seats, carpets, dashboard, and all interior surfaces with premium products.',
    price: 'Starting ₹2000',
    video: 'https://res.cloudinary.com/ddwdo7ptb/video/upload/v1770285971/interior_ufsu1k.mp4',
  },
  {
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-lasting ceramic protection that provides superior gloss and hydrophobic properties.',
    price: 'Starting ₹10000',
    video: 'https://res.cloudinary.com/ddwdo7ptb/video/upload/v1770285980/ceramic-coating_anxmsx.mp4',
  },
  {
    icon: Brush,
    title: 'Paint Correction',
    description: 'Remove swirl marks, scratches, and oxidation to restore your paint to perfection.',
    price: 'Starting ₹8000',
   video: 'https://res.cloudinary.com/ddwdo7ptb/video/upload/v1770285972/paint_w5zxm0.mp4'
  },
  {
    icon: SprayCan,
    title: 'PPF Installation',
    description: 'Paint Protection Film installation to protect your vehicle from chips and scratches.',
    price: 'Starting ₹50000',
    video: 'https://res.cloudinary.com/ddwdo7ptb/video/upload/v1770285918/ppf_qo7ncz.mp4'
  },
  {
    icon: Car,
    title: 'Full Detail Package',
    description: 'Complete interior and exterior detailing with paint correction and ceramic coating.',
    price: 'Starting ₹20000',
    video: 'https://res.cloudinary.com/ddwdo7ptb/video/upload/v1770285868/polishing_ssqcwu.mp4'
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
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="font-display text-xs sm:text-sm tracking-widest text-primary mb-2 sm:mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
            Premium Detailing <span className="gradient-text">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            From basic wash to complete paint correction, we offer comprehensive
            car care solutions tailored to your needs.
          </p>
          <div className="line-accent w-16 sm:w-24 mx-auto mt-4 sm:mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card-hover relative overflow-hidden group cursor-pointer"
            >
              {/* Video background — only rendered when the card has a video */}
              {service.video && (
                <video
                  src={service.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* Gradient overlay — only rendered when the card has a video */}
              {service.video && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-300" />
              )}

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 lg:p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3
                  className={`font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors ${
                    service.video ? 'text-white' : ''
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed ${
                    service.video ? 'text-white/70' : 'text-muted-foreground'
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="font-display text-base sm:text-lg text-primary font-semibold">
                    {service.price}
                  </span>
                  <a
                    href="#contact"
                    className={`text-xs sm:text-sm font-display tracking-wider transition-colors hover:text-primary ${
                      service.video ? 'text-white/60' : 'text-foreground/60'
                    }`}
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}