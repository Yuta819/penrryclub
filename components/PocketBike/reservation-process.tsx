"use client";
import React, { useState } from "react";
import {
  FiPhone,
  FiFileText,
  FiCheckSquare,
  FiShield,
  FiAlertTriangle,
  FiCheck,
  FiAlertCircle,
} from "react-icons/fi";
import { motion } from "framer-motion";

const blobAnimation = `
  @keyframes blob-bounce {
    0% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
    25% { transform: translate(-100%, -100%) translate3d(100%, 0, 0); }
    50% { transform: translate(-100%, -100%) translate3d(100%, 100%, 0); }
    75% { transform: translate(-100%, -100%) translate3d(0, 100%, 0); }
    100% { transform: translate(-100%, -100%) translate3d(0, 0, 0); }
  }
`;

const ReservationProcess = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      icon: FiPhone,
      title: "予約方法を選択",
      description: "「電話」または「フォーム送信」で予約",
    },
    {
      icon: FiFileText,
      title: "書類用意",
      description: "運転免許証、身分証明書を引き渡し時に確認いたします。",
    },
    {
      icon: FiCheckSquare,
      title: "支払い＆出発",
      description: "引き渡し時に支払い＆出発！",
    },
  ];

  return (
    <div
      id="reservation"
      className="relative py-24 overflow-hidden backdrop-blur-sm"
    >
      <div className="absolute inset-0 bg-neutral-900"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">予約方法</h2>
          <p className="text-xl text-gray-300">簡単3ステップで予約完了</p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-300 to-indigo-300 transform -translate-y-1/2"></div>

          <div className="relative grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div
                  className={`p-8 bg-gray-900 rounded-xl shadow-lg transition-all duration-300 ${
                    hoveredStep === index ? "scale-105" : ""
                  } h-64 sm:h-72 md:h-80 lg:h-96 flex flex-col justify-between text-white`}
                >
                  <div>
                    <div className="absolute top-0 left-1/2 -mt-5 -ml-5 w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <step.icon className="w-12 h-12 text-violet-600 mb-6 mx-auto" />
                    <h3 className="font-bold text-xl text-white mb-4">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-white">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="tel:070-2164-3618"
            className="flex items-center gap-2 text-lg font-medium text-white hover:text-violet-400 transition-colors bg-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg"
          >
            <FiPhone className="w-5 h-5" />
            070-2164-3618
          </a>
          <button
            className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={() =>
              (window.location.href = "https://line.me/R/ti/p/@273smptm")
            }
          >
            LINEで申し込む
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12 text-sm text-gray-300"
        >
          ※ 予約状況により、ご希望の日時に添えない場合がございます。
        </motion.div>

        <SafetyAndPrecautionsSection />
      </div>
    </div>
  );
};

const SafetyAndPrecautionsSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        安全サポートと注意事項
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="安全サポート"
          items={["初心者でも安心の操作レクチャー", "台車無料交換サービス"]}
          blobColor="#A78BFA"
        />
        <Card
          title="注意事項"
          items={[
            "盗難時：60,000円のお支払い",
            "鍵紛失：5,000円のお支払い",
            "任意保険加入推奨（自賠責保険のみ対応）",
          ]}
          blobColor="#A78BFA"
        />
      </div>
    </div>
  );
};

interface CardProps {
  title: string;
  items: string[];
  blobColor: string;
}

const Card: React.FC<CardProps> = ({ title, items, blobColor }) => {
  const IconComponent = title === "安全サポート" ? FiShield : FiAlertTriangle;
  return (
    <div className="relative w-full max-w-[300px] h-[250px] rounded-[14px] overflow-hidden flex flex-col items-center justify-center mx-auto">
      <div className="absolute top-[5px] left-[5px] right-[5px] bottom-[5px] z-[2] bg-[rgba(200,200,200,0.55)] backdrop-blur-[24px] rounded-[10px] overflow-hidden outline-[2px] outline-white p-[10px]">
        <div className="flex items-center mb-4">
          <IconComponent className="w-6 h-6 mr-2" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              {title === "安全サポート" ? (
                <FiCheck className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-green-500" />
              ) : (
                <FiAlertCircle className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-red-500" />
              )}
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="absolute z-[1] top-1/2 left-1/2 w-[150px] h-[150px] rounded-full opacity-100 blur-[12px]"
        style={{
          backgroundColor: blobColor,
          animation: "blob-bounce 5s infinite ease",
        }}
      />
      <style jsx>{blobAnimation}</style>
    </div>
  );
};

export default ReservationProcess;
