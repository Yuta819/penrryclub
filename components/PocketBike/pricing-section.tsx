"use client";

import { CurrencyYenIcon } from "@heroicons/react/24/outline";
import { BsBasket3Fill, BsBox, BsPhone } from "react-icons/bs";
import React, { useState, useEffect } from "react";

const sparkleKeyframes = `
  @keyframes sparkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

const PricingSection = () => {
  const [sparkles, setSparkles] = useState<
    { left: string; top: string; duration: string }[]
  >([]);

  useEffect(() => {
    // クライアントサイドでランダム値を生成
    const generateSparkles = () =>
      Array.from({ length: 5 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${1 + Math.random() * 2}s`,
      }));
    setSparkles(generateSparkles());
  }, []);

  return (
    <div
      id="pricing"
      className="relative py-24 overflow-hidden bg-neutral-900 rounded-lg"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="bg-white backdrop-blur-sm rounded-lg overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-violet-100/20 to-orange-100/20 opacity-70"></div>

          <div className="relative max-w-7xl mx-auto p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black">料金プラン</h2>
              <p className="mt-4 text-lg text-gray-800">
                シンプルで分かりやすい料金体系です
              </p>
            </div>

            {/* Pricing Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-violet-100 to-orange-100 rounded-2xl blur-lg opacity-75"></div>
              <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  {/* Basic Plans */}
                  <div className="mb-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      基本料金
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative flex items-center justify-between p-6 bg-gray-50 rounded-lg overflow-hidden">
                        <div className="relative z-10">
                          <p className="font-medium text-gray-900">
                            1ヶ月プラン
                          </p>
                          <p className="text-sm text-gray-500">
                            長期利用にお得
                          </p>
                          <p className="mt-2 text-sm font-semibold text-emerald-600">
                            他社比30%お得！
                          </p>
                        </div>
                        <p className="relative z-10 text-2xl font-bold text-gray-900">
                          ¥10,000
                        </p>
                        {sparkles.map((sparkle, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-500 rounded-full"
                            style={{
                              left: sparkle.left,
                              top: sparkle.top,
                              animation: `sparkle ${sparkle.duration} linear infinite`,
                            }}
                          ></div>
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-emerald-100 opacity-50"></div>
                      </div>
                      <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">
                            1週間プラン
                          </p>
                          <p className="text-sm text-gray-500">
                            短期利用に最適
                          </p>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">
                          ¥4,000
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Optional Services */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      オプションサービス
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <BsBasket3Fill className="w-6 h-6 text-gray-400 mr-4" />
                        <div>
                          <p className="font-medium text-gray-900">前かご</p>
                          <p className="text-lg font-semibold text-gray-900">
                            ¥500
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <BsBox className="w-6 h-6 text-gray-400 mr-4" />
                        <div>
                          <p className="font-medium text-gray-900">
                            リアボックス
                          </p>
                          <p className="text-lg font-semibold text-gray-900">
                            ¥500
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <BsPhone className="w-6 h-6 text-gray-400 mr-4" />
                        <div>
                          <p className="font-medium text-gray-900">
                            スマホホルダー
                          </p>
                          <p className="text-lg font-semibold text-gray-900">
                            ¥500
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offer */}
            <style>{sparkleKeyframes}</style>
            <div className="text-center mt-8 text-sm text-gray-500">
              ※
              料金はすべて税込表示です。ヘルメット持参の方は、オプションサービス1つが無料になります。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
