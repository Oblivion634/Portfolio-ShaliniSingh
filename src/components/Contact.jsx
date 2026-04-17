import { motion } from 'framer-motion';
import { useInView } from './hooks/useInView';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";


export function Contact() {
    const { ref, isInView } = useInView();
    const EmptyIcon = () => null;

    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'shalinisingh06032004@gmail.com',
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=shalinisingh06032004@gmail.com",
            color: '#4a6fa5',
        },
        {
            icon: FaGithub,
            label: 'GitHub',
            value: '@Oblivion634',
            href: 'https://github.com/Oblivion634',
            color: '#5a8a7a',
        },
        {
            icon: FaLinkedin,
            label: 'LinkedIn',
            value: 'Shalini Singh',
            href: 'https://www.linkedin.com/in/shalini-singh-887832251/',
            color: '#6b9ac4',
        },
    ];

    return (
        <section
            id="contact"
            ref={ref}
            className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-[#1a1f3a] via-[#0a0a0f] to-[#1a1f3a]"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1561493163-2fe595fb0fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMG5pZ2h0JTIwc3RhcnMlMjBtaWxreSUyMHdheXxlbnwxfHx8fDE3NzYzNDIxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mountain night sky"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#e0e5ee] mb-4">
                            Let's Connect
                        </h2>
                        <p className="text-[#c0c5ce] text-lg max-w-2xl mx-auto">
                            Whether you have a project in mind, want to collaborate, or just want to say hello —
                            I'd love to hear from you.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#4a6fa5] to-[#5a8a7a] mx-auto rounded-full mt-6" />
                    </motion.div>

                    {/* Main Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-[#1c1c24] bg-opacity-80 backdrop-blur-lg rounded-2xl p-4 md:p-8 lg:p-12 border border-[#2a2f4a] shadow-2xl"
                    >
                        {/* Contact Methods */}
                        <div className="grid md:grid-cols-3 gap-6 mb-12 ">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.label}
                                    href={method.href}
                                    target={method.label !== 'Email' ? '_blank' : undefined}
                                    rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    className="group relative bg-[#2a2f4a] rounded-xl p-6 hover:bg-opacity-50 transition-all duration-300 border border-transparent hover:border-opacity-100"
                                    style={{ borderColor: `${method.color}40` }}
                                >
                                    {/* Glow Effect */}
                                    <div
                                        className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                                        style={{ background: `linear-gradient(135deg, ${method.color}, transparent)` }}
                                    />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div
                                            className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: `${method.color}20`, border: `2px solid ${method.color}` }}
                                        >
                                            <method.icon size={24} style={{ color: method.color }} />
                                        </div>
                                        <h3 className="text-[#e0e5ee] font-semibold mb-1">{method.label}</h3>
                                        <p className="text-[#c0c5ce] text-sm">{method.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center mt-12 text-[#c0c5ce]"
                    >
                        <p className="text-sm">
                            Built with passion during countless midnight hours ✨
                        </p>
                        <p className="text-xs mt-2 opacity-60">
                            © {new Date().getFullYear()} Shalini Singh. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
