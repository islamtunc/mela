// Bismillahirahmanirahim



import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BasicExample from "./components/nav";
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/footer";



import { Alert } from "react-bootstrap";
import { Tegihistin } from "./components/tegihistin";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Antolojîya Îslam ê",
  description: "Warê agahîyê û bihuşt a nivîsan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{background:"green"}} className={inter.className}>
        
        <BasicExample/>
        {children}
    
<Tegihistin />

        <Footer/>
        </body>
    </html>
  );
}
