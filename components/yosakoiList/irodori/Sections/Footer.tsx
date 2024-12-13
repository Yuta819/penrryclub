import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div
            id="contact"
            className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-orange-400">
              お問い合わせ
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-lg">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-lg">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-lg">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 text-gray-800 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition duration-300 shadow-lg"
              >
                送信
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6 text-orange-400">
              ご支援のお願い
            </h3>
            <p className="mb-6 text-lg leading-relaxed">
              私たちの活動を支えるため、以下の項目へのご支援をお願いしております：
            </p>
            <ul className="list-disc list-inside mb-6 text-lg space-y-2">
              <li>衣装制作代</li>
              <li>弾幕製作費</li>
            </ul>
            <p className="text-lg leading-relaxed">
              ご支援いただける方は、お問い合わせフォームよりご連絡ください。
              心より感謝申し上げます。
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; 2024 彩-IRODORI-. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
