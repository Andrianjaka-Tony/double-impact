import type { Metadata } from "next";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Double Impact — Paris",
  description: "Restaurant Double Impact, Paris 9e. Menu unique 95€ — 7 services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
