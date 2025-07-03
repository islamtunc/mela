// Bismillahirrahmanirrahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah 
// Allahu Ekber, Allahu Ekber, Allahu Ekber, La ilahe illallah
// Bila Allah Azze ve Celle me ji sunneta Resulullah Muhammed (s.a.v) neqetine, amin rabbal alemin 
// Xeyni Allah tu Xweda tune
import React from "react";

const Footer = () => (
  <footer className="bg-dark text-white pt-4">
    <div className="container text-center text-md-left">
      <div className="row">
        {/* About Section */}
        <div className="col-md-4 mt-md-0 mt-3">
          <h5 className="text-uppercase font-weight-bold">Hakkımızda</h5>
          <p>
            Mimarid, yaşam alanlarınızı estetik ve fonksiyonel çözümlerle yeniden tasarlayan bir iç mimarlık ofisidir. Hayalinizdeki mekanları gerçeğe dönüştürmek için buradayız.
          </p>
        </div>

        {/* Links Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Hızlı Menü</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/malper" className="text-white">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="/malper/projeler/konut" className="text-white">
                Projelerimiz
              </a>
            </li>
            <li>
              <a href="/malper/hizmetler/tasarim" className="text-white">
                Hizmetlerimiz
              </a>
            </li>
            <li>
              <a href="/malper/iletisim" className="text-white">
                İletişim
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Bizi Takip Edin</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://facebook.com" className="text-white" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://instagram.com" className="text-white" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://pinterest.com" className="text-white" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com" className="text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3">
      © {new Date().getFullYear()} Tüm Hakları Saklıdır:{" "}
      <a href="https://mimarid.com" className="text-white">
        Mimarid İç Mimarlık
      </a>
    </div>
  </footer>
);

export default Footer;