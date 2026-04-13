import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-44 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Datenschutzerklärung</h1>
          <p className="text-muted-foreground text-sm mb-10">
            Zuletzt aktualisiert: 2026
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist der Betreiber
                der Website <strong className="text-foreground">germanherbalbitterculture.com</strong>.
                Bei datenschutzrechtlichen Fragen wenden Sie sich bitte über unser{" "}
                <a href="/ueber-uns" className="text-primary hover:underline">Kontaktformular</a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">2. Welche Daten wir erheben</h2>
              <h3 className="font-serif text-lg text-foreground mb-2">2.1 Beim Besuch der Website</h3>
              <p className="mb-3">
                Beim Besuch unserer Website werden automatisch technische Daten erhoben, die Ihr Browser
                an unseren Server übermittelt:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mb-4">
                <li>IP-Adresse (anonymisiert)</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seiten</li>
                <li>Browser-Typ und -version</li>
                <li>Betriebssystem</li>
              </ul>
              <p>
                Diese Daten werden ausschließlich für technische Zwecke (Sicherheit, Fehlerdiagnose)
                verwendet und nicht mit anderen Datenquellen zusammengeführt.
              </p>

              <h3 className="font-serif text-lg text-foreground mb-2 mt-5">2.2 Beim Kontaktformular</h3>
              <p>
                Wenn Sie unser Kontaktformular nutzen, verarbeiten wir folgende Daten:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Inhalt Ihrer Nachricht</li>
              </ul>
              <p className="mt-3">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung / vorvertragliche Maßnahmen) bzw. Ihrer ausdrücklichen Einwilligung
                gemäß Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">3. Cookies</h2>
              <p>
                Wir verwenden Cookies ausschließlich für notwendige technische Funktionen sowie
                — mit Ihrer Einwilligung — für anonyme Analysen. Details entnehmen Sie bitte
                unserer <a href="/cookie-richtlinie" className="text-primary hover:underline">Cookie-Richtlinie</a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">4. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für den jeweiligen
                Zweck erforderlich ist oder gesetzliche Aufbewahrungsfristen es verlangen.
                Kontaktanfragen werden nach vollständiger Bearbeitung und Ablauf gesetzlicher
                Aufbewahrungsfristen gelöscht.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">5. Ihre Rechte (DSGVO)</h2>
              <p className="mb-3">Als betroffene Person haben Sie folgende Rechte:</p>
              <ul className="space-y-2 ml-2">
                {[
                  ["Auskunftsrecht", "Art. 15 DSGVO — Auskunft über Ihre bei uns gespeicherten Daten"],
                  ["Berichtigungsrecht", "Art. 16 DSGVO — Berichtigung unrichtiger Daten"],
                  ["Löschungsrecht", "Art. 17 DSGVO — Löschung Ihrer Daten ('Recht auf Vergessenwerden')"],
                  ["Einschränkung", "Art. 18 DSGVO — Einschränkung der Verarbeitung"],
                  ["Datenübertragbarkeit", "Art. 20 DSGVO — Erhalt Ihrer Daten in maschinenlesbarem Format"],
                  ["Widerspruchsrecht", "Art. 21 DSGVO — Widerspruch gegen Verarbeitung"],
                  ["Beschwerde", "Art. 77 DSGVO — Beschwerde bei der zuständigen Aufsichtsbehörde"],
                ].map(([right, desc]) => (
                  <li key={right} className="flex items-start gap-3">
                    <span className="text-primary text-xs mt-1 shrink-0">▸</span>
                    <span>
                      <strong className="text-foreground">{right}:</strong> {desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">6. Keine Datenweitergabe</h2>
              <p>
                Ihre personenbezogenen Daten werden nicht an Dritte verkauft, vermietet oder
                anderweitig weitergegeben — es sei denn, dies ist gesetzlich vorgeschrieben
                oder Sie haben ausdrücklich zugestimmt.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">7. Datensicherheit</h2>
              <p>
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre
                Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder
                gegen den Zugriff unberechtigter Personen zu schützen. Die Übertragung erfolgt
                verschlüsselt über HTTPS (SSL/TLS).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">8. Kontakt zum Datenschutz</h2>
              <p>
                Für alle datenschutzrechtlichen Anliegen wenden Sie sich bitte über unser{" "}
                <a href="/ueber-uns" className="text-primary hover:underline">Kontaktformular</a>.
                Wir werden Ihre Anfrage schnellstmöglich bearbeiten — in der Regel innerhalb von 30 Tagen.
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
