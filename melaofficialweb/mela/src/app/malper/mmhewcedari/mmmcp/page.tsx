// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim

"use client";
import React from "react";
import { Card, Row, Col, Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";


function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column", // mobilde dikey hizalama
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        style={{
          opacity: 0.97,
          color: "black",
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1.5rem" }}>Sporcu Beslenmesi</Card.Title>
          <Row className="g-4">
            {/* Sol Kolon */}
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Card style={{ textAlign: "center", height: "100%" }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>Sporcularda beslenmenin önemi</Card.Title>
                  <Card.Text style={{ fontSize: "1rem" }}>
                    <br />
                    Sporcularda beslenme, performansın artırılması, toparlanma
                    sürecinin hızlandırılması ve genel sağlığın korunması
                    açısından kritik bir rol oynamaktadır. Son dönem
                    araştırmalar, beslenmenin sadece enerji alımı değil, aynı
                    zamanda antrenman adaptasyonu, bağışıklık sistemi desteği ve
                    zihinsel dayanıklılık üzerinde de etkili olduğunu
                    göstermektedir.
                    <br />
                    <br />
                    <strong>Makro ve Mikro Besinlerin Önemi</strong>
                    <br />
                    Sporcuların enerji ve protein ihtiyaçları, sedanter
                    bireylere göre daha fazladır. Bu nedenle karbonhidrat,
                    protein ve yağ gibi makro besin ögelerinin dengeli alımı
                    önemlidir. Ayrıca, vitamin ve mineral gibi mikro besin
                    ögeleri de performans ve toparlanma süreçlerinde kritik rol
                    oynar.
                    <br />
                    <br />
                    <strong>Sonuç</strong>
                    <br />
                    Sporcularda beslenme, sadece fiziksel performansı değil,
                    aynı zamanda genel sağlığı, zihinsel dayanıklılığı ve uzun
                    vadeli başarıyı etkileyen temel bir faktördür.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {/* Sağ Kolon */}
            <Col xs={12} md={6} className="d-flex align-items-center">
              <Image
                src="https://iasbh.tmgrup.com.tr/a9e335/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2021/12/11/tum-beslenmeniz-degisiyor-iste-saat-1600dan-sonra-asla-tuketmemeniz-gereken-o-besin-1639200626070.jpg&mw=752&mh=700"
                style={{
                  border: "5px solid white",
                  borderRadius: "10px",
                  width: "100%",
                  height: "auto",
                  marginBottom: "10px",
                }}
                alt="ROJDA MUSA"
                fluid
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Alert ve ForYouFeed Alt Kısma Taşındı */}
     
    </div>
  );
}

export default page;