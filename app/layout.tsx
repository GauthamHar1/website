import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gautham | CS @ Maryland",
  description:
    "CS student at the University of Maryland. I build things — voice AI, drone defense, and a lot of systems coursework.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
