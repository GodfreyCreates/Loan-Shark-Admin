"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { products } from "../../Constants/ServicesData"; // Import the data
import Head from "next/head";
import Try from "@/components/Sections/Try";
import { Navbar } from "@/components/Sections/Navbar";

export const Pricing: React.FC = () => {
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
        <title>Pricing | [App Name]</title>
        <meta name="description" content="Choose the plan that best suits your needs with [App Name]" />
      </Head>
      <Navbar/>
      <main className="h-screen p-4 mt-32">
        <motion.h1
          ref={headingRef}
          animate={headingControls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center relative text-4xl font-bold mb-6"
        >
          Affordable <span className="animated-gradient-text">Pricing</span>
        </motion.h1>

        <motion.p
        ref={headingRef}
        animate={headingControls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="text-lg mb-12 text-center">
            Choose the plan that best suits your needs and start managing loans and clients with [App Name].<br />We offer flexible pricing to accommodate different scales and requirements.
          </motion.p>

        {/* Carousel section */}
        <div className="flex justify-center p-6">
          {/* Product Cards section */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
        <Try/>
      </main>
    </>
  );
};

interface ProductCardProps {
  product: {
    title: string;
    price: string;
    popular: boolean;
    features: string[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`rounded-2xl border p-6 h-fit shadow-md relative overflow-hidden
        ${product.popular ? "border-2 border-primary" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
    >
      {product.popular && (
        <div className="absolute top-0 left-0 bg-primary rounded-br-xl text-primary-foreground px-3 py-1 text-sm font-semibold">
          Most Popular
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-xl text-gray-100 mb-4">{product.price}</p>
      <ul className="mb-4">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-300 mb-2">
            <svg
              className="w-5 h-5 text-primary mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <motion.button
        className="mt-auto py-2 px-4 bg-primary text-white rounded-xl hover:bg-indigo-600"
        whileHover={{ scale: 1.1 }}
      >
        Subscribe Now
      </motion.button>
    </motion.div>
    
  );
};

export default Pricing;
