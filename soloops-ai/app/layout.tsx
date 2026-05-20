import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoloOps AI -- Micro-Operations Agent — Micro-Operations Agent",
  description: "AI-powered micro-operations agent for solo businesses. Smart tasks, follow-ups, and AI insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
