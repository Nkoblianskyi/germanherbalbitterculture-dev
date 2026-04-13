import Link from "next/link"
import { Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 border border-primary rounded-full flex items-center justify-center">
                <Leaf className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="font-serif text-foreground tracking-wider text-sm uppercase">
                German Herbal Bitter Culture
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ein informativer Blog über die Tradition der deutschen Kräuterbitter und Kräuterlikör.
              Kein Verkauf. Nur Wissen.
            </p>
            <p className="text-xs text-muted-foreground border border-border/50 rounded px-3 py-2 bg-muted/30">
              🔞 Dieser Blog richtet sich ausschließlich an Personen ab 18 Jahren.
              Alkohol verantwortungsbewusst genießen.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-primary font-serif uppercase tracking-widest text-xs mb-4">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Startseite" },
                { href: "/kraeuterbitter", label: "Kräuterbitter" },
                { href: "/bier-bars", label: "Bier & Bars" },
                { href: "/ueber-uns", label: "Über uns" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-primary font-serif uppercase tracking-widest text-xs mb-4">Rechtliches</h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/datenschutz", label: "Datenschutzerklärung" },
                { href: "/cookie-richtlinie", label: "Cookie-Richtlinie" },
                { href: "/impressum", label: "Impressum" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} germanherbalbitterculture.com — Nur zu Informationszwecken. Kein Verkauf von Alkohol.
          </p>
          <p className="text-muted-foreground text-xs">
            Trinken Sie verantwortungsbewusst. Nur für Erwachsene ab 18 Jahren.
          </p>
        </div>
      </div>
    </footer>
  )
}
