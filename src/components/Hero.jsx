import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import myImage from "../assets/image.png";
import bg from "../assets/background.png"

export function Hero() {
  // Generate floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 15,
  }));

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1VkJ5qpPjdZgDgrpiD1gTL535paJW7dd_/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center lg:text-left overflow-hidden " style={{ backgroundImage: `url(${bg})` }}>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              bottom: '-10px',
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Character */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect behind character */}
              <div className="absolute inset-0 " />

              {/* Character Image */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src={myImage}
                  alt="Developer character in dark hoodie with headphones"
                  className="w-full h-auto"
                />

                {/* Headphone Glow Effect */}
                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-[#4a6fa5] opacity-30 blur-2xl rounded-full animate-pulse" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <div className='order-1 lg:order-2 lg:h-2/3 lg:w-[90%] lg:mt-0 mt-40  '>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="space-y-5  shadow-2xl bg-[#8dafe27b] rounded-2xl -mt-10 md:mt-0 py-10 px-15"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[#0f395e] tracking-wider uppercase text-l font-semibold"
              >
                Hello, I'm
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-5xl lg:text-7xl font-bold text-[#e0e5ee] leading-tight"
              >
                Shalini Singh
              </motion.h1>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-2xl lg:text-3xl gradient-text font-bold"
              >
                MERN Stack Developer
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-[#1a1a1b] text-lg leading-relaxed max-w-xl"
              >
                Building quietly, learning constantly, creating meaningful digital experiences
                in the solitude of midnight hours.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="flex flex-wrap gap-4 pt-4 justify-center"
              >
                <button
                  onClick={downloadResume}
                  className="px-8 py-4 bg-[#436497] text-white rounded-lg font-medium hover:bg-[#5a7fb5] transition-all duration-300 glow-box hover:scale-105"
                >
                  View Resume
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-transparent border-2 border-[#436497] text-[#e0e5ee] rounded-lg font-medium hover:bg-[#4a6fa5] hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex gap-4 pt-4 justify-center"
              >
                <a
                  href="https://github.com/Oblivion634/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2a2f4a] text-[#c0c5ce] hover:bg-[#4a6fa5] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/shalini-singh-887832251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2a2f4a] text-[#c0c5ce] hover:bg-[#4a6fa5] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shalinisingh06032004@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2a2f4a] text-[#c0c5ce] hover:bg-[#4a6fa5] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
