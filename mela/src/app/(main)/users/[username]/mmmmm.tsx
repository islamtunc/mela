// Bismillahirrahmanirrahim



import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">

        <h1 className="text-3xl font-semibold">Ayarlar</h1>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">İlanlarım</TabsTrigger>
            <TabsTrigger value="following">...</TabsTrigger>
            <TabsTrigger value="mm">...</TabsTrigger>

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
