"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"

function DisclaimerBar() {
  return (
    <div className="w-full bg-muted/40 border-b border-border/50 px-4 py-2">
      <p className="text-center text-xs text-muted-foreground tracking-wide">
        <span className="text-primary font-semibold">18+ </span>
        Dieser Blog richtet sich ausschließlich an Erwachsene ab 18 Jahren.&nbsp;
        <span className="text-muted-foreground/70">|</span>&nbsp;
        Hier wird kein Alkohol verkauft — rein informativ.&nbsp;
        <span className="text-muted-foreground/70">|</span>&nbsp;
        Bitte trinken Sie verantwortungsbewusst.
      </p>
    </div>
  )
}

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/kraeuterbitter", label: "Kräuterbitter" },
  { href: "/bier-bars", label: "Bier & Bars" },
  { href: "/ueber-uns", label: "Über uns" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <DisclaimerBar />
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            <Leaf className="w-4 h-4 text-primary" />
          </div>
          <span className="text-cream font-serif text-lg tracking-widest uppercase leading-none">
            German Herbal<br />
            <span className="text-primary text-sm">Bitter Culture</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase font-serif"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü öffnen"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors text-sm tracking-widest uppercase font-serif"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
