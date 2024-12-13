"use client";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/irodori_kanazawa/",
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
  },
  {
    name: "X (Twitter)",
    icon: FaTwitter,
    url: "https://twitter.com/irodori_kanazawa",
    color: "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/channel/UCxxxxxxxxxxx",
    color: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
  },
];

export default function SNS() {
  return (
    <section id="sns" className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">SNS</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center w-40 h-40 rounded-full ${link.color} text-white hover:opacity-90 transition-opacity duration-300 shadow-lg transform hover:scale-105 transition-transform`}
            >
              <link.icon className="text-4xl mb-2" />
              <span className="font-medium">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
