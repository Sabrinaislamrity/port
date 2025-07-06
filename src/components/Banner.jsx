import React from "react";
import BannerImg from "../assets/mypic.jpg"; // your image path
import { LuDownload } from "react-icons/lu";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 text-white">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between ">
        {/* Left content */}
        <div className="md:flex-1 flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <h1
            className="text-3xl md:text-5xl font-extrabold tracking-wide"
            style={{
              animation: "fadeSlideUp 1s ease forwards",
              opacity: 0,
              animationDelay: "0.2s",
            }}
          >
            Hello,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600">
              I'm
            </span>
          </h1>
          <h2
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 bg-clip-text text-transparent"
            style={{
              animation: "fadeSlideUp 1s ease forwards",
              opacity: 0,
              animationDelay: "0.4s",
            }}
          >
            Sabrina Islam
          </h2>
          <h3
            className="text-2xl md:text-4xl font-semibold text-yellow-400 drop-shadow-md"
            style={{
              animation: "fadeSlideUp 1s ease forwards",
              opacity: 0,
              animationDelay: "0.6s",
            }}
          >
            Full Stack Developer
          </h3>
          <p
            className="max-w-lg text-gray-300 leading-relaxed drop-shadow"
            style={{
              animation: "fadeSlideUp 1s ease forwards",
              opacity: 0,
              animationDelay: "0.8s",
            }}
          >
            Passionate about creating beautiful and functionales websites that help businesses grow.
            I love combining clean code with stunning designs.
          </p>

          {/* Social Icons */}
          <div
            className="flex gap-6 text-yellow-400"
            style={{
              animation: "fadeSlideUp 1s ease forwards",
              opacity: 0,
              animationDelay: "1s",
            }}
          >
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/Sabrinaislamrity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              <FaFacebook size={32} />
            </a>
          </div>

          {/* Download Resume Button */}
          <a
            href="/public/Sabrina's resume.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 text-gray-900 font-semibold shadow-lg
                       hover:scale-105 hover:shadow-2xl transition-transform duration-300 select-none"
            style={{
              animation: "fadeSlideUp 1s ease forwards",
              opacity: 0,
              animationDelay: "1.2s",
            }}
          >
            <LuDownload size={22} />
            Download Resume
          </a>
        </div>

        {/* Right image */}
        <div
          className="md:flex-1 flex justify-center items-center mt-16 md:mt-0"
          style={{
            animation: "fadeSlideUp 1s ease forwards",
            opacity: 0,
            animationDelay: "1.4s",
          }}
        >
          <img
            src={BannerImg}
            alt="Sabrina Islam"
            className="h-72 md:h-96 xl:h-[28rem] rounded-full border-4 border-yellow-400 shadow-lg shadow-yellow-500/50
                       transform transition-transform duration-500 hover:scale-105"
          />
        </div>

      {/* Keyframes animation */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default Banner;
