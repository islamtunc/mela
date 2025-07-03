// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd

import React from "react";
import { AssistantProvider } from "./AssistantContext";
import AssistantUI from "./AssistantUI";

export default function AssistantRoot() {
  return (
    <AssistantProvider>
      <AssistantUI />
    </AssistantProvider>
  );
}