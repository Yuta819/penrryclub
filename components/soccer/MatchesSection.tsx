"use client";

import { motion } from "framer-motion";

const matches = [
  {
    date: "2024.08.15",
    event: "SUMMER TOURNAMENT",
    location: "Main Stadium",
    description:
      "Annual inter-university championship featuring top teams from across the region.",
  },
  {
    date: "2024.09.22",
    event: "FRIENDLY SERIES",
    location: "University Grounds",
    description:
      "Strategic preparation matches against visiting teams to enhance our tactical approach.",
  },
  {
    date: "2024.10.30",
    event: "CITY LEAGUE",
    location: "Metropolitan Arena",
    description:
      "Prestigious city-wide competition where we defend our title as reigning champions.",
  },
];

export function MatchesSection() {
  return (
    <section id="matches" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            UPCOMING MATCHES
          </h2>
          <div className="w-24 h-1 bg-black" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {matches.map((match, index) => (
            <motion.div
              key={match.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group border-t border-black/10 py-12 first:border-t-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="text-sm tracking-wider text-black/60">
                    DATE
                  </div>
                  <div className="text-xl font-bold mt-1">{match.date}</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-sm tracking-wider text-black/60">
                    EVENT
                  </div>
                  <div className="text-xl font-bold mt-1">{match.event}</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-sm tracking-wider text-black/60">
                    LOCATION
                  </div>
                  <div className="text-xl font-bold mt-1">{match.location}</div>
                </div>
                <div className="md:col-span-4">
                  <p className="text-black/70 leading-relaxed">
                    {match.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
