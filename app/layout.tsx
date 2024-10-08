import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Themes from "@/components/theme-provider";
import AppWalletProvider from "@/components/AppWalletProvider";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " w-screen overflow-x-hidden"}>
        <Themes>
          <AppWalletProvider>{children}</AppWalletProvider>
        </Themes>
        <Toaster />
      </body>
    </html>
  );
}
