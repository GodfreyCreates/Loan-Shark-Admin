"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import blogImage from '../public/assets/blog-image.jpg'; // Example image, replace with your own

const blogPosts = [
  {
    title: "How to Effectively Manage Loan Agreements",
    date: "July 20, 2024",
    snippet: "Managing loan agreements can be complex. Here are some tips and best practices to streamline the process.",
    image: blogImage
  },
  {
    title: "Understanding Interest Rates and Repayment Schedules",
    date: "June 15, 2024",
    snippet: "Interest rates and repayment schedules are critical components of any loan agreement. Learn how to set them up effectively.",
    image: blogImage
  },
  // Add more blog posts here
];

const Blog: React.FC = () => {
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
        <title>Blog | [App Name]</title>
        <meta name="description" content="Read our latest blog posts about loan management and best practices" />
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
            Blog
          </motion.h1>
          <motion.p
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-12"
          >
            Stay updated with our latest articles and insights on loan management.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                ref={ref}
                animate={controls}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <Image
                  className="rounded-t-lg"
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  placeholder="blur"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-2">{post.date}</p>
                <p className="text-gray-700">{post.snippet}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
