import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    car: 'BMW 5 Series',
    rating: 5,
    text: 'Absolutely phenomenal work! My BMW looks better than when I first bought it. The ceramic coating is flawless and the attention to detail is incredible. Highly recommended!',
  },
  {
    name: 'Priya Sharma',
    car: 'Mercedes GLC',
    rating: 5,
    text: 'Best car detailing service in the city! Shashank and his team are true professionals. The interior detailing was thorough and my car smells amazing. Will definitely come back.',
  },
  {
    name: 'Amit Patel',
    car: 'Audi A4',
    rating: 5,
    text: 'Got the full detail package and it was worth every rupee. The paint correction removed all the swirl marks and the finish is like glass. Outstanding service!',
  },
  {
    name: 'Sunita Reddy',
    car: 'Honda City',
    rating: 5,
    text: 'Professional, punctual, and perfect results. They treated my car with such care. The before and after difference is remarkable. Thank you Shashank Car Detailing!',
  },
  {
    name: 'Vikram Singh',
    car: 'Ford Mustang',
    rating: 5,
    text: 'These guys know their craft! The PPF installation was seamless and the ceramic coating on top makes my Mustang look absolutely stunning. Top-notch quality.',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16 px-3"
        >
          <span className="font-display text-xs sm:text-sm tracking-widest text-primary mb-2 sm:mb-4 block">
            TESTIMONIALS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Shashank Car Detailing.
          </p>
          <div className="line-accent w-16 sm:w-24 mx-auto mt-4 sm:mt-6" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto px-3 sm:px-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-4 sm:p-6 md:p-10 lg:p-12 relative">
              <Quote className="absolute top-4 sm:top-6 left-4 sm:left-6 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-primary/20" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <motion.p
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 text-center mb-6 sm:mb-8 leading-relaxed"
                >
                  "{testimonials[current].text}"
                </motion.p>
                
                {/* Author */}
                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="font-display text-base sm:text-lg font-semibold text-foreground">
                    {testimonials[current].name}
                  </div>
                  <div className="text-xs sm:text-sm text-primary">
                    {testimonials[current].car}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-2 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={prev}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              
              <div className="flex gap-1 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'w-6 sm:w-8 bg-primary'
                        : 'bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border/50 flex items-center justify-center text-foreground/60 hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
