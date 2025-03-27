"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const handleClick = () => {
    // router.push("/")
    // router.replace("/")
    redirect("/");
  };

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
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
