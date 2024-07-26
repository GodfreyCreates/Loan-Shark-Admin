"use client";

import React from "react";
import Head from "next/head";
import { Button } from "../ui/button"; // Example Button component
import { IconCircleArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home | [App Name]</title>
        <meta
          name="description"
          content="Transform Your Lending Experience with [App Name]"
        />
      </Head>
      <main className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(/images/1.avif)",
            opacity: 0.3 // Adjust opacity for background image
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        </div>
        <section className="relative flex flex-col items-center justify-center min-h-dvh p-4">
          <section className="text-center py-12">
            <h1 className="text-3xl sm:text-3xl md:text-7xl lg:text-8xl font-bold mb-4">
              Transform Your
              <br />
              Lending <span className="animated-gradient-text">Experience</span>
            </h1>
            <p className="text-lg mb-6">
              Streamline loan tracking, manage clients effortlessly, and enhance
              your financial operations with cutting-edge tools tailored for
              informal lenders.
            </p>
            <Button
              asChild
              className="animated-gradient hover:bg-indigo-600 hover:scale-105 duration-300 transition ease-in-out rounded-xl font-semibold p-8"
            >
              <Link href="/signup">
                Get Started Today <IconCircleArrowUpRight className="ml-2" />
              </Link>
            </Button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
