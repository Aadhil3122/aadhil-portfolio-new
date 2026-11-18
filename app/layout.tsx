import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Aadhil | Software Developer",
  description:
    "Mohamed Aadhil - Software Developer and B.Tech Software Technology undergraduate. Explore my skills, training experience and software development projects.",
  keywords: [
    "Mohamed Aadhil",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Sri Lanka",
  ],
  authors: [{ name: "Mohamed Aadhil" }],
  openGraph: {
    title: "Mohamed Aadhil | Software Developer",
    description:
      "Explore my software development portfolio, skills and projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
