import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const { ref, isInView } = useInView();

  const projects = [
    {
      title: 'Hamari Awaaz',
      description: 'A responsive MERN-based civic issue reporting platform with secure JWT authentication, role-based dashboards, and an interactive UI using React, Tailwind CSS, and Framer Motion.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
      github: 'https://github.com/Oblivion634/Hamari-Awaaz',
      demo: 'https://hamari-awaaz.vercel.com/',
      gradient: 'from-[#4a6fa5] to-[#2a3f6a]',
    },
    {
      title: 'ShantiSpace',
      description: 'A full-stack mental wellness platform with secure authentication, Gemini AI-powered personalized support, and scalable REST APIs using Node.js and Express.js.',
      tech: ['React', 'Node', 'Express', 'Gemini API', 'MongoDB'],
      github: 'https://github.com/Oblivion634/Shanti-Space',
      demo: 'https://shantispace.netlify.app/',
      gradient: 'from-[#5a8a7a] to-[#3a5a4a]',
    },
    {
      title: 'IntervU',
      description: 'An AI-driven interview preparation platform with real-time feedback, efficient state management using React, and seamless data handling through CRUD operations and REST APIs.',
      tech: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
      github: 'https://github.com/Oblivion634/IntervU',
      demo: 'https://interv-u-delta.vercel.app/',
      gradient: 'from-[#4a6e6e] to-[#2a4e4e]',
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#0a0a0f] to-[#1a1f3a]"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#4a6fa5] opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#5a8a7a] opacity-10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e5ee] mb-4">
              Featured Projects
            </h2>
            <p className="text-[#c0c5ce] text-lg max-w-2xl mx-auto">
              Milestones in my journey as a developer. Each project represents nights of learning,
              building, and refining.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#4a6fa5] to-[#5a8a7a] mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-[#1c1c24] rounded-2xl p-8 border border-[#2a2f4a] hover:border-[#4a6fa5] transition-all duration-500 overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#4a6fa5] to-[#5a8a7a] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-[#e0e5ee] mb-3 group-hover:text-[#6b9ac4] transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#c0c5ce] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-[#2a2f4a] text-[#6b9ac4] rounded-full border border-[#4a6fa5] border-opacity-30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#2a2f4a] text-[#e0e5ee] rounded-lg hover:bg-[#4a6fa5] transition-all duration-300 hover:scale-105"
                      >

                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4a6fa5] to-[#5a8a7a] text-white rounded-lg hover:shadow-lg hover:shadow-[#4a6fa5]/30 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4a6fa5] to-transparent opacity-20 rounded-bl-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
