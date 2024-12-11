// File: components/hangglider/AboutSection.tsx
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="h-screen flex items-center justify-center snap-start">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white text-shadow-lg"
        >
          ハングライダー部について
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto text-white text-shadow-md"
        >
          私たちハングライダー部は、空を自由に飛ぶ楽しさを追求し、仲間と共に成長することを目指しています。
          初心者から経験者まで、安全に配慮しながら、自然と一体になれるこのスポーツの魅力を体験しています。
        </motion.p>
      </div>
    </section>
  );
}
