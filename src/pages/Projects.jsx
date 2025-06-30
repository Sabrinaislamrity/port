import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiVite, SiReact, SiTailwindcss, SiFirebase, SiExpress, SiMongodb, SiJsonwebtokens
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

import sampleImage from "../assets/plantcare.PNG";
import sampleImagee from "../assets/pic2.PNG";
import sampleImageee from "../assets/pic3.PNG";

const projectsData = [
  {
    id: 1,
    name: "Plant Care Website",
    image: sampleImage,
    description:
      "Plant Care is a full-stack web app designed to help users easily manage their indoor and outdoor plants.",
    details: [
      "Add, update, and delete your plant collection",
      "See recently added plants",
      "User authentication with Firebase",
      "Responsive UI for all devices",
    ],
    techIcons: [
      <SiVite size={24} className="text-[#646CFF]" />,
      <SiReact size={24} className="text-[#61DBFB]" />,
      <SiTailwindcss size={24} className="text-[#38BDF8]" />,
      <SiFirebase size={24} className="text-[#FFCA28]" />,
    ],
    live: "https://plant-847da.web.app/",
    client: "https://github.com/Sabrinaislamrity/plant-clint-side",
    server: "https://github.com/Sabrinaislamrity/plant-server-side",
  },
  {
    id: 2,
    name: "Hekto",
    image: sampleImagee,
    description:
      "Responsive e-commerce website React and Tailwind CSS.",
    details: [
      "Product card design with hover effects",
      "Clean navigation layout",
      "Built using Vite + React",
    ],
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-rose-400" /> },
      { name: 'Framer Motion', icon: <TbBrandFramerMotion className="text-violet-500" /> },
    ],
    live: "https://hekto-dusky.vercel.app/",
    client: "https://github.com/Sabrinaislamrity/Hekto",
    server: "https://github.com/Sabrinaislamrity/Hekto",
  },
  {
    id: 3,
    name: "E-commerce Site",
    image: sampleImageee,
    description:
      "A modern and responsive e-commerce web application built using React, Tailwind CSS, and Firebase.",
    details: [
      "Cart functionality with Firebase state",
      "Product filtering",
      "Clean, animated product grid",
    ],
    techIcons: [
      <SiVite size={24} className="text-[#646CFF]" />,
      <SiReact size={24} className="text-[#61DBFB]" />,
      <SiTailwindcss size={24} className="text-[#38BDF8]" />,
      <SiFirebase size={24} className="text-[#FFCA28]" />,
    ],
    live: "https://deft-vacherin-39f30d.netlify.app/",
    client: "https://github.com/Sabrinaislamrity/e-commerce",
    server: "https://github.com/Sabrinaislamrity/e-commerce",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 50 },
  }),
  hover: { scale: 1.03, boxShadow: "0 8px 20px rgba(235, 182, 107, 0.6)" },
};

const modalBackdrop = {
  visible: { opacity: 2 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="text-white px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-14 border-b-4 w-fit mx-auto border-[#ebb66b] pb-2">
        My Projects
      </h2>

      <div className="space-y-20">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className={`flex flex-col lg:flex-row ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            } bg-white/5 backdrop-blur-md border border-[#ebb66b] rounded-2xl p-6 lg:p-10 shadow-2xl transition-all cursor-pointer`}
            onClick={() => openModal(project)}
          >
            <div className="lg:w-1/2 overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-2xl w-full h-64 object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
              <h3 className="text-3xl font-semibold text-[#ebb66b] mb-3">
                {project.name}
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed tracking-wide">
                {project.description}
              </p>
              <div className="flex gap-4 mb-5 flex-wrap">
                {(project.techIcons || project.techStack)?.map((icon, i) => (
                  <span key={i}>{icon.icon || icon}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="bg-[#ebb66b] text-[#1b1f2a] px-3 py-2 rounded-full font-semibold hover:bg-[#ffd79e] transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="border border-[#ebb66b] px-3 py-2 rounded-full hover:bg-[#ebb66b] hover:text-[#1b1f2a] transition-all"
                >
                  Client Code
                </a>
                {project.server && (
                  <a
                    href={project.server}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="border border-[#ebb66b] px-3 py-2 rounded-full hover:bg-[#ebb66b] hover:text-[#1b1f2a] transition-all"
                  >
                    Server Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
          >
            <motion.div
              className="bg-[#1f2937] text-white max-w-2xl rounded-lg p-6 relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-2xl font-bold hover:text-[#ebb66b]"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-3">{selectedProject.name}</h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full max-h-80 object-cover rounded-md mb-4"
              />
              <p className="mb-4">{selectedProject.description}</p>
              <p className="font-bold mb-2">Key Features:</p>
              <ul className="list-disc ml-6 space-y-2 mb-4">
                {selectedProject.details?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="font-bold mb-2">Technologies:</p>
              <div className="flex gap-2 flex-wrap">
                {(selectedProject.techIcons || selectedProject.techStack)?.map((icon, i) => (
                  <span key={i}>{icon.icon || icon}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
