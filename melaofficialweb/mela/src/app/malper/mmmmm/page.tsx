// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">


       <Alert>About Us</Alert>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">Promotion </TabsTrigger>
            <TabsTrigger value="following">Blog</TabsTrigger>
            <TabsTrigger value="mm">E commerce</TabsTrigger>

            <TabsTrigger value="mm">Social Media</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">

           
          </TabsContent>
          <TabsContent value="following">

          </TabsContent>
    





        <TabsContent value="mm">

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
