// Bismillahir Rahmanir Rahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber


import { Skeleton } from "../ui/skeleton";

export default function PostsLoadingSkeleton() {
  return (
    <div className="space-y-7">
      <PostLoadingSkeleton />
      <PostLoadingSkeleton />
      <PostLoadingSkeleton />
    </div>
  );
}

function PostLoadingSkeleton() {
  return (
    <div className="w-full animate-pulse rounded-2xl bg-white p-6 shadow-md space-y-4">
      {/* Başlık */}
      <Skeleton className="h-6 w-3/4 rounded mb-2" />
      {/* Alt başlık veya kısa açıklama */}
      <Skeleton className="h-4 w-1/2 rounded mb-4" />
      {/* İçerik paragrafları */}
      <Skeleton className="h-4 w-full rounded mb-2" />
      <Skeleton className="h-4 w-5/6 rounded mb-2" />
      <Skeleton className="h-4 w-2/3 rounded mb-2" />
      {/* Görsel alanı */}
      <Skeleton className="h-40 w-full rounded-lg mb-2" />
      {/* Alt kısım: avatar ve yazar */}
      <div className="flex items-center gap-3 mt-4">
        <Skeleton className="size-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-3 w-16 rounded" />
        </div>
      </div>
    </div>
  );
}
