import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Wonky Wizard - Choose Your Own Adventure!",
  description: "A silly bedtime story adventure for kids!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
