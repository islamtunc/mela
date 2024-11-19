// Bismillahirahmanirahim

"use client"

import { MdWhatsapp } from "react-icons/md";

import { Alert, Button } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { WhatsAppWidget } from 'react-whatsapp-widget';
export function Tegihistin() {
  return (<div>
    <Alert style={{margin:7 ,background:"white"}} >
     <Button  href="tel:+905549765692"><FaPhone  /></Button> Lêgerîn 


  <WhatsAppWidget message=" WhatsApp ê de ji me re binivîsin" inputPlaceHolder="Mesajınızı Yazın" replyTimeText="Dema herî nêz de em ê vegerin we înşallah" sendButtonText="Bişînin" companyName="" phoneNumber="+905549765692" ></WhatsAppWidget>

  </Alert>
    </div>
  );
}