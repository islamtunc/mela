// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.
// Allah bizleri doğru yoldan ayırmasın, İslam'ı en güzel şekilde yaşamayı nasip etsin.
// Allah bizleri Kur'an ve Sünnet'e bağlı, salih ameller işleyen kullarından eylesin.
// Allah bizleri Peygamber Efendimiz'in (s.a.v) izinden giden, O'na layık bir ümmet eylesin.
// SuphanAllah velhamdulillah, Allahu Ekber.
// La ilahe illallah, Muhammedur Resulullah.
import PostEditor from "@/components/mmkedkar/editor/PostEditor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ForYouFeed from "./ForYouFeed";

import SearchField from "@/components/mmavahi/SearchField";
import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <main className="flex w-full min-w-0 gap-5 p-">
      <div className="w-full min-w-0 space-y-5">

      <Alert variant="success"> Manage References Page </Alert>
        <Tabs defaultValue="mm">
          <TabsList>
            <TabsTrigger value="for-you">For You</TabsTrigger>
            <TabsTrigger value="mm">New Post</TabsTrigger>

          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">

      <SearchField/>
          </TabsContent>
    





        <TabsContent value="mm">

  <PostEditor />

    </TabsContent>
    </Tabs>
      </div>
    </main>
  );
}
