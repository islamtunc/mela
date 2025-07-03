// Bismillahirahmanirahim 
// ElHAMDULİLLAHİRABBULALEMİN
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SubhanAllah, Elhamdulillah, Allahu Ekber
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Subhanallah , Elhamdulillah, Allahu Ekber
// Hasbunallahu ve ni'mel vekil
// La havle ve la kuvvete illa billahil aliyyil azim

import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import MenuBar from "./MenuBar";
import Navbar from "./Navbar";
import SessionProvider from "./SessionProvider";

import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Alert } from "react-bootstrap";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/malper");

  return (
    <SessionProvider value={session}>
      <div
        className="flex min-h-screen flex-col"
        style={{ backgroundColor: "#22c55e" /* Tailwind'in green-500 tonu, beyazla uyumlu canlı bir yeşil */ }}
      >
        <Navbar />
        <div className="mx-auto flex w-full max-w-7xl grow flex-row gap-2 p-2">
        
          {/* Sol MenuBar kaldırıldı */}
          <div className="flex-1 flex flex-col">
           
            <Row>
        <Col>
          <Alert variant="success" style={{ textAlign: "center", fontSize: "18px" }}>
            Selam Aleykum dear Customer or Developer, Welcome to Admin Panel
          </Alert>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Alert
            style={{
              background: "green",
              color: "white",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Sernameye name nameye Allah <br />
            Be namaye nameye kemi wi Wallah
          </Alert>
        </Col>
      </Row>
            {children}
          </div>
          {/* Sağ MenuBar sadece sm ve üstü ekranlarda görünür */}
          <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-2 py-3 shadow-sm sm:block lg:px-3 xl:w-80" />
        </div>
        {/* Mobilde altta MenuBar */}
        <MenuBar className="sticky bottom-0 flex w-full justify-center gap-2 border-t bg-card p-2 sm:hidden" />
        <Footer />
      </div>
    </SessionProvider>
  );
}






export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-16 bg-gray-800 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Yekazad Software Center. All rights reserved.
      </p>
      <span className="mx-2">|</span>
      <p className="text-xs text-gray-400">
        Admin Panel &mdash; Empowering your management experience.
      </p>
    </footer>
  );
  
}