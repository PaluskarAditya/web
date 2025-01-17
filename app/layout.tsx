import type { Metadata } from "next";
import "./globals.css";
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: "Documents on the goo!!!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body
        className={'antialiased relative'}
        id="body"
      >
        <Navbar/>
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center h-screen w-full blur-[200px]">
          <div className="bg-blue-500 p-5 h-[400px] w-[400px]"></div>
          <div className="bg-red-500 p-5 h-[400px] w-[100px]"></div>
          <div className="bg-green-500 p-5 h-[400px] w-[400px]"></div>
          <div className="bg-orange-500 p-5 h-[400px] w-[300px]"></div>
        </div>
        <main className="snap-center scroll-smooth absolute top-[0] left-0 right-0 botton-0">
          {children}
        </main>
      </body>
    </html>
  );
}
