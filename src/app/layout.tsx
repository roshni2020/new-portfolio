import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ChatWidget } from "@/components/ui/ChatWidget";

const font = League_Spartan({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "600", "800"], display: "swap" });

const SITE = "https://roshnikobula.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Roshni Kobula Raja — Software Engineer, AI & Agentic Systems",
  description: "Software engineer building agentic AI systems, RAG pipelines and tested backends. 12 hackathons, 4 wins.",
  openGraph: {
    title: "Roshni Kobula Raja — Shipping agents that actually work",
    description: "Software engineer · AI/ML & agentic systems · 12 hackathons, 4 wins.",
    url: SITE,
    images: ["/og.png"],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "data:image/svg+xml," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' fill='#0d0d0d'/><circle cx='0' cy='0' r='58' fill='#e8a33b'/><text x='6' y='30' font-family='Arial Black,sans-serif' font-weight='900' font-size='22' fill='#0d0d0d'>RK</text></svg>`),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${font.variable} antialiased`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
        <SmoothScroll>
          <CustomCursor />
          {children}
          <ChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
