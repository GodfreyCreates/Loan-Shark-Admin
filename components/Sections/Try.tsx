"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import parallexmain from "../../public/assets/parallexmain.webp";
import parallexleft from "../../public/assets/parallexleft.png";
import parallexright from "../../public/assets/parallexright.webp";
import { IconPhone, IconTestPipe } from "@tabler/icons-react";

export const Try: React.FC = () => {
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
        <title>Try | [App Name]</title>
        <meta
          name="description"
          content="Discover the powerful features of [App Name]"
        />
      </Head>
      <main>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4 mt-10">
          <div className="grid grid-cols-2">
          <motion.div
            ref={headingRef}
            animate={headingControls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Image
              className="rounded-2xl"
              src={parallexright}
              alt="person"
              width={150}
              height={150}
              //blurDataURL={blurDataURLsElements['globe.svg']}
              placeholder="blur"
            />
          </motion.div>
          <motion.div
            ref={headingRef}
            animate={headingControls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Image
              className="rounded-2xl"
              src={parallexleft}
              alt="Globe Image"
              width={200}
              height={200}
              //blurDataURL={blurDataURLsElements['globe.svg']}
              placeholder="blur"
            />
          </motion.div>
          </div>
          <div className="">
            <motion.h1
              ref={headingRef}
              animate={headingControls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-center md:text-left lg:text-left xl:text-left relative text-4xl font-bold mb-6"
            >
              Not sure which plan is{" "}
              <span className="animated-gradient-text">right for you?</span>
            </motion.h1>

            <motion.p
              ref={headingRef}
              animate={headingControls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-lg mb-12 text-center sm:text-center md:text-left lg:text-left xl:text-left"
            >
              Contact us for personalized advice helping you choose the plan
              that best suits your needs and start managing loans and clients
              with [App Name].
              <br />
              We can also develop a specialized system with additional features
              that you want for your loaning business.
            </motion.p>
            <div className="flex items-center justify-center md:flex md:items-start md:justify-start lg::flex lg:items-start lg:justify-start">
              <motion.button
                className="mt-auto py-2 flex items-center justify-center px-4 bg-primary text-white rounded-xl hover:bg-indigo-600"
                whileHover={{ scale: 1.1 }}
                animate={headingControls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              >
                Contact Sales{" "}
                <span>
                  <IconPhone className="ml-2" />
                </span>
                <link href=""></link>
              </motion.button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4 mt-32">
          <div className="">
            <motion.h1
              ref={headingRef}
              animate={headingControls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-center md:text-left lg:text-left xl:text-left relative text-4xl font-bold mb-6"
            >
              Try [App Name] risk-free with{" "}
              <span className="animated-gradient-text">14-day trial.</span>
            </motion.h1>

            <motion.p
              ref={headingRef}
              animate={headingControls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-lg mb-12 text-center sm:text-center md:text-left lg:text-left xl:text-left"
            >
              Experience all the features and see how it can transform your
              lending operations.
              <br />
              We can also develop a specialized system with additional features
              that you want for your loaning business.
            </motion.p>
            <div className="flex items-center justify-center md:flex md:items-start md:justify-start lg::flex lg:items-start lg:justify-start">
              <motion.button
                className="mt-auto py-2 flex items-center justify-center px-4 bg-primary text-white rounded-xl hover:bg-indigo-600"
                whileHover={{ scale: 1.1 }}
                animate={headingControls}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              >
                Start Free Trial{" "}
                <span>
                  <IconTestPipe className="ml-2" />
                </span>
                <link href=""></link>
              </motion.button>
            </div>
          </div>
          <motion.div
            ref={headingRef}
            animate={headingControls}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <Image
              className="rounded-2xl"
              src={parallexmain}
              alt="Globe Image"
              width={400}
              height={400}
              //blurDataURL={blurDataURLsElements['globe.svg']}
              placeholder="blur"
            />
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Try;
