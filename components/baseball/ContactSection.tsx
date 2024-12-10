"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { typography } from "@/utils/typography";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className={`${typography.heading} ${typography.metallic} text-3xl md:text-4xl mb-4`}
          >
            Contact Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with us to learn more about joining our baseball club
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg"
          >
            <Mail className="w-10 h-10 text-gray-300 mb-4 metallic-icon" />
            <h3 className={`${typography.metallic} text-lg font-semibold mb-2`}>
              Email
            </h3>
            <p className="text-gray-300 text-center">baseball@university.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg"
          >
            <Phone className="w-10 h-10 text-gray-300 mb-4 metallic-icon" />
            <h3 className={`${typography.metallic} text-lg font-semibold mb-2`}>
              Phone
            </h3>
            <p className="text-gray-300 text-center">+1 234 567 890</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg"
          >
            <MapPin className="w-10 h-10 text-gray-300 mb-4 metallic-icon" />
            <h3 className={`${typography.metallic} text-lg font-semibold mb-2`}>
              Location
            </h3>
            <p className="text-gray-300 text-center">
              University Stadium, Field 1
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
