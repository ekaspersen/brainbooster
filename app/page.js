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
        <div className="h-screen px-4 bg-cover container max-w-7xl mx-auto py-8   bg-center flex flex-col justify-center items-center gap-24 md:gap-0 overflow-hidden relative">
            <motion.h1
                className="text-5xl font-bold sr-only z-10"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                BrainBooster
            </motion.h1>

            <motion.div
                className="z-10 w-full flex flex-1 items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <Image
                    className="max-w-[27vw] md:max-w-[17%] lg:max-w-[12%] z-10"
                    src="/BrainBooster-cutout.png"
                    alt="BrainBooster Logo"
                    width={302}
                    height={262}
                />
            </motion.div>
            <motion.p
                className="text-xl sm:text-2xl md:text-3xl md:ml-auto md:mt-auto z-10 font-bold italic text-dark"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                BrainBooster is <span className="text-white">available</span>{" "}
                <br /> in Appstore and Google Play{" "}
                <span className="text-white">soon!</span>
            </motion.p>
        </div>
    );
}
