import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./basics.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Evan Alifian | Portfolio",
  description: "Evan Alifian's web portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <main>
            <div className="main_wrapper pt-6">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
