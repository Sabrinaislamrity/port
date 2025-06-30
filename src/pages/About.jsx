import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const codeSnippet = `// Professional Profile
const developer = {
  name: 'Sabrina islam ',
  title: 'Junior MERN Stack Developer',
  expertise: ['React', 'Node.js', 'Express', 'MongoDB'],
  experience: 'I am fresher',
  availability: 'Open for opportunities',
  contact: 'sabrinaislamrity@gmail.com'
};`.trim();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-black">
      {/* Glass morphism background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-3xl z-0"
      ></motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full max-w-4xl sm:max-w-5xl md:max-w-6xl bg-gray-900/70 rounded-3xl shadow-2xl border border-gray-700/60 p-6 sm:p-10"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#ebb66b] mb-6 sm:mb-8 text-center">
          About Me
        </h2>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-5 sm:space-y-6 px-2 sm:px-0"
        >
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I’m a passionate full-stack web developer with experience in building responsive web
            applications using modern technologies like React, Firebase, MongoDB, and Tailwind CSS.
            I love transforming ideas into beautiful, functional websites and enjoy solving real-world
            problems through clean and maintainable code.
          </p>
          <p className="text-gray-400 italic text-xs sm:text-sm">
            “Design is not just what it looks like and feels like. Design is how it works.” – Steve
            Jobs
          </p>

          {/* Code Block */}
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700/50 shadow-lg mt-6">
            {/* Title Bar */}
            <div className="flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-gray-700/60 border-b border-gray-600/50">
              <div className="flex space-x-2 mr-4">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-mono select-none">profile.js</div>
            </div>

            {/* Code */}
            <pre className="language-javascript max-h-60 sm:max-h-72 overflow-auto p-4 sm:p-6 text-xs sm:text-sm md:text-base">
              <code
                className="language-javascript"
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(codeSnippet, Prism.languages.javascript, "javascript"),
                }}
              />
            </pre>

            {/* Footer */}
            <div className="flex justify-end px-4 py-2 sm:px-6 sm:py-3 bg-gray-700/60 border-t border-gray-600/50">
              <button
                className="text-[#ebb66b] font-semibold hover:text-yellow-400 transition-colors text-xs sm:text-sm"
                onClick={() => navigator.clipboard.writeText(codeSnippet)}
              >
                Copy Profile
              </button>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl sm:max-w-4xl mx-auto"
        >
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Firebase",
            "MongoDB",
            "Tailwind",
            "Git",
            "Node.js",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 p-3 sm:p-4 rounded-lg text-center shadow-md shadow-[#ebb66b] hover:scale-105 transition-transform"
            >
              <p className="text-sm sm:text-base font-medium">{skill}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
