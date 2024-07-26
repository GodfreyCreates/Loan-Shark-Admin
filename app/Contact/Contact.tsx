"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconPhone, IconMail } from '@tabler/icons-react';

const Contact: React.FC = () => {
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
        <title>Contact Us | [App Name]</title>
        <meta name="description" content="Get in touch with us for any inquiries or support" />
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
            Contact Us
          </motion.h1>
          <motion.p
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-12"
          >
            We’re here to help you with any questions or support you need. Reach out to us via phone or email.
          </motion.p>
          <div className="max-w-4xl mx-auto">
            <motion.div
              ref={ref}
              animate={controls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white p-6 rounded-lg shadow-lg mb-6 flex items-center"
            >
              <IconPhone className="text-indigo-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-700">+1 (234) 567-890</p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center"
            >
              <IconMail className="text-indigo-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-700">support@appname.com</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
