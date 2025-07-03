// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Ve salatu ve selamu ala Resulina Muhammedin ve ala alihi ve sah
// La ilahe illallah, Muhammedur Resulullah
// SuphanAllah velhamdulillah, Allahu Ekber
// Allah ümmetimizi korusun, birlik ve beraberliğimizi daim eylesin.


import { useSession } from "@/app/(main)/SessionProvider";
import { useToast } from "@/components/ui/use-toast";
import { PostsPage } from "@/lib/types";
import {
  InfiniteData,
  QueryFilters,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { submitPost } from "./actions";

export function useSubmitPostMutation() {
  const { toast } = useToast();

  const queryClient = useQueryClient();

  const { user } = useSession();

  const mutation = useMutation({
    mutationFn: submitPost,
    onSuccess: async (newPost) => {
      const queryFilter = {
        queryKey: ["post-feed"],
        predicate(query) {
          return (
            query.queryKey.includes("for-you") ||
            (query.queryKey.includes("user-posts") &&
              query.queryKey.includes(user.id))
          );
        },
      } satisfies QueryFilters;

      await queryClient.cancelQueries(queryFilter);

      queryClient.setQueriesData<InfiniteData<PostsPage, string | null>>(
        queryFilter,
        (oldData) => {
          const firstPage = oldData?.pages[0];

          if (firstPage) {
            return {
              pageParams: oldData.pageParams,
              pages: [
                {
                  posts: [newPost, ...firstPage.posts],
                  nextCursor: firstPage.nextCursor,
                },
                ...oldData.pages.slice(1),
              ],
            };
          }
        },
      );

      queryClient.invalidateQueries({
        queryKey: queryFilter.queryKey,
        predicate(query) {
          return queryFilter.predicate(query) && !query.state.data;
        },
      });

      toast({
        description: "gönderi yayınlandı",
      });
    },
    onError(error) {
      console.error(error);
      toast({
        variant: "destructive",
        description: "Sorun çıktı tekrar deneyin devam ederse yekazad SC ile iletişime geçin.",
      });
    },
  });

  return mutation;
}