"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Motion variants for menu
    const menuVariants = {
        hidden: { opacity: 0, y: -10, transition: { duration: 0.3 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };
    const fadeInUp = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    // Function to handle closing the menu when a link is clicked
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-primary container max-w-7xl mx-auto"
        >
            {/* Logo Section */}
            <div className="text-xl font-bold text-white">
                <Link className="flex items-center gap-2" href="/">
                    <Image
                        className="max-w-[80vw] h-8 w-8 z-10"
                        src="/BrainBooster-icon.png"
                        alt="BrainBooster Logo"
                        width={100}
                        height={100}
                    />
                    BrainBooster
                </Link>
            </div>

            {/* Burger Menu Icon */}
            <div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="focus:outline-none"
                >
                    {/* Hamburger Icon */}
                    <motion.div
                        animate={{
                            rotate: menuOpen ? 30 : 0,
                            y: menuOpen ? 1 : 0,
                            transition: { delay: menuOpen ? 0.1 : 0 },
                        }}
                        className="w-6 rounded-md h-[3px] mb-1 bg-white transition-all duration-300"
                    ></motion.div>
                    <motion.div
                        animate={{
                            opacity: menuOpen ? 0 : 1,
                            x: menuOpen ? 20 : 0,
                            transition: { delay: menuOpen ? 0.3 : 0.3 },
                        }}
                        className="w-6 rounded-md h-[3px] mb-1 bg-white transition-opacity duration-300"
                    ></motion.div>
                    <motion.div
                        animate={{
                            rotate: menuOpen ? -30 : 0,
                            y: menuOpen ? -2 : 0,
                            transition: { delay: menuOpen ? 0.1 : 0 },
                        }}
                        className="w-6 rounded-md h-[3px] bg-white transition-all duration-300"
                    ></motion.div>
                </button>
            </div>

            {/* Dropdown Menu */}
            <motion.nav
                initial="hidden"
                animate={menuOpen ? "visible" : "hidden"}
                exit="hidden"
                variants={menuVariants}
                className="absolute top-full w-56 text-lg font-bold right-0 bg-primary text-white z-50 shadow-lg"
            >
                <ul className="flex flex-col py-4">
                    <li>
                        <Link
                            href="/"
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-white hover:opacity-50 transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-white hover:opacity-50 transition-colors duration-300"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            onClick={handleLinkClick}
                            className="block px-4 py-2 text-white hover:opacity-50 transition-colors duration-300"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </motion.nav>
        </motion.header>
    );
};

export default Header;
