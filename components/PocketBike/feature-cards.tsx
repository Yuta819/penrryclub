"use client";
import React from "react";
import { IconType as ReactIconType } from "react-icons";
import { FiShield, FiBookOpen, FiAlertTriangle } from "react-icons/fi";
import { CurrencyYenIcon } from "@heroicons/react/24/outline";
import { PiMotorcycleFill } from "react-icons/pi";
import { BsBasket3Fill, BsBox, BsPhone } from "react-icons/bs";
import PricingSection from "./pricing-section";
import ReservationProcess from "./reservation-process";
import { motion } from "framer-motion";

type IconType = ReactIconType | typeof CurrencyYenIcon;

const FeatureCards = () => {
  return (
    <div id="features" className="p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        ポケットバイクの特徴
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card
          title="手軽な料金設定"
          subtitle="1ヶ月¥10,000 / 1週間¥4,000"
          Icon={CurrencyYenIcon}
        />
        <Card
          title="安心サポート"
          subtitle="ヘルメット・自賠責保険付き"
          Icon={FiShield}
        />
        <Card
          title="初心者対応"
          subtitle="操作レクチャー付きで安心"
          Icon={FiBookOpen}
        />
        <Card
          title="トラブル対応"
          subtitle="バイク無料交換サービス"
          Icon={PiMotorcycleFill}
        />
      </div>
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        オプションサービス
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-8">
        <Card title="前かご" subtitle="500円" Icon={BsBasket3Fill} />
        <Card title="リアボックス" subtitle="500円" Icon={BsBox} />
        <Card title="スマホホルダー" subtitle="500円" Icon={BsPhone} />
      </div>
      <PricingSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ReservationProcess />
      </motion.div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
}

const Card = ({ title, subtitle, Icon }: CardType) => {
  return (
    <a className="w-full p-4 rounded border-[1px] border-slate-600 relative overflow-hidden group bg-neutral-800">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 w-36 h-36 text-neutral-700 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 w-8 h-8 text-violet-400 group-hover:text-white transition-colors relative z-10 duration-300" />

      <h3 className="font-medium text-lg text-white group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default FeatureCards;
