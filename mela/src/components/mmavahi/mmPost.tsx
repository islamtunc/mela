// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allah u Ekber, Allah u Ekber, La ilahe illallah
// SuphanAllah, Elhamdulillah, Allahu Ekber


"use client";

import { PostData } from "@/lib/types";
import { cn, formatRelativeDate } from "@/lib/utils";
import { Media } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Linkify from "../Linkify";
import UserAvatar from "../UserAvatar";


interface PostProps {
  post: PostData;
}

export default function MmmPost({ post }: PostProps) {

  return (
    <article className="group/post space-y-3 rounded-2xl bg-card p-5 shadow-sm text-black">
      <div className="flex justify-between gap-3">
        <div className="flex flex-wrap gap-3">
          <div>
          </div>
        </div>
      </div>
      <Linkify>
        <div className="space-y-3">
          {Array.isArray(post.content)
            ? post.content.map((line: string, i: number) => {
                if (i === 0)
                  return (
                    <h2 key={i} className="text-xl font-bold mb-1">
                      {line}
                    </h2>
                  );
                if (i === 1)
                  return (
                    <div key={i} className="text-green-700 font-semibold mb-2">
                      {line}
                    </div>
                  );
                return (
                  <p key={i} className="text-base whitespace-pre-line">
                    {line}
                  </p>
                );
              })
            : (
              <p className="text-base whitespace-pre-line">{post.content}</p>
            )}
        </div>
      </Linkify>
      {!!post.attachments.length && (
        <MediaPreviews attachments={post.attachments} />
      )}
      <hr className="text-muted-foreground" />
      <div className="flex justify-between gap-5">
        <div className="flex items-center gap-5">
          <Link
            href={`/malper/mmavahi/posts/${post.id}`}
            className="block text-sm text-muted-foreground hover:underline"
            suppressHydrationWarning
          >
          </Link>
        </div>
      </div>
    </article>
  );
}

interface MediaPreviewsProps {
  attachments: Media[];
}

function MediaPreviews({ attachments }: MediaPreviewsProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        attachments.length > 1 && "sm:grid sm:grid-cols-2",
      )}
    >
      {attachments.map((m) => (
        <MediaPreview key={m.id} media={m} />
      ))}
    </div>
  );
}

interface MediaPreviewProps {
  media: Media;
}

function MediaPreview({ media }: MediaPreviewProps) {
  if (media.type === "IMAGE") {
    return (
      <Image
        src={media.url}
        alt="Attachment"
        width={500}
        height={500}
        className="mx-auto size-fit max-h-[30rem] rounded-2xl"
      />
    );
  }

  if (media.type === "VIDEO") {
    return (
      <div>
        <video
          src={media.url}
          controls
          className="mx-auto size-fit max-h-[30rem] rounded-2xl"
        />
      </div>
    );
  }

  return <p className="text-destructive">Ev medya nabe</p>;
}



