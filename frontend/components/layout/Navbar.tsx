import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/datchik-logo.jpeg"
            alt="Datchick Electronics"
            width={180}
            height={60}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-4 py-2 text-[15px] font-medium text-slate-700 transition-all duration-300 hover:bg-sky-500 hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-600 hover:shadow-lg"
        >
          Get Quote
        </Link>

      </Container>
    </header>
  );
}