// Bismillahirahmanirahim
// Elhamdulillahirabbilalemin
// Es-selatu ve Es-selamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// Süphanallah, Elhamdulillah, Allahu Ekber
import { Prisma } from "@prisma/client";

export function getUserDataSelect(loggedInUserId: string) {
  return {
    id: true,
    username: true,
    displayName: true,
    avatarUrl: true,
    bio: true,
    createdAt: true,
  } satisfies Prisma.UserSelect;
}

export type UserData = Prisma.UserGetPayload<{
  select: ReturnType<typeof getUserDataSelect>;
}>;

export function getPostDataInclude(loggedInUserId: string) {
  return {
    user: {
      select: getUserDataSelect(loggedInUserId),
    },
    attachments: true,
  } satisfies Prisma.PostInclude;
}

export type PostData = Prisma.PostGetPayload<{
  include: ReturnType<typeof getPostDataInclude>;
}>;

export interface PostsPage {
  posts: PostData[];
  nextCursor: string | null;
}

// Yorum (Comment) ile ilgili tüm tip ve fonksiyonları kaldırın

// export function getCommentDataInclude(loggedInUserId: string) {
//   return {
//     // user alanı kaldırıldı, yorumlar anonim olacak
//   } satisfies Prisma.CommentInclude;
// }

// export type CommentData = Prisma.CommentGetPayload<{
//   include: ReturnType<typeof getCommentDataInclude>;
// }>;

// export interface CommentsPage {
//   comments: CommentData[];
//   previousCursor: string | null;
// }

// Bildirim (Notification) ile ilgili tüm tip ve fonksiyonları kaldırın

// export const notificationsInclude = {
//   issuer: {
//     select: {
//       username: true,
//       displayName: true,
//       avatarUrl: true,
//     },
//   },
//   post: {
//     select: {
//       content: true, // content artık string[] olacak
//     },
//   },
// } satisfies Prisma.NotificationInclude;

// export type NotificationData = Prisma.NotificationGetPayload<{
//   include: typeof notificationsInclude;
// }>;

// export interface NotificationsPage {
//   notifications: NotificationData[];
//   nextCursor: string | null;
// }

export interface BookmarkInfo {
  isBookmarkedByUser: boolean;
}
