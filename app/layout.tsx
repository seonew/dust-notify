import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/lib/provider";
import BottomTabs from "@/components/BottomTabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dust Notify",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <BottomTabs />
        </Providers>
      </body>
    </html>
  );
}
