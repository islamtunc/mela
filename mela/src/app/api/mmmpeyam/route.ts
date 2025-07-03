// Bismillahirrahmanirrahim
// Elhamdu lillahi rabbil alamin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Eksik veri" }, { status: 400 });
    }
    const newMsg = await prisma.mmmpeyam.create({
      data: { name, email, message },
    });
    return NextResponse.json({ success: true, data: newMsg });
  } catch (e) {
    return NextResponse.json({ error: "Bir hata oluştu" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const messages = await prisma.mmmpeyam.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

