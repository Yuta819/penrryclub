'use client'
import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiPhone, FiMail } from "react-icons/fi";

const FAQSection = () => {
  const faqs = [
    {
      question: "台車交換の手順は？",
      answer: "店舗にご連絡もしくは引き渡し時にご確認ください。無料で交換いたします。"
    },
    {
      question: "オプションの在庫確認方法は？",
      answer: "予約時にお問い合わせいただくか、店舗に直接お電話でご確認ください。"
    },
    {
      question: "支払い方法は？",
      answer: "現金、銀行振り込み、PayPayのみ対応しています。"
    }
  ];

  return (
    <div id="faq" className="relative overflow-hidden bg-white py-24 w-full">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-violet-200/30 via-pink-200/30 to-transparent opacity-60"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">よくある質問とお問い合わせ</h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">アクセス情報</h3>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">受け渡し場所の情報</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiMapPin className="w-5 h-5 mr-2 text-purple-600" />
                <p className="text-gray-600"><strong>住所：</strong>西池袋公園（池袋駅西口から徒歩4分）</p>
              </div>
              <div className="flex items-center">
                <FiClock className="w-5 h-5 mr-2 text-purple-600" />
                <p className="text-gray-600"><strong>営業時間：</strong>いつでもご連絡ください</p>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mt-4 mb-2">連絡先情報</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiPhone className="w-5 h-5 mr-2 text-purple-600" />
                <a href="tel:070-2164-3618" className="text-gray-600 hover:text-purple-600 transition-colors">
                  <strong>電話番号：</strong>070-2164-3618
                </a>
              </div>
              <div className="flex items-center">
                <FiMail className="w-5 h-5 mr-2 text-purple-600" />
                <a 
                  href="mailto:chibatakumi0917@gmail.com?subject=PocketBikeに関する相談" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <strong>メールアドレス：</strong>chibatakumi0917@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.426374354854!2d139.70371384442745!3d35.7298398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d5bf1818111%3A0xc0b205c1fae59011!2z6LGK5bO25Yy656uL6KW_5rGg6KKL5YWs5ZyS!5e0!3m2!1sja!2sjp!4v1734263618292!5m2!1sja!2sjp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

