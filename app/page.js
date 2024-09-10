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
        <div className="h-screen py-16 px-4 bg-cover bg-center flex flex-col-reverse sm:flex-col justify-around gap-16 overflow-hidden container mx-auto relative">
            <div className="flex gap-4 items-center">
                <Image
                    className="w-[20vw] max-w-28  z-10"
                    src="/BrainBooster-icon.png"
                    alt="BrainBooster Logo"
                    width={350}
                    height={303}
                />
                <h1 className=" text-3xl sm:text-5xl font-bold z-10">
                    BrainBooster <br />{" "}
                    <span className="text-primary_dark">Coming soon</span>
                </h1>
            </div>
            <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl z-10 font-bold italic text-dark"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <span className="text-white">BrainBooster</span> is available in{" "}
                <br />
                <span className="text-white">appstore</span> and{" "}
                <span className="text-white">Google play</span> soon!
            </motion.h2>
        </div>
    );
}
