"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react"; // Importing the burger menu icon

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for burger menu toggle

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        className={cn(
          "flex w-full sm:w-full md:max-w-fit lg:max-w-fit xl:max-w-fit fixed top-2 inset-x-0 mx-auto border rounded-full opacity-30 backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-between",
          className
        )}
      >
        <div className="flex items-center space-x-8">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden focus:outline-none"
          >
            <IconMenu2 className="w-6 h-6" />
          </button>
          <div className="hidden sm:flex space-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-foreground items-center flex space-x-1 hover:text-primary"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <button className="border text-sm font-medium relative text-foreground px-4 py-2 ml-10 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 inset-x-0 opacity-30 backdrop-blur-xl rounded-2xl border m-2 shadow-lg z-[4999] p-4 sm:hidden"
          >
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                className="block text-center py-2 dark:text-foreground hover:text-primary"
                onClick={() => setMenuOpen(false)} // Close menu on item click
              >
                {navItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  );
};
