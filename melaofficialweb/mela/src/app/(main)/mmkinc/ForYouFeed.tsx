// Bismillahirrahmanirrahim 
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber


"use client";

import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";
import Post from "@/components/mmkinc/Post";
import PostsLoadingSkeleton from "@/components/mmavahi/PostsLoadingSkeleton";
import kyInstance from "@/lib/ky";
import { PostsPage } from "@/lib/types";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Button } from "react-bootstrap";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";


export default function ForYouFeed() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["post-feed", "for-you"],
    queryFn: ({ pageParam }) =>
      kyInstance
        .get(
          "/api/posts/mmavahi",
          pageParam ? { searchParams: { cursor: pageParam } } : {},
        )
        .json<PostsPage>(),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const posts = data?.pages.flatMap((page) => page.posts) || [];

  const deleteMutation = useMutation({
    mutationFn: async (postId: string) => {
      await kyInstance.delete(`/api/posts/mmavahi/${postId}`);
    },
    onSuccess: () => {
      toast({
        description: "Gönderi silindi",
        variant: "default",
      });
      // Sayfayı yenile veya veriyi tekrar çek
      window.location.reload();
    },
    onError: () => {
      toast({
        description: "Silme işlemi başarısız",
        variant: "destructive",
      });
    },
  });

  if (status === "pending") {
    return <PostsLoadingSkeleton />;
  }

  if (status === "success" && !posts.length && !hasNextPage) {
    return (
      <p className="text-center text-muted-foreground">
        Hê kesî tiştek parvenekirî ye
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-center text-destructive">
        Pirsgirek derket 
      </p>
    );
  }

  return (
    <InfiniteScrollContainer
      className="space-y-5"
      onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
    >
      {posts.map((post) => (
        <div key={post.id} className="relative">
          <div className="mb-2 flex gap-2 justify-end">
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => deleteMutation.mutate(post.id)}
              disabled={deleteMutation.isPending}
            >
              Sil
            </Button>
          </div>
          <Post post={post} />
        </div>
      ))}
      {isFetchingNextPage && <Loader2 className="mx-auto my-3 animate-spin" />}
    </InfiniteScrollContainer>
  );
}
