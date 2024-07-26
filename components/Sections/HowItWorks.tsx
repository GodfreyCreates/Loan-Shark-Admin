"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconHelp } from '@tabler/icons-react';

const HowItWorks: React.FC = () => {
  const headingControls = useAnimation();
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (headingInView) {
      headingControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: 50 });
    }
  }, [headingInView, headingControls]);

  return (
    <>
      <Head>
        <title>How It Works | [App Name]</title>
        <meta name="description" content="Learn how [App Name] simplifies your lending process" />
      </Head>
      <main className="min-h-screen p-4">
        <section className="text-center py-12">
          <motion.h1
            ref={headingRef}
            animate={headingControls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            How It <span className="animated-gradient-text">Works</span>
          </motion.h1>
          <motion.p
            ref={headingRef}
            animate={headingControls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-12"
          >
            Getting started with [App Name] is simple and straightforward. Follow these steps to streamline your loan management process.
          </motion.p>
          <motion.ol
            ref={headingRef}
            animate={headingControls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="list-decimal list-inside space-y-6 text-left max-w-2xl mx-auto"
          >
            {[
              "Sign Up: Create an account and set up your profile.",
              "Add Clients: Input client details to build comprehensive profiles.",
              "Create Loans: Set up new loan agreements with customizable terms.",
              "Process Payments: Integrate with payment services to collect funds easily.",
              "Monitor and Report: Use dashboards and reports to track performance.",
              "Communicate: Send reminders and notifications through the app.",
              "Assess Risk: Evaluate creditworthiness and manage risk.",
              "Access Support: Explore forums and resources for assistance."
            ].map((step, index) => (
              <li key={index} className="flex items-start">
                <IconHelp className="text-blue-500 mr-3" />
                <span>{step}</span>
              </li>
            ))}
          </motion.ol>
        </section>
        <section className="text-center py-12">
          <motion.div
            ref={headingRef}
            animate={headingControls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">Sign up today and begin your journey with [App Name].</p>
            <motion.button
              className="py-2 px-6 bg-primary text-white rounded-xl hover:bg-indigo-600"
              whileHover={{ scale: 1.1 }}
              animate={headingControls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
            >
              Sign Up Now
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default HowItWorks;
