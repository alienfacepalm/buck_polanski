'use client';

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const zapAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const doorAudioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isAudioLoaded, setIsAudioLoaded] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(1);

  React.useEffect(() => {
    const rotateImage = () => {
      setCurrentImage(current => (current % 4) + 1);
      // Set next rotation interval between 3-6 seconds
      const nextInterval = Math.random() * (6000 - 3000) + 3000;
      setTimeout(rotateImage, nextInterval);
    };

    // Initial rotation after random delay
    const initialDelay = Math.random() * (6000 - 3000) + 3000;
    const timer = setTimeout(rotateImage, initialDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div 
          className="rounded-full overflow-hidden w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] relative group" 
          onMouseEnter={(e) => {
            e.currentTarget.click();
            if (zapAudioRef.current) {
              zapAudioRef.current.currentTime = 0;
              zapAudioRef.current.play().catch(() => {});
            }
          }}
          onClick={() => {
            if (!isAudioLoaded) {
              zapAudioRef.current = new Audio('/sounds/zap.mp3');
              doorAudioRef.current = new Audio('/sounds/door.mp3');
              setIsAudioLoaded(true);
            }
          }}
        >
          <Image
            src={`/img/phantom-${currentImage}.jpg`}
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
                onMouseDown={(e) => {
                  e.preventDefault();
                  if (doorAudioRef.current) {
                    doorAudioRef.current.currentTime = 0;
                    doorAudioRef.current.play().catch(() => {});
                    setTimeout(() => {
                      window.location.href = '/about';
                    }, 1000);
                  }
                }}
                onMouseUp={(e) => {
                  e.preventDefault();
                }}
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
