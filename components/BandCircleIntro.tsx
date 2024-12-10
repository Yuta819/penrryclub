"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BandCircleIntro() {
  return (
    <div className="w-full bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-4">
            <span className="text-purple-500">NAMAE</span> BAND CIRCLE
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400">
            音楽で世界を震わせろ
          </p>
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-purple-500 opacity-50" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-blue-500 opacity-50" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-4 sm:px-6 lg:px-8"
          >
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-75" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
                COMING SOON
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative px-4 sm:px-6 lg:px-8"
          >
            <div className="absolute -inset-4 bg-white/5 skew-y-3" />
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6 text-purple-500">
                バンドサークルへようこそ！
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                私たちNAMAEバンドサークルは、音楽への情熱を共有する学生たちが集う場所です。初心者からベテランまで、すべての音楽愛好家を歓迎します。
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                ここでは、技術を磨き、創造性を解き放ち、忘れられない思い出を作ることができます。定期的なライブパフォーマンス、楽器レッスン、作曲ワークショップなど、音楽の世界を探求する機会が豊富にあります。
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>週3回の練習セッション</li>
                <li>月1回のライブパフォーマンス</li>
                <li>年2回の大規模音楽フェスティバル</li>
                <li>プロミュージシャンによるマスタークラス</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                今すぐ参加する
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
