import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components-layout/Header";

export const metadata = {
    title: "BRAINBOOSTER - Coming soon",
    description: "Snart i appstore",
};

const montserrat = Montserrat({
    subsets: ["latin"], // Specifying the latin subset
    weight: ["400", "700"], // Specify the weights you want
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${montserrat.className} bg-primary`}>
                <Header />
                {children}
            </body>
        </html>
    );
}
