import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, Users, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Technicians',
    description: 'Trained professionals with years of experience',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Efficient service without compromising quality',
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Your satisfaction is our top priority',
  },
  {
    icon: ThumbsUp,
    title: 'Quality Products',
    description: 'Only premium detailing products used',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm tracking-widest text-primary mb-4 block">
              ABOUT US
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Passion for <span className="gradient-text">Perfection</span>
            </h2>
            <div className="line-accent w-16 mb-6" />
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Shashank Car Detailing, we believe every car deserves to look its best. 
              Founded by Shashank Singh with a passion for automotive excellence, we've 
              been transforming vehicles and exceeding expectations since day one.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of skilled technicians uses only the finest products and techniques 
              to deliver results that speak for themselves. Whether it's a basic wash or 
              a complete paint correction, we treat every vehicle as if it were our own.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-8 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative z-10 space-y-6">
                <div className="text-center pb-6 border-b border-border/50">
                  <div className="font-display text-5xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-foreground mb-1">1000+</div>
                    <div className="text-xs text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-3xl font-bold text-foreground mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">5-Star Reviews</div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/50 text-center">
                  <p className="font-display text-sm tracking-wider text-primary">
                    "Quality is not an act, it's a habit"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Shashank Singh, Founder</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
