// File: components/hangglider/ContactSection.tsx
"use client";

import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // ここで実際のフォーム送信処理を実装します
  };

  return (
    <section className="min-h-screen flex items-center justify-center snap-start py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white text-shadow-lg"
        >
          お問い合わせ
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-white text-shadow-md"
            >
              お名前
            </label>
            <input
              {...register("name", { required: "お名前は必須です" })}
              type="text"
              id="name"
              className="w-full px-3 py-2 text-gray-700 bg-white bg-opacity-80 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <span className="text-red-500 text-xs text-shadow-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-white text-shadow-md"
            >
              メールアドレス
            </label>
            <input
              {...register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "有効なメールアドレスを入力してください",
                },
              })}
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-700 bg-white bg-opacity-80 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <span className="text-red-500 text-xs text-shadow-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-white text-shadow-md"
            >
              メッセージ
            </label>
            <textarea
              {...register("message", { required: "メッセージは必須です" })}
              id="message"
              rows={4}
              className="w-full px-3 py-2 text-gray-700 bg-white bg-opacity-80 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs text-shadow-sm">
                {errors.message.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline text-shadow-sm"
            >
              送信
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
