
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShareShelf – Community Resource Sharing",
  description:
    "Lend, borrow and share resources within your campus or local community safely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F8F9F5] text-[#242B2A] antialiased">
        {children}
      </body>
    </html>
  );
}
