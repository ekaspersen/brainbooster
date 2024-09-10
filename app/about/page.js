"use client";
import { motion } from "framer-motion";
import React from "react";

export default function page() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col h-screen gap-8 text-white justify-between container mx-auto px-4 pt-32 pb-16"
        >
            <div className="flex flex-col gap-8">
                <h1 className="text-5xl font-bold z-10">About us...</h1>
                <p className="z-10 text-lg">Stay tuned for more information!</p>
            </div>

            <p className="text-2xl sm:text-3xl md:text-4xl z-10 font-bold italic text-dark">
                <span className="text-white">BrainBooster</span> is available{" "}
                <br /> in your <span className="text-white">appstore</span>{" "}
                soon!
            </p>
        </motion.div>
    );
}
