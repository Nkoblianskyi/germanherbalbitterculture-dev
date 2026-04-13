import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { MapPin, Beer, Leaf } from "lucide-react"

const breweries = [
  {
    name: "Klosterbrauerei Andechs",
    region: "Bayern",
    founded: "1455",
    style: "Helles, Doppelbock",
    description:
      "Hoch auf dem Heiligen Berg bei München liegt eine der ältesten aktiven Klosterbrauereien Deutschlands. Die Benediktinermönche brauen hier seit dem 15. Jahrhundert nach überlieferten Rezepturen. Das Klosterbier und die servierte Brotzeitplatte im Biergarten gehören zu den unvergesslichen Erlebnissen Bayerns.",
    note: "Historisches Kulturerbe",
    color: "border-primary/40",
  },
  {
    name: "Brauerei Schlenkerla",
    region: "Bamberg, Franken",
    founded: "1405",
    style: "Rauchbier",
    description:
      "Das Rauchbier aus Bamberg ist eine der eigenartigsten und faszinierendsten Bierspezialitäten der Welt. Das malzige Raucharoma stammt aus dem Darren der Gerste über offenem Buchenholzfeuer. Im historischen Gasthof mit gotischen Gewölben wird das Bier direkt vom Holzfass ausgeschenkt.",
    note: "UNESCO-Kulturerbe-Region",
    color: "border-accent/40",
  },
  {
    name: "Brauhaus Spandau",
    region: "Berlin",
    founded: "1993",
    style: "Berliner Weiße, Pils",
    description:
      "Im historischen Spandauer Altstadt-Zentrum betreibt das Brauhaus Spandau eine lebendige Hausbrauerei im Stile der alten Berliner Gasthausbrauereien. Das unfiltrierte Kellerbier und die Berliner Weiße mit Schuss sind Berliner Klassiker, die hier authentisch zelebriert werden.",
    note: "Stadtbrauerei",
    color: "border-primary/40",
  },
  {
    name: "Brauerei Hellers",
    region: "Köln",
    founded: "1991",
    style: "Kölsch",
    description:
      "Kölsch darf laut Kölsch-Konvention nur in Köln und Umgebung gebraut werden. Im Brauhaus Hellers wird dieser helle, obergärige Bierstil nach strenger kölscher Tradition gepflegt. Serviert wird er ausschließlich im schlanken 0,2-Liter-Glas, dem Kölschglas — vom laufenden Köbes (Kellner) bis der Gast seinen Bierdeckel auflegt.",
    note: "Geschützte Ursprungsbezeichnung",
    color: "border-accent/40",
  },
  {
    name: "Hausbrauerei Zum Schlüssel",
    region: "Düsseldorf",
    founded: "1850",
    style: "Altbier",
    description:
      "Düsseldorfs Altbier ist der Gegenspieler zum Kölsch — dunkler, malziger, mit leicht bitterem Abgang. Das Altbier ist ein obergäriges Bier, das kalt gegärt und gelagert wird. Im historischen Stammhaus wird nach überlieferter Rezeptur gebraut, und die kupferfarbene Flüssigkeit direkt vom Tank aus dem Holzfass gezapft.",
    note: "Jahrhundertealte Tradition",
    color: "border-primary/40",
  },
  {
    name: "Weissenbrunn Kräuterbier",
    region: "Thüringen",
    founded: "1734",
    style: "Kräuterbier, Landbier",
    description:
      "Eine Seltenheit in der deutschen Brauwelt: Bierspezialitäten, die mit traditionellen Heilkräutern verfeinert werden — bevor der Hopfen zur Norm wurde. Diese altertümliche Tradition des Grut-Biers lebt in einigen kleinen Thüringer Brauereien weiter. Wermut, Schafgarbe und Beifuß verleihen diesen Bieren einen bitteren, aromatischen Charakter.",
    note: "Historisches Grut-Bier",
    color: "border-accent/40",
  },
]

const bars = [
  {
    name: "Die Kräuterstube",
    city: "München",
    type: "Spezialisierte Bitter-Bar",
    description: "Eine thematische Bar, die sich ausschließlich deutschen Digestiven, Kräuterlikören und Schnapsspezialitäten widmet. Das Sortiment umfasst über 80 regionale Kräuterbitters aus allen Teilen Deutschlands.",
  },
  {
    name: "Altes Brauhaus zur Eiche",
    city: "Hamburg",
    type: "Historisches Brauhaus",
    description: "Eines der ältesten noch betriebenen Brauhäuser Hamburgs, in dem neben selbst gebrautem Bier auch eine kuratierte Auswahl norddeutscher Kräuterschnäpse angeboten wird.",
  },
  {
    name: "Schwarzwälder Kräuter-Keller",
    city: "Freiburg",
    type: "Kräuterbar & Gewölbekeller",
    description: "Im historischen Gewölbekeller der Freiburger Altstadt werden Schwarzwälder Kräuterliköre und regionale Digestive in einer stimmungsvollen Atmosphäre aus Sandstein und Holzbalken serviert.",
  },
  {
    name: "Botanische Bar Unter den Linden",
    city: "Berlin",
    type: "Modern-Botanische Bar",
    description: "Eine moderne Bar im Herzen Berlins, die klassische deutsche Bitter-Tradition mit zeitgenössischer Barkultur verbindet. Saisonale Kräuterzubereitungen und hauseigene Bitter-Infusionen stehen im Mittelpunkt.",
  },
]

export default function BierBarsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bier-section.jpg"
            alt="Deutsches Brauhaus Interieur"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">


          <div className="inline-block mb-6 px-4 py-2 bg-muted/40 border border-border/50 rounded text-xs text-muted-foreground">
            <span className="text-primary font-semibold">18+</span> — Nur für Erwachsene. Kein Alkoholverkauf auf dieser Seite.
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance leading-tight">
            Lokales Bier,<br />
            <span className="text-primary">Bars &amp; Brauereien</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Deutschland beherbergt eine der vielfältigsten Bier- und Trinkkulturen der Welt.
            Von alten Klosterbrauereien bis zu modernen Craft-Bierlokalen —
            hier findest du die schönsten Plätze der deutschen Brauhauskultur.
          </p>
        </div>
      </section>

      {/* Brauereien */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Historische <span className="text-primary">Brauereien</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Einige der bedeutendsten Braustätten Deutschlands — Kulturdenkmäler und lebendige Tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {breweries.map((b) => (
              <article
                key={b.name}
                className={`border ${b.color} bg-card rounded p-6 group hover:bg-card/80 transition-colors`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs border border-primary/30 rounded-full px-3 py-1 text-primary tracking-wide block mb-2">
                      {b.note}
                    </span>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                      {b.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block text-primary font-serif text-2xl font-bold leading-none">{b.founded}</span>
                    <span className="block text-muted-foreground text-xs tracking-widest mt-1">Gegründet</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary" />
                    {b.region}
                  </span>
                  <span className="flex items-center gap-1">
                    <Beer className="w-3 h-3 text-primary" />
                    {b.style}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </article>
            ))}
          </div>

          {/* Bars */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Empfehlenswerte <span className="text-primary">Bars &amp; Lokale</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Orte, an denen Kräuterbitter und Bierkultur auf authentischste Weise gelebt werden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bars.map((bar) => (
              <article
                key={bar.name}
                className="border border-border bg-card rounded p-6 group hover:border-primary/40 transition-colors"
              >
                <span className="text-xs border border-accent/40 rounded-full px-3 py-1 text-accent tracking-wide block mb-3 w-fit">
                  {bar.type}
                </span>
                <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                  {bar.name}
                </h3>
                <div className="flex items-center gap-1 mb-4 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>{bar.city}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{bar.description}</p>
              </article>
            ))}
          </div>

          {/* Info block */}
          <div className="mt-16 border border-border rounded p-8 bg-card">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-xl text-foreground">Bier &amp; Kräuterbitter — eine natürliche Verbindung</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lange bevor Hopfen als Standardzutat im Bier etabliert wurde, verwendeten mittelalterliche Brauer
              eine Mischung aus Kräutern — das sogenannte <em className="text-foreground">Grut</em> — zur Bitterung und Konservierung.
              Wermut, Schafgarbe, Gagel und andere Botanicals prägten den Geschmack des mittelalterlichen Bieres.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Diese Tradition lebt heute in der engen kulturellen Verbindung zwischen deutschen Kräuterlikören
              und Bierspezialitäten fort. In vielen Brauereigasthäusern werden Kräuterbitters als Begleiter zum Bier oder
              als Nachtrunk serviert — eine Praxis, die sich über Jahrhunderte gehalten hat.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
