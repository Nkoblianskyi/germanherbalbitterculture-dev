import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-44 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Cookie-Richtlinie</h1>
          <p className="text-muted-foreground text-sm mb-10">
            Zuletzt aktualisiert: 2026
          </p>

          <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">1. Was sind Cookies?</h2>
              <p>
                Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Endgerät
                (Computer, Tablet, Smartphone) gespeichert werden. Sie ermöglichen es der Website,
                Ihren Browser bei einem erneuten Besuch wiederzuerkennen und bestimmte Einstellungen
                oder Informationen zu speichern.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">2. Welche Cookies verwenden wir?</h2>

              <h3 className="font-serif text-lg text-foreground mb-2 mt-4">2.1 Notwendige Cookies</h3>
              <p className="mb-3">
                Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht
                deaktiviert werden. Sie speichern keine persönlich identifizierbaren Informationen.
              </p>
              <div className="border border-border rounded overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-card">
                    <tr>
                      <th className="text-left px-4 py-3 text-foreground font-serif">Name</th>
                      <th className="text-left px-4 py-3 text-foreground font-serif">Zweck</th>
                      <th className="text-left px-4 py-3 text-foreground font-serif">Dauer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 text-foreground font-mono text-xs">cookie-consent</td>
                      <td className="px-4 py-3">Speichert Ihre Cookie-Einwilligung</td>
                      <td className="px-4 py-3">1 Jahr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-lg text-foreground mb-2 mt-6">2.2 Analytische Cookies (optional)</h3>
              <p>
                Mit Ihrer Einwilligung können wir Analyse-Cookies einsetzen, um zu verstehen,
                wie Besucher unsere Website nutzen. Diese helfen uns, die Website zu verbessern.
                Alle Daten werden anonymisiert verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">3. Wie können Sie Cookies verwalten?</h2>
              <p className="mb-3">
                Sie haben jederzeit die Möglichkeit, Cookies zu verwalten oder zu löschen:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Über das Cookie-Banner am unteren Bildschirmrand beim ersten Besuch</li>
                <li>Über die Einstellungen Ihres Browsers</li>
                <li>Durch direktes Löschen Ihrer Browser-Cookies</li>
              </ul>
              <p className="mt-3">
                Bitte beachten Sie, dass das Deaktivieren von Cookies die Funktionalität der
                Website beeinträchtigen kann.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">4. Drittanbieter-Cookies</h2>
              <p>
                Auf dieser Website werden keine Drittanbieter-Cookies für Werbezwecke oder soziale
                Netzwerke eingesetzt. Wir verwenden keine Tracking-Pixels von sozialen Medien.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">5. Kontakt</h2>
              <p>
                Bei Fragen zu unserer Cookie-Richtlinie wenden Sie sich bitte über unser{" "}
                <a href="/ueber-uns" className="text-primary hover:underline">Kontaktformular</a> an uns.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  )
}
