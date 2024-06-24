import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "../components/header";
import { GeistSans } from "geist/font/sans";
import Footer from "@/components/footer";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";

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
      <body className={inter.className}>
        <Providers>
          <SignedOut>
            <Header />
          </SignedOut>
          <div className="flex min-h-screen w-full">
            <SignedIn>
              <SideNav />
            </SignedIn>
            <SignedIn>
              <div className="flex-grow flex flex-col">
                <TopNav />
                <main className="container mx-auto p-4">
                  {children}
                </main>
              </div>
            </SignedIn>
            <SignedOut>
                <main className="container mx-auto p-4">{children}</main>
            </SignedOut>
          </div>
          <SignedOut>
            <Footer />
          </SignedOut>
        </Providers>
      </body>
    </html>
  );
}
