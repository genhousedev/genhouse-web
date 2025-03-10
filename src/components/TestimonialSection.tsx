"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/constants";


export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gold-light min-h-[400px] flex flex-col items-center justify-center pt-12 pb-14 px-4 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 hidden md:block">
        <Image
          src="/assets/images/splash-of-color.svg"
          alt="splash-of-color.svg"
          width={222}
          height={222}
          className="object-contain"
        />
      </div>

      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet the Team
      </motion.h1>

      <div className="w-full max-w-4xl md:h-48 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <motion.div
                className="p-6 md:py-8 md:px-4 flex items-center md:w-2/5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                <div className="flex flex-row items-center justify-center">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={teamMembers[currentIndex].image || "/placeholder.svg"}
                      alt={teamMembers[currentIndex].name}
                      width={88}
                      height={88}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-dark text-lg lg:text-2xl">{teamMembers[currentIndex].name}</h2>
                    <p className="text-gold text-lg lg:text-2xl mt-1">{teamMembers[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-blue-50 p-6 md:p-8 md:w-3/5 flex items-center max-h-[9.5rem]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <p className="text-dark italic text-lg">&quot{teamMembers[currentIndex].quote}&quot</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <motion.div
        className="flex space-x-2 mt-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-amber-500" : "bg-gray"
              }`}
            aria-label={`View ${teamMembers[index].name}'s profile`}
          />
        ))}
      </motion.div>
    </div>
  );
}
