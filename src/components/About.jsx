import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';
import { Coffee, Headphones, Code } from 'lucide-react';
import myProfile from "../assets/profile.png"

export function About() {
    const { ref, isInView } = useInView();

    const traits = [
        {
            icon: Headphones,
            title: 'Music Driven',
            description: 'Code flows better with the right soundtrack',
        },
        {
            icon: Coffee,
            title: 'Consistent',
            description: 'Small, focused steps lead to meaningful progress',
        },
        {
            icon: Code,
            title: 'Detail Oriented',
            description: 'Crafting clean, maintainable solutions',
        },
    ];

    return (
        <section
            id="about"
            ref={ref}
            className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-[#0a0a0f] via-[#1a1f3a] to-[#0a0a0f]"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #c0c5ce 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }} />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e5ee] mb-4">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#4a6fa5] to-[#5a8a7a] mx-auto rounded-full" />
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-15 items-center justify-center mb-16">
                        {/* Left - Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden">
                                <div className="absolute m-auto" />
                                <img
                                    src={myProfile}
                                    alt="Profile Photo"
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#4a6fa5] opacity-20 blur-2xl rounded-full" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#5a8a7a] opacity-20 blur-2xl rounded-full" />
                        </motion.div>

                        {/* Right - Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <p className="text-[#c0c5ce] text-lg leading-relaxed">
                                I'm a <span className="text-[#6b9ac4] font-semibold">MERN stack developer</span> who
                                finds clarity in the quiet hours of the night. While the world sleeps, I build,
                                experiment, and refine.
                            </p>
                            <p className="text-[#c0c5ce] text-lg leading-relaxed">
                                My approach is <span className="text-[#6b9ac4] font-semibold">introverted and intentional</span> —
                                I believe in deep focus, thoughtful architecture, and code that tells a story.
                                Every project is a journey that creates the essence of new learning experiences.
                            </p>
                            <p className="text-[#c0c5ce] text-lg leading-relaxed">
                                Music fuels my creativity, nature grounds my perspective, and the midnight
                                stillness provides the perfect canvas for meaningful work.
                            </p>
                        </motion.div>
                    </div>

                    {/* Traits Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {traits.map((trait, index) => (
                            <motion.div
                                key={trait.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                                className="bg-[#1c1c24] rounded-xl p-6 border border-[#2a2f4a] hover:border-[#4a6fa5] transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4a6fa5] to-[#5a8a7a] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <trait.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-[#e0e5ee] font-semibold mb-2">{trait.title}</h3>
                                <p className="text-[#c0c5ce] text-sm leading-relaxed">{trait.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
