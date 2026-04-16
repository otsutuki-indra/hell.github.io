import { Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({ 
  subsets: ["latin"], 
  weight: ['300', '400', '600', '700'],
  variable: '--font-rajdhani'
});

const mono = Share_Tech_Mono({ 
  subsets: ["latin"], 
  weight: '400',
  variable: '--font-mono'
});

export const metadata = {
  title: "HELLX STUDIO — WE BUILD WHAT OTHERS FEAR",
  description: "Digital Warfare Division",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${mono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
