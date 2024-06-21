import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./ui/fonts";
import Header from "./ui/shared/header";


export const metadata: Metadata = {
  title: "Olga Dementey | Frontend Developer",
  description: "Passionate learner, eager to dive into new technologies and take new challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  );
}
