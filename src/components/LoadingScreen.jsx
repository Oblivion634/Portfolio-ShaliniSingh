import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onLoadingComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onLoadingComplete, 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0a0a0f] via-[#1a1f3a] to-[#0a0a0f]"
        >
            {/* Stars */}
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 50 }).map((_, i) => (
                    <div
                        key={i}
                        className="star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                        }}
                    />
                ))}
            </div>

            {/* Loading Content */}
            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-6xl font-bold gradient-text mb-8">SS</h1>

                    {/* Progress Bar */}
                    <div className="w-64 h-1 bg-[#2a2f4a] rounded-full overflow-hidden mx-auto">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#4a6fa5] to-[#5a8a7a]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#c0c5ce] mt-4 text-sm"
                    >
                        Loading experience...
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
}
