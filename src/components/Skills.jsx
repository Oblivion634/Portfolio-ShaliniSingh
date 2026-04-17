import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';
import {
    Code2,
    Database,
    Server,
    Wrench,
    Layers,
    GitBranch,
    Box,
    Workflow
} from 'lucide-react';

export function Skills() {
    const { ref, isInView } = useInView();

    const skillCategories = [
        {
            title: 'Frontend',
            icon: Code2,
            color: '#4a6fa5',
            skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript', 'Redux'],
        },
        {
            title: 'Backend',
            icon: Server,
            color: '#5a8a7a',
            skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'],
        },
        {
            title: 'Database',
            icon: Database,
            color: '#6b9ac4',
            skills: ['MongoDB', 'Mongoose',],
        },
        {
            title: 'Tools',
            icon: Wrench,
            color: '#4a6e6e',
            skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm'],
        },
    ];

    const additionalSkills = [
        { icon: GitBranch, label: 'Version Control', color: '#5a8a7a' },
        { icon: Box, label: 'Component Design', color: '#6b9ac4' },
    ];

    return (
        <section
            id="skills"
            ref={ref}
            className="relative min-h-screen py-20 bg-gradient-to-b from-[#1a1f3a] via-[#0a0a0f] to-[#1a1f3a]"
        >
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
                            Skills & Expertise
                        </h2>
                        <p className="text-[#c0c5ce] text-lg max-w-2xl mx-auto">
                            A refined toolkit built through countless midnight sessions and real-world projects.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#4a6fa5] to-[#5a8a7a] mx-auto rounded-full mt-6" />
                    </motion.div>

                    {/* Main Skills Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="bg-[#1c1c24] rounded-2xl p-8 border border-[#2a2f4a] hover:border-opacity-100 transition-all duration-500 h-full">
                                    {/* Gradient Glow on Hover */}
                                    <div
                                        className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
                                        style={{ background: `linear-gradient(135deg, ${category.color}, transparent)` }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                                style={{ backgroundColor: `${category.color}20`, border: `2px solid ${category.color}40` }}
                                            >
                                                <category.icon size={28} style={{ color: category.color }} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#e0e5ee]">
                                                {category.title}
                                            </h3>
                                        </div>

                                        {/* Skills List */}
                                        <div className="flex flex-wrap gap-3">
                                            {category.skills.map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skill}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                                                    className="px-4 py-2 bg-[#2a2f4a] text-[#c0c5ce] rounded-lg text-sm font-medium hover:bg-opacity-80 transition-all duration-300 hover:scale-105 cursor-default"
                                                    style={{
                                                        borderLeft: `3px solid ${category.color}`,
                                                    }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-2 gap-6"
                    >
                        {additionalSkills.map((skill, index) => (
                            <motion.div
                                key={skill.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                className="bg-[#1c1c24] rounded-xl p-6 border border-[#2a2f4a] hover:border-opacity-100 transition-all duration-300 group text-center"
                            >
                                <div
                                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: `${skill.color}20` }}
                                >
                                    <skill.icon size={28} style={{ color: skill.color }} />
                                </div>
                                <p className="text-[#c0c5ce] text-sm font-medium leading-tight">
                                    {skill.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom Accent */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-16 text-center"
                    >
                        <p className="text-[#c0c5ce] italic">
                            "Learning is a journey, not a destination. Always exploring, always growing."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
