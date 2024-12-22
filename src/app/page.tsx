'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    audioRef.current = new Audio('/sounds/beam.mp3');
  }, []);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play();
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="rounded-full overflow-hidden w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] relative group" onMouseEnter={playSound}>
          <Image
            src="/img/phantom.jpg"
            alt="Phantom"
            width={400}
            height={400}
            className="object-cover w-full h-full"
          />
          <AnimatePresence>
            <motion.div
              key="overlay"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0, y: 20 }}
              whileHover={{ 
                opacity: 1, 
                y: 0,
                scale: 1.2
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black/50"
            >
              <Link
                className="text-white text-2xl font-bold hover:scale-110 transition-transform"
                href="/about"
              >
                About Buck
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
