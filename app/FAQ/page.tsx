"use client";

import React, { useEffect } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconQuestionMark } from '@tabler/icons-react';

const faqData = [
  {
    question: "What is [App Name]?",
    answer: "[App Name] is a comprehensive loan management tool designed for informal money lenders. It helps you manage clients, track loans, process payments, and more."
  },
  {
    question: "How secure is my data?",
    answer: "We prioritize security and use advanced encryption methods to ensure your data is protected and confidential."
  },
  // Add more FAQs here
];

const FAQ: React.FC = () => {
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
        <title>FAQ | [App Name]</title>
        <meta name="description" content="Frequently Asked Questions about [App Name]" />
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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="text-lg mb-12"
          >
            Find answers to common questions about [App Name].
          </motion.p>
          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                ref={ref}
                animate={controls}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white p-6 rounded-lg shadow-lg mb-6"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <IconQuestionMark className="text-indigo-500 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
