import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TemplateProvider } from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Template Builder and and Preview Tool",
  description: "Customize and preview wedding invitations | Wedding Invitation | Wedding Invitation Maker | Wedding Invitation Templates | Wedding Invitation Card | Wedding Invitation Design | Wedding Invitation Online | Wedding Invitation Ideas | Wedding Invitation Video | Wedding Invitation App | Wedding Invitation Card Design | Wedding Invitation Card Maker | Wedding Invitation Card Online | Wedding Invitation Card Ideas | Wedding Invitation Card Video | Wedding Invitation Card App | Wedding Invitation Card Design Online | Wedding Invitation Card Maker Online | Wedding Invitation Card Online Free | Wedding Invitation Card Ideas Online | Wedding Invitation Card Video Online | Wedding Invitation Card App Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <TemplateProvider>
          {children}
        </TemplateProvider>
      </body>
    </html>
  );
}
