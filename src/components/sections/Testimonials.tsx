import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card } from '../ui/Card';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      content: "SaaSFlow has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 300%.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechCorp",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      content: "The analytics dashboard gives us insights we never had before. We can now make data-driven decisions that have doubled our conversion rates.",
      author: "Michael Rodriguez",
      role: "Head of Growth",
      company: "StartupXYZ",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      content: "Outstanding customer support and a product that just works. We migrated our entire infrastructure and couldn't be happier with the results.",
      author: "Emily Johnson",
      role: "Operations Director",
      company: "GlobalTech",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    },
    {
      content: "The security features and compliance tools gave us confidence to scale globally. Now we're operating in 15 countries seamlessly.",
      author: "David Park",
      role: "CEO",
      company: "ScaleUp Inc",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Star className="w-4 h-4" />
            <span>Loved by thousands</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What our{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              customers say
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their businesses with our platform.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div
                className="relative flex justify-center items-center group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ overflow: 'visible' }}
              >
                {/* Sweep effect behind the card */}
                <motion.div
                  className="absolute -inset-8 z-0 pointer-events-none rounded-2xl"
                  initial={{ opacity: 0, scale: 0.8, x: 0 }}
                  animate={isHovered ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{
                    background: 'linear-gradient(120deg, rgba(59,130,246,0.45) 0%, rgba(168,85,247,0.45) 50%, rgba(255,255,255,0.7) 100%)',
                    filter: 'blur(40px)',
                  }}
                />
                <Card className="p-8 md:p-12 text-center relative z-10">
                  <Quote className="w-12 h-12 text-blue-500 dark:text-blue-400 mx-auto mb-6 opacity-50" />
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center space-x-4"
                  >
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 dark:text-white text-lg">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'bg-blue-600 dark:bg-blue-400 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '99%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}