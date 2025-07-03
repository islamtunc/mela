// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// Suphanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah

import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Bookmark, Home, Mail } from "lucide-react";
import Link from "next/link";

interface MenuBarProps {
  className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null ;

  return (
    <div className={className}>
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Home"
        asChild
      >
        <Link href="/">
          <Home />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>
    
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="Bookmarks"
        asChild
      >
        <Link href="/bookmarks">
          <Bookmark />
          <span className="hidden lg:inline">Bookmarks</span>
        </Link>
      </Button>

      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3"
        title="messages"
        asChild
      >
        <Link href="/messages">
          <Mail />
          <span className="hidden lg:inline">Messages</span>
        </Link>
      </Button>
    </div>
  );
}
