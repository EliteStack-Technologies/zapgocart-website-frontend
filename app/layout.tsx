import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZapGoCart - Power Your E-Commerce Empire with Multi-Tenant Backend",
  description: "Complete multi-tenant e-commerce backend solution with order management, product catalog, customer portal, analytics, and WhatsApp integration. Start your free trial today.",
  keywords: ["e-commerce backend", "multi-tenant", "order management", "SaaS", "online store"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
