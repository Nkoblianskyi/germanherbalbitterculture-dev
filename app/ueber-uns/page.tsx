"use client"

import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { Leaf, Send, CheckCircle, X } from "lucide-react"

export default function UeberUnsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!formData.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein."
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein."
    if (!formData.message.trim() || formData.message.length < 10)
      e.message = "Nachricht muss mindestens 10 Zeichen lang sein."
    if (!formData.consent)
      e.consent = "Bitte stimmen Sie der Datenschutzerklärung zu."
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setShowSuccessModal(true)
    setFormData({ name: "", email: "", message: "", consent: false })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-preview.jpg"
            alt="Kräuterbitter in einem deutschen Gewölbekeller"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <div className="inline-block mb-6 px-4 py-2 bg-muted/40 border border-border/50 rounded text-xs text-muted-foreground">
            <span className="text-primary font-semibold">18+</span> — Informationsblog. Kein Alkoholverkauf.
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance leading-tight">
            Über <span className="text-primary">German Herbal<br />Bitter Culture</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Ein unabhängiger, rein informativer Blog über die Tradition und Kultur
            der deutschen Kräuterbitters und Kräuterliköre.
          </p>
        </div>
      </section>

      {/* About content */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-5">
                Unsere <span className="text-primary">Mission</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                German Herbal Bitter Culture entstand aus einer tiefen Faszination für die
                botanische Vielfalt und das kulturelle Erbe der deutschen Kräuterlikör-Tradition.
                Unser Ziel ist es, dieses jahrhundertealte Wissen zu dokumentieren, zu bewahren
                und einem breiten Publikum zugänglich zu machen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wir sind kein Verkaufsportal. Wir sind ein Blog — für alle,
                die sich für die Geschichte, Botanik und Kultur hinter dem deutschen Kräuterbitter interessieren.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-foreground mb-5">
                Was wir <span className="text-primary">teilen</span>
              </h2>
              <ul className="space-y-3">
                {[
                  "Geschichte und Tradition der deutschen Kräuterbitters",
                  "Botanisches Wissen über verwendete Kräuter und Wurzeln",
                  "Regionale Brauereien und Lokale mit langer Geschichte",
                  "Kulturelle Hintergründe der deutschen Trinkkultur",
                  "Informationen über verschiedene Sorten und Stärken (bis 44% Vol.)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                    <Leaf className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer box */}
          <div className="border border-primary/30 rounded bg-card p-6 mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                18+
              </div>
              <h3 className="font-serif text-foreground text-lg">Wichtiger Hinweis</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dieser Blog richtet sich ausschließlich an Personen ab 18 Jahren. Sämtliche Inhalte dienen
              rein informativen Zwecken. Auf dieser Website wird keinerlei Alkohol verkauft, vermittelt
              oder angeboten. Wir empfehlen, Alkohol stets verantwortungsvoll und in Maßen zu genießen.
              Bei Suchtproblemen wenden Sie sich bitte an die Bundeszentrale für gesundheitliche Aufklärung
              (bzga.de).
            </p>
          </div>

          {/* Contact form */}
          <div className="border border-border rounded bg-card p-8 md:p-12">
            <h2 className="font-serif text-3xl text-foreground mb-2">
              Kontakt
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Haben Sie Fragen, Anregungen oder möchten Sie mehr über unsere Arbeit erfahren?
              Schreiben Sie uns — wir freuen uns über Ihre Nachricht.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-serif">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Ihr vollständiger Name"
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-serif">
                    E-Mail <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="ihre@email.de"
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2 font-serif">
                  Nachricht <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background border border-border rounded px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Ihre Nachricht an uns..."
                />
                {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
              </div>

              {/* Checkbox consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-primary shrink-0"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.{" "}
                    <span className="text-primary">*</span>
                  </span>
                </label>
                {errors.consent && <p className="text-destructive text-xs mt-1.5 ml-7">{errors.consent}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm tracking-widest uppercase font-serif hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-card border border-primary/30 rounded-lg p-10 max-w-md w-full text-center shadow-2xl relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-3">Vielen Dank!</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns so schnell wie möglich
              bei Ihnen melden.
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-primary text-primary-foreground px-8 py-3 rounded text-sm tracking-widest uppercase font-serif hover:bg-primary/90 transition-colors"
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      <Footer />
      <CookieBanner />
    </div>
  )
}
