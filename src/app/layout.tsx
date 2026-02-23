import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "โรงเรียนดุสิตวิทยา - Dusit Wittaya School",
  description: "มุ่งมั่นพัฒนาวิชาการ ปลูกฝังคุณธรรม จริยธรรม สร้างผู้นำแห่งอนาคต ด้วยสภาพแวดล้อมที่เอื้อต่อการเรียนรู้แบบบูรณาการ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
