"use client";

import React from "react";
import { motion } from "framer-motion";
import { GeometricFrame } from "./GeometricFrame";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <GeometricFrame className="inline-block p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
              CONTACT US
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Interested in joining our basketball circle? Get in touch with us!
            </p>
          </GeometricFrame>
        </motion.div>

        <div className="max-w-md mx-auto">
          <GeometricFrame className="p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white border-2 border-orange-500 text-black font-bold hover:bg-orange-500 hover:text-white transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </GeometricFrame>
        </div>
      </div>
    </section>
  );
}
