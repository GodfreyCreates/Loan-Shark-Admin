import type { Metadata } from "next";
import "./globals.css";

// No need to import Inter font as it will be replaced by Montserrat

export const metadata: Metadata = {
  title: "Loan Management App",
  description: "Transform Your Lending Experience with Our Local Loan Management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-montserrat">{children}</body>
    </html>
  );
}
