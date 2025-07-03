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
          <h5 className="text-uppercase font-weight-bold">About</h5>
          <p>
            Mela is an open-source programming language designed for simplicity, readability, and modern software development. Join our community and start building with Mela today!
          </p>
        </div>

        {/* Links Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/malper" className="text-white">Home</a>
            </li>
            <li>
              <a href="/malper/dokumantasyon" className="text-white">Documentation</a>
            </li>
            <li>
              <a href="/malper/cevrimici-derleyici" className="text-white">Online Compiler</a>
            </li>
            <li>
              <a href="/malper/ornekler" className="text-white">Examples</a>
            </li>
            <li>
              <a href="/malper/topluluk" className="text-white">Community</a>
            </li>
            <li>
              <a href="/malper/blog" className="text-white">Blog</a>
            </li>
            <li>
              <a href="/malper/hakkimizda" className="text-white">About</a>
            </li>
            <li>
              <a href="/malper/iletisim" className="text-white">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4 mb-md-0 mb-3">
          <h5 className="text-uppercase font-weight-bold">Follow Us</h5>
          <ul className="list-unstyled d-flex justify-content-center">
            <li className="mx-2">
              <a href="https://github.com/mela-lang" className="text-white" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://x.com/melalang" className="text-white" aria-label="X">
                <i className="fab fa-x-twitter"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://discord.gg/melalang" className="text-white" aria-label="Discord">
                <i className="fab fa-discord"></i>
              </a>
            </li>
            <li className="mx-2">
              <a href="https://linkedin.com/company/melalang" className="text-white" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center py-3">
      © {new Date().getFullYear()} All Rights Reserved: {" "}
      <a href="https://mela-lang.org" className="text-white">
        Mela Programming Language
      </a>
    </div>
  </footer>
);

export default Footer;