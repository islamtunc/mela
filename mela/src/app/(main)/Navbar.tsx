// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Allah U Ekber ve lillahi'l-hamd

"use client";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import UserButton from "@/components/UserButton";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Menü dışına tıklanınca kapat
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div
        ref={navRef}
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3"
      >
        {/* Logo */}
       

        {/* Mobil Menü Butonu */}
        <button
          className="lg:hidden p-2 rounded text-green-500"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <FaBars size={22} />
        </button>

        {/* Menü Öğeleri */}
        <nav
          className={`
            flex-col lg:flex-row flex items-center gap-3 lg:gap-5
            fixed lg:static top-16 left-0 w-full lg:w-auto bg-card lg:bg-transparent z-20
            transition-all duration-200
            ${menuOpen ? "flex" : "hidden lg:flex"}
          `}
        >
          <Link
            href="/dashboard"
            className="text-sm font-medium text-secondary hover:text-primary w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/users"
            className="text-sm font-medium text-secondary hover:text-primary w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Kullanıcılar
          </Link>

          {/* Blog ve Ayarlar Dropdownlarını mobilde alt alta, masaüstünde yan yana göster */}
          <div className="w-full flex flex-col items-center lg:w-auto lg:flex-row lg:items-center lg:gap-3">
            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-sm font-medium text-secondary hover:text-primary w-full lg:w-auto px-0 text-center">
                Blog
              </Dropdown.Toggle>
              <Dropdown.Menu
                onClick={() => {
                  if (window.innerWidth < 1024) setMenuOpen(false);
                }}
              >
                <Dropdown.Item as={Link} href="/posts">
                  Blog Yazıları
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/posts/new">
                  Yeni Blog Yazısı
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/categories">
                 Categories
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-sm font-medium text-secondary hover:text-primary w-full lg:w-auto px-0 text-center">
                Settings
              </Dropdown.Toggle>
              <Dropdown.Menu
                onClick={() => {
                  if (window.innerWidth < 1024) setMenuOpen(false);
                }}
              >
                <Dropdown.Item as={Link} href="/settings/profile">
                  Profil Ayarları
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/settings/security">
                  Güvenlik Ayarları
                </Dropdown.Item>
                <Dropdown.Item as={Link} href="/settings/notifications">
                  Bildirim Ayarları
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Link
            href="/reports"
            className="text-sm font-medium text-secondary hover:text-primary w-full lg:w-auto px-5 py-2 lg:p-0 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Raporlar
          </Link>
        </nav>

         <Link href="/" className="text-2xl font-bold text-primary">
          Yekazad SC
        </Link>
        {/* Kullanıcı Butonu */}
        <div className="sm:ms-auto">
          <UserButton />
        </div>



      </div>
    </header>
  );
}