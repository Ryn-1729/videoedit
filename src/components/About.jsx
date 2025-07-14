
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
     <div className="flex justify-end pr-8 md:pr-20 pt-6 mx-25"> <Navbar />
</div>
      <motion.div
        className="max-w-4xl mx-auto px-6 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 border-b border-purple-500 pb-4"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed text-gray-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hey, I’m <span className="text-purple-400 font-semibold">Aryan Sharma</span>, a passionate and creative video editor dedicated to crafting modern, engaging, and impactful visual content.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Currently pursuing my degree, I specialize in turning raw footage into polished stories through clean cuts and seamless transitions  . From cinematic travel edits to fast-paced montages and <span className="text-purple-300"> social media</span> content, I focus on delivering visually striking and emotionally resonant videos.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-300 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          I'm always exploring new technologies and pushing my skills forward. I love working with tools like  DaVinci Resolve , Adobe Premiere Pro, and I'm constantly looking for ways to innovate and grow.
Oh, and when I’m not editing? I’m chasing my dream of becoming a  <span className="text-purple-400">musical genius </span>too! 🎵
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/projects"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition duration-300 ease-in-out"
          >
            See My Projects →
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
