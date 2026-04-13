"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all")
    setVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg shadow-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-serif text-foreground text-base mb-2 tracking-wide">
              Diese Website verwendet Cookies
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
              Einige sind notwendig für den Betrieb der Seite, andere helfen uns, die Website zu verbessern.
              Mehr Informationen in unserer{" "}
              <Link href="/cookie-richtlinie" className="text-primary hover:underline">
                Cookie-Richtlinie
              </Link>{" "}
              und{" "}
              <Link href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={acceptAll}
                className="px-5 py-2 bg-primary text-primary-foreground rounded text-sm font-serif tracking-wide hover:bg-primary/90 transition-colors"
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptEssential}
                className="px-5 py-2 border border-border text-foreground rounded text-sm font-serif tracking-wide hover:border-primary/50 transition-colors"
              >
                Nur notwendige
              </button>
            </div>
          </div>
          <button
            onClick={acceptEssential}
            className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
