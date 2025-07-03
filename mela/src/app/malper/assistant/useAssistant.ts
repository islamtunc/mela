// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd

import { useAssistantContext } from "./AssistantContext";

export function useAssistant() {
  const { messages, loading, sendMessage } = useAssistantContext();
  return { messages, loading, sendMessage };
}