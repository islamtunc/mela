// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune


import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();

  if (user) redirect("/");

  return <>{children}</>;
}
