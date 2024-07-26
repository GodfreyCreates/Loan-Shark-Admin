"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import parallexmain from '../../public/assets/parallexmain.webp'; // Example image, replace with your own
import Footer from '@/components/Sections/Footer';
import Navbar from '@/components/Sections/Navbar';

const AboutUs: React.FC = () => {
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
        <title>About Us | [App Name]</title>
        <meta name="description" content="Learn more about [App Name] and our mission" />
      </Head>
      <Navbar/>
      <main className="min-h-screen mt-32">
        <section className="text-center py-12 p-4">
          <motion.h1
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-12"
          >
            Discover our mission, vision, and the team behind [App Name].
          </motion.p>
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center mb-12"
          >
            <Image
              className="rounded-2xl"
              src={parallexmain}
              alt="Our Team"
              width={600}
              height={400}
              placeholder="blur"
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-left"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6">
              At [App Name], our mission is to empower informal money lenders with the tools they need to manage loans efficiently, ensure compliance, and foster transparent and trustworthy relationships with their clients.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-6">
              We envision a world where financial management for informal lenders is streamlined, secure, and accessible from anywhere. By leveraging technology, we aim to revolutionize the lending industry.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="mb-6">
              Our team is composed of dedicated professionals with expertise in finance, technology, and customer service. We are passionate about delivering a top-notch product that meets the evolving needs of our users.
            </p>
          </motion.div>
        </section>
        <Footer/>
      </main>
    </>
  );
};

export default AboutUs;
