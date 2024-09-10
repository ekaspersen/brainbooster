"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
    // Variants for Y movement + opacity animation
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="h-screen bg-hero-pattern px-6 bg-cover pt-11 bg-center flex flex-col justify-center items-center gap-16 overflow-hidden relative">
            <motion.h1
                className="text-5xl font-bold sr-only z-10"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                BrainBooster
            </motion.h1>

            <motion.p
                className="text-2xl sm:text-3xl md:text-4xl z-10 text-center font-bold italic text-dark"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <span className="text-white">BrainBooster</span> is available{" "}
                <br /> in your <span className="text-white">appstore</span>{" "}
                soon!
            </motion.p>

            <motion.div
                className="z-10"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <Image
                    className="max-w-[80vw] z-10"
                    src="/BrainBooster-cutout.png"
                    alt="BrainBooster Logo"
                    width={350}
                    height={303}
                />
            </motion.div>

            <motion.p
                className="z-10 text-center"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                Stay tuned for the launch date and more information!
            </motion.p>

            <div className="inset-0 absolute opacity-[97%] bg-gradient-to-br from-primary to-primary_dark"></div>
        </div>
    );
}
