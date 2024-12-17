import React, { useState, useEffect } from "react";
import { BsBasket3Fill, BsBox, BsPhone } from "react-icons/bs";

const sparkleKeyframes = `
  @keyframes sparkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 1; }
  }
`;

const PricingSection = () => {
  const [sparkles, setSparkles] = useState<
    Array<{ left: string; top: string; animation: string }>
  >([]);
  const [offerSparkles, setOfferSparkles] = useState<
    Array<{ left: string; top: string; animation: string }>
  >([]);

  useEffect(() => {
    const newSparkles = Array(5)
      .fill(null)
      .map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `sparkle ${1 + Math.random() * 2}s linear infinite`,
      }));
    setSparkles(newSparkles);
  }, []);

  useEffect(() => {
    const newOfferSparkles = Array(5)
      .fill(null)
      .map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `sparkle ${1 + Math.random() * 2}s linear infinite`,
      }));
    setOfferSparkles(newOfferSparkles);
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
            {" "}
            {/*This line is kept as it's inside the new container and needed for inner elements*/}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black">料金プラン</h2>
              <p className="mt-4 text-lg text-gray-800">
                シンプルで分かりやすい料金体系です
              </p>
            </div>
            {/* Pricing Card with gradient border effect */}
            <div className="relative">
              {/* Gradient border effect */}
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
                        <div className="relative z-10 flex items-center">
                          <p className="text-2xl font-bold text-gray-900">
                            10,000円
                          </p>
                        </div>
                        {sparkles.map((sparkle, i) => (
                          <div
                            key={i}
                            className="absolute w-1 h-1 bg-yellow-500 rounded-full"
                            style={{
                              left: sparkle.left,
                              top: sparkle.top,
                              animation: sparkle.animation,
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
                        <div className="flex items-center">
                          <p className="text-2xl font-bold text-gray-900">
                            4,000円
                          </p>
                        </div>
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
                          <div className="flex items-center">
                            <p className="text-lg font-semibold text-gray-900">
                              500円
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <BsBox className="w-6 h-6 text-gray-400 mr-4" />
                        <div>
                          <p className="font-medium text-gray-900">
                            リアボックス
                          </p>
                          <div className="flex items-center">
                            <p className="text-lg font-semibold text-gray-900">
                              500円
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <BsPhone className="w-6 h-6 text-gray-400 mr-4" />
                        <div>
                          <p className="font-medium text-gray-900">
                            スマホホルダー
                          </p>
                          <div className="flex items-center">
                            <p className="text-lg font-semibold text-gray-900">
                              500円
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Special Offer */}
            <div className="mt-12 relative">
              <style>{sparkleKeyframes}</style>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                  ></path>
                </svg>
                <div className="space-y-2">
                  <p className="text-slate-800 font-medium">
                    ヘルメット持参の方限定オファー
                  </p>
                  <p className="text-slate-600">
                    オプションサービス1つが
                    <span className="font-bold text-orange-500">無料</span>に！
                  </p>
                </div>
              </div>
              {offerSparkles.map((sparkle, i) => (
                <div
                  key={i}
                  className="absolute top-0 left-0 w-1 h-1 bg-yellow-500 rounded-full"
                  style={{
                    left: sparkle.left,
                    top: sparkle.top,
                    animation: sparkle.animation,
                  }}
                ></div>
              ))}
            </div>
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
