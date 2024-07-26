"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">[App Name]</h3>
            <p className="mt-2 text-gray-400">
              Streamline your loan management with our comprehensive solution.
            </p>
            <div className="mt-4 flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <IconBrandFacebook size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <IconBrandTwitter size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <IconBrandInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white"
              >
                <IconBrandLinkedin size={24} />
              </motion.a>
            </div>
          </div>
          <div className="flex space-x-8">
            <div>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/features" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Resources</h4>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/about" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">Terms of Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" legacyBehavior>
                    <a className="text-gray-400 hover:text-white">Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">&copy; 2024 [App Name]. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;