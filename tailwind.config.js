/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#4169E1",
                primary_dark: "#2b4491",
                dark: "#0D1821",
            },
            backgroundImage: {
                "hero-pattern": "url('/mindfull.jpg')",
                "footer-texture": "url('/path-to-another-image.png')",
            },
        },
    },
    plugins: [],
};
