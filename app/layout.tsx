import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Artisan Dental Clinic",
  description: "Artisan Dental Clinic located at Davao City",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
