import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-44 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Impressum</h1>
          <p className="text-muted-foreground text-sm mb-10">
            Angaben gemäß § 5 TMG
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Betreiber</h2>
              <p>
                <strong className="text-foreground">German Herbal Bitter Culture</strong><br />
                Blog zu deutschen Kräuterbitters und Kräuterlikören<br />
                Domain: germanherbalbitterculture.com
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Kontakt</h2>
              <p>
                Für Anfragen nutzen Sie bitte unser{" "}
                <a href="/ueber-uns" className="text-primary hover:underline">Kontaktformular</a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Inhaltliche Verantwortung</h2>
              <p>
                Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV: Der Betreiber von
                germanherbalbitterculture.com.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Haftungsausschluss</h2>
              <h3 className="font-serif text-lg text-foreground mb-2">Haftung für Inhalte</h3>
              <p className="mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>
              <h3 className="font-serif text-lg text-foreground mb-2">Urheberrecht</h3>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Hinweis zum Alkohol</h2>
              <div className="border border-primary/30 rounded bg-card p-5">
                <p>
                  Diese Website ist ein rein informativer Blog. Es wird kein Alkohol verkauft,
                  angeboten oder vermittelt. Alle Inhalte richten sich ausschließlich an Personen
                  ab 18 Jahren. Das Trinken von Alkohol ist ab 18 Jahren in Deutschland gesetzlich erlaubt.
                  Bitte genießen Sie Alkohol stets verantwortungsvoll und in Maßen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
