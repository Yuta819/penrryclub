"use client";

import { motion } from "framer-motion";
import { GlowingCard, ShimmerButton } from "./DecorativeElements";
import Image from "next/image";

interface Event {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const events: Event[] = [
  {
    title: "Winter Training Camp",
    date: "2024.12.20 - 12.25",
    location: "Niseko Resort",
    image: "/images/placeholder.svg",
    description:
      "5-day intensive training camp for all skill levels. Perfect your technique and make new friends!",
  },
  {
    title: "Weekend Trip",
    date: "2024.01.15 - 01.16",
    location: "Hakuba Valley",
    image: "/images/placeholder.svg",
    description:
      "Experience the thrill of Hakuba's world-class slopes on this exciting weekend getaway.",
  },
  {
    title: "Beginner Workshop",
    date: "2024.02.10",
    location: "Zao Ski Resort",
    image: "/images/placeholder.svg",
    description:
      "One-day workshop designed to introduce newcomers to the joys of skiing. All equipment provided!",
  },
];

export function EventsSection() {
  return (
    <section
      id="events"
      className="py-24 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-pink-600">
            Upcoming Events
          </h2>
          <p className="text-lg md:text-xl text-sky-800/80 max-w-3xl mx-auto">
            Join us for these exciting winter adventures and create
            unforgettable memories on the slopes!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <GlowingCard className="h-full overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-sky-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-pink-600 mb-1">{event.date}</p>
                  <p className="text-sky-700 mb-4">{event.location}</p>
                  <p className="text-sky-800/80 text-sm mb-4">
                    {event.description}
                  </p>
                  <ShimmerButton>Register Now</ShimmerButton>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
