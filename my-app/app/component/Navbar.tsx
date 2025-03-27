"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { href: "/", name: "Dashboard" },
    { href: "/about", name: "About" },
    { href: "/docs", name: "Docs" },
    { href: "/home", name: "Home" },
    { href: "/products", name: "Product" },
    { href: "/profile", name: "Profile" },
  ];

  const pathname = usePathname();

  return (
    <div className="fade-in">
      {navLinks.map((link, i) => (
        <Link
          key={i}
          style={
            pathname == link.href
              ? { color: "pink", fontSize: "30px", margin: "15px" }
              : { margin: "10px" }
          }
          href={link.href}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
