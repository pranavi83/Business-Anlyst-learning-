import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pranavi BA Lab",
  description: "A No-Theory Senior BA Mentor Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <Sidebar />
        <div className="sm:ml-64 p-4 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
