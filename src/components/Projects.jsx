import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Explainer',
    description: 'A simplified explainer video that breaks down how artificial intelligence functions with clear visuals and smooth transitions and  engaging storytelling.',
    link: 'https://www.dropbox.com/scl/fi/nyivxnvxv5ct7uouhcb51/Educational.mov?rlkey=ui9u28qqipx08jkj349glq6ey&st=7bmnyo6o&dl=0',
  },
  {
    title: 'Growing Together',
    description: 'A collaborative video that highlights how the marketing team works and grows together — showcasing creativity, teamwork',
    link: 'https://www.dropbox.com/scl/fi/4ncz440jqchdijk9kf4gf/Build-a-Brand-That-Connects.mov?rlkey=x47h8l28uj9pb7t3xfxktckng&st=9zbr61ee&dl=0',
  },
  {
    title: 'The Art of Beauty',
    description: "A visual journey through the salon's atmosphere, services, and style — highlighting the care, creativity, and confidence behind every transformation.",
    link: 'https://www.dropbox.com/scl/fi/oz4ic63p3ngyk5st99zym/Letsrl.mov?rlkey=to19ickj4gquw5f85jocylcxl&st=jjmmz2ft&dl=0',
  },
  {
    title: 'Content That Converts',
    description: 'A  video that highlights how thoughtful strategy transforms content — showcasing creativity, planning',
    link: 'https://www.dropbox.com/scl/fi/h8xeqq1aic5c21jeiq0hp/Don-t-Just-Post.-Grow.mov?rlkey=7hibeal2hz8kckk5hbatm0j5p&st=zb867gb7&dl=0',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white  font-sans">
      <div className='flex justify-end pr-8 md:pr-20 pt-6 mx-25'>
        <Navbar />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-10 text-purple-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          My Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-40 backdrop-blur-md rounded-xl p-6 border border-purple-700 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-purple-400 hover:text-white font-medium transition-colors duration-300"
              >
                Watch Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;