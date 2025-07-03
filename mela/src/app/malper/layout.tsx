// Bismillahirahmanirahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd
import React from "react";
import { Alert } from "react-bootstrap";
import Mmmnavbar from "./components/mmnav";

import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/mmbingeh";
import AssistantRoot from "./assistant";
import ContactForm from "./components/mmfrm";



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
<div>

<Alert variant="warning">Supports Palastina and Rojava!</Alert>
<Mmmnavbar/>

{children}
 <AssistantRoot />



 <ContactForm/>
<Footer/>
</div>
  );
}
