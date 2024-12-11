// File: components/hangglider/HeroSection.tsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center justify-center snap-start">
      <div className="text-center text-white p-4 sm:p-8 rounded-lg max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow-lg"
        >
          自由に空を飛ぶ喜び
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-shadow-md"
        >
          ハングライダー部で新しい世界を体験しよう
        </motion.p>
      </div>
    </section>
  );
}
