// File: components/hangglider/MembersSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";

const members = [
  { name: "山田太郎", role: "部長", image: "/images/a/1.png" },
  { name: "鈴木花子", role: "副部長", image: "/images/a/2.png" },
  { name: "佐藤健", role: "会計", image: "/images/a/3.png" },
  { name: "田中美咲", role: "広報", image: "/images/a/4.png" },
];

export default function MembersSection() {
  return (
    <section className="min-h-screen flex items-center justify-center snap-start py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white text-shadow-lg"
        >
          メンバー紹介
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="mb-4 overflow-hidden rounded-full mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 text-white text-shadow-md">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-white text-shadow-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
