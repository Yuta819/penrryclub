"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import GridBackground from "./decorative/GridBackground";

export default function AboutSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <GridBackground />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionTitle title="私たちについて" subtitle="伝統と革新の融合" />

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed font-japanese">
              琵琶と尺八を通じて、日本の伝統音楽の素晴らしさを伝えています。
              古典から現代まで、幅広いレパートリーを演奏し、
              新しい音楽の可能性を追求しています。
            </p>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                <span>定期練習会の開催</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                <span>伝統音楽の継承と革新</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                <span>演奏会やイベントの開催</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/a/2.png"
              alt="Traditional Instruments"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-neutral-900/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
