"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconStar } from '@tabler/icons-react';

const testimonialsData = [
  {
    name: "John Doe",
    title: "CEO, Example Corp",
    testimonial: "This app has transformed the way we manage our loans. The automated reminders and detailed client profiles are game-changers."
  },
  {
    name: "Jane Smith",
    title: "Manager, ABC Finance",
    testimonial: "The real-time financial dashboard and customizable loan terms have made our processes more efficient and transparent."
  },
  // Add more testimonials here
];

const Testimonials: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <>
      <Head>
        <title>Testimonials | [App Name]</title>
        <meta name="description" content="See what our clients say about [App Name]" />
      </Head>
      <main className="bg-gray-100 min-h-screen p-4">
        <section className="text-center py-12">
          <motion.h1
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Testimonials
          </motion.h1>
          <motion.p
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-12"
          >
            Hear from our satisfied clients who have transformed their lending operations with [App Name].
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                ref={ref}
                animate={controls}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <IconStar className="text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-gray-700 mb-2">{testimonial.title}</p>
                <p className="text-gray-700">{testimonial.testimonial}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Testimonials;
