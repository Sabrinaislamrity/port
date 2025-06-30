import React, { useState } from 'react';
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact,
  FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiTailwindcss, SiFirebase, SiMongodb,
  SiExpress, SiVite, SiNetlify, SiVercel, SiFigma, SiCanva, SiDaisyui
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';

const allSkills = [
  { name: "C", icon: <SiC size={40} />, category: "" },
  { name: "C++", icon: <SiCplusplus size={40} />, category: "" },
  { name: "HTML", icon: <FaHtml5 size={40} color="#E34F26" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" />, category: "frontend" },
  { name: "Bootstrap", icon: <FaBootstrap size={40} color="#7952B3" />, category: "frontend" },
  { name: "DaisyUI", icon: <SiDaisyui size={40} color="#FF69B4" />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" />, category: "frontend" },
  { name: "Vite", icon: <SiVite size={40} color="#646CFF" />, category: "frontend" },
  { name: "React", icon: <FaReact size={40} color="#61DBFB" />, category: "frontend" },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, category: "backend" },
  { name: "Express.js", icon: <SiExpress size={40} />, category: "backend" },
  { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" />, category: "backend" },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" />, category: "tools" },
  { name: "GitHub", icon: <FaGithub size={40} />, category: "tools" },
  { name: "Netlify", icon: <SiNetlify size={40} color="#00C7B7" />, category: "tools" },
  { name: "Vercel", icon: <SiVercel size={40} />, category: "tools" },
  { name: "Figma", icon: <SiFigma size={40} color="#F24E1E" />, category: "tools" },
  { name: "Canva", icon: <SiCanva size={40} color="#00C4CC" />, category: "tools" },
];

const skillRows = [
  allSkills.slice(0, 6),
  allSkills.slice(6, 11),
  allSkills.slice(11, 15),
  allSkills.slice(15)
];

const buttonVariants = {
  initial: { opacity: 0.6, scale: 1 },
  hover: { opacity: 1, scale: 1.1 },
  active: { opacity: 1, scale: 0.95 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skill = () => {
  const [filter, setFilter] = useState('all');
  const filteredSkills = filter === 'all'
    ? allSkills
    : allSkills.filter(skill => skill.category === filter);

  const categories = ['all', 'frontend', 'backend', 'tools'];

  return (
    <section id='skill' className='py-16 text-white'>
      <div className='max-w-6xl mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-8 w-fit mx-auto pb-3'>My Skills</h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-10 ">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              initial="initial"
              whileHover="hover"
              whileTap="active"
              variants={buttonVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                filter === category
                  ? 'bg-[#00c58e] text-black'
                  : 'bg-[#2d3340] hover:bg-[#00c58e] hover:text-black'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:hidden">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-full h-28 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg bg-[#2d3340] hover:scale-105 duration-300"
              >
                <div className='mb-2'>{skill.icon}</div>
                <span className='text-sm font-medium'>{skill.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="hidden lg:block">
          {filter === 'all' ? (
            skillRows.map((row, rowIndex) => (
              <div key={rowIndex} className="flex justify-center gap-6 mb-8">
                <AnimatePresence>
                  {row.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-28 h-28 md:w-32 md:h-32 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg bg-[#2d3340] hover:scale-105 duration-300"
                    >
                      <div className='mb-2'>{skill.icon}</div>
                      <span className='text-sm font-medium'>{skill.name}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <div className="flex flex-wrap justify-center gap-6">
              <AnimatePresence>
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="w-28 h-28 md:w-32 md:h-32 rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-lg bg-[#2d3340] hover:scale-105 duration-300"
                  >
                    <div className='mb-2'>{skill.icon}</div>
                    <span className='text-sm font-medium'>{skill.name}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Skill;
