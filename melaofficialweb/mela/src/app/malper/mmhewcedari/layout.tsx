// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd

"use client";

import React from 'react'
import ForYouFeed from './ForYouFeed'
import { Card } from 'react-bootstrap';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
    
      {children}
      <Card style={{ marginTop: "20px", width: "100%", maxWidth: "700px", textAlign: "center", padding: "19px" }}>
        <Card.Title>Diğer Yazılar</Card.Title>
        <Card.Body>
          <ForYouFeed />
        </Card.Body>
      </Card>
    </div>
  )
}
