"use client";

import { motion } from "framer-motion";

const matches = [
  {
    date: "2024.09.15",
    event: "SEASON OPENER",
    opponent: "Tokyo University",
    location: "Home Ground",
  },
  {
    date: "2024.10.22",
    event: "RIVALRY MATCH",
    opponent: "Waseda University",
    location: "Waseda Stadium",
  },
  {
    date: "2024.11.30",
    event: "CHAMPIONSHIP",
    opponent: "TBD",
    location: "National Stadium",
  },
];

export function MatchesSection() {
  return (
    <section
      id="matches"
      className="bg-black py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            UPCOMING BATTLES
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Mark your calendars for these epic clashes on the rugby field.
          </p>
        </motion.div>

        <div className="space-y-8">
          {matches.map((match, index) => (
            <motion.div
              key={match.event}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                  <div className="text-orange-500 font-bold">{match.date}</div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {match.event}
                  </h3>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                  <div className="text-gray-400">OPPONENT</div>
                  <div className="text-white font-bold mt-1">
                    {match.opponent}
                  </div>
                </div>
                <div className="w-full sm:w-auto">
                  <div className="text-gray-400">LOCATION</div>
                  <div className="text-white font-bold mt-1">
                    {match.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-block bg-orange-500 text-black px-8 py-4 text-lg font-bold tracking-wider hover:bg-orange-400 transition-colors duration-300"
          >
            VIEW FULL SCHEDULE
          </a>
        </motion.div>
      </div>
    </section>
  );
}
