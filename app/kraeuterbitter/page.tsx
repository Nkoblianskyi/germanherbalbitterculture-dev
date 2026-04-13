import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import { MapPin, Leaf, Droplets } from "lucide-react"

const varieties = [
  {
    name: "Kräuterlikör",
    abv: "bis 44% Vol.",
    category: "Stark",
    region: "Deutschlandweit",
    herbs: ["Enzian", "Wermut", "Angelika", "Kümmel", "Anis", "Baldrian"],
    description:
      "Der Kräuterlikör ist die Königsklasse unter den deutschen Kräuterbitters. Mit bis zu 44 % Vol. vereint er Dutzende sorgfältig ausgewählter Kräuter, Wurzeln und Gewürze. Die Mazerierung dauert oft mehrere Monate, bevor das Destillat zur Ruhe kommt und seinen vollen Charakter entwickelt. Die Balance zwischen Süße, Bitterkeit und ätherischen Ölen macht ihn einzigartig.",
    history:
      "Die Tradition der Kräuterliköre reicht bis ins Mittelalter zurück, als Klosterbrüder Heilpflanzen in Alkohol ansetzten. Im 18. Jahrhundert begannen erste kommerzielle Hersteller in Bayern und Thüringen mit der Produktion für die Öffentlichkeit.",
    color: "border-primary",
    badge: "bg-primary/10 text-primary border-primary/40",
  },
  {
    name: "Magenbitter",
    abv: "bis 40% Vol.",
    category: "Digestiv",
    region: "Bayern & Franken",
    herbs: ["Enzian", "Wermut", "Anis", "Koriander", "Kardamom"],
    description:
      "Der Magenbitter ist für seine verdauungsfördernde Wirkung bekannt und wird traditionell nach dem Essen als Digestif genossen. Seine medizinische Wirksamkeit wurde seit dem 19. Jahrhundert von Apothekern und Botanikern dokumentiert. Der bittere Geschmack regt die Gallenproduktion an und erleichtert die Verdauung.",
    history:
      "Ursprünglich in Apotheken verkauft, entwickelte sich der Magenbitter im 19. Jahrhundert zum Volksgetränk in Bayern und Franken. Lokale Brennereien übernahmen die Rezepturen der Apotheker und verfeinerten sie über Generationen.",
    color: "border-accent",
    badge: "bg-accent/10 text-accent border-accent/40",
  },
  {
    name: "Alpenbitter",
    abv: "bis 38% Vol.",
    category: "Regional",
    region: "Alpenregion (Bayern, Österreich)",
    herbs: ["Latschenkiefer", "Arnika", "Enzian", "Alpenrose", "Zirbe"],
    description:
      "Alpenbitter zeichnen sich durch die Verwendung hochalpiner Kräuter aus, die in Höhenlagen ab 1.000 Meter gesammelt werden. Die reine Bergluft und die kurze Wachstumszeit verleihen diesen Pflanzen eine besonders intensive Aromatik. Alpenbitter sind oft etwas weniger süß als andere Kräuterliköre und betonen die herbe, würzige Seite.",
    history:
      "Die Tradition der Alpenbitter entstand in den Bergdörfern der Alpen, wo Jäger und Hirten Kräuterschnäpse als Stärkungsmittel für lange Bergtouren nutzten. Heute sind diese Traditionen in Tirol, Oberbayern und Vorarlberg lebendig geblieben.",
    color: "border-primary",
    badge: "bg-primary/10 text-primary border-primary/40",
  },
  {
    name: "Wurzelbitter",
    abv: "bis 35% Vol.",
    category: "Traditionell",
    region: "Schwarzwald & Thüringen",
    herbs: ["Angelikawurzel", "Kalmuswurzel", "Enzianwurzel", "Süßholz", "Baldrian"],
    description:
      "Wurzelbitters basieren hauptsächlich auf alkoholischen Auszügen verschiedener Pflanzenwurzeln. Diese verleihen dem Getränk eine tiefe, erdige Basis mit langer Nachbitterung. Die Extraktion aus Wurzeln erfordert mehr Zeit als bei Blättern oder Blüten und liefert besonders intensive, komplexe Aromenprofile.",
    history:
      "Die Verwendung von Wurzeln als Heilmittel reicht bis in die germanische Volksmedizin zurück. Kräuterkundige und später Apotheker sammelten systematisch Wissen über die Wirkungen verschiedener Wurzeln und entwickelten daraus Rezepturen, die in alkoholischer Form besser haltbar waren.",
    color: "border-accent",
    badge: "bg-accent/10 text-accent border-accent/40",
  },
  {
    name: "Klosterbitter",
    abv: "bis 42% Vol.",
    category: "Historisch",
    region: "Klöster Deutschlands & Bayerns",
    herbs: ["Benediktenkraut", "Angelika", "Enzian", "Kamille", "Schafgarbe", "Salbei"],
    description:
      "Die älteste Form des deutschen Kräuterbitters hat ihren Ursprung in mittelalterlichen Klöstern. Mönche und Nonnen perfektionierten über Jahrhunderte die Kunst der Kräuterextraktion. Klosterbitters sind oft weniger kommerziell orientiert und betonen die therapeutische Wirkung vor dem Genuss.",
    history:
      "Benediktiner-, Franziskaner- und Augustinermönche bewahrten in ihren Klöstern das botanische Wissen der Antike. In Deutschland existieren noch heute Klöster, die nach überlieferten Rezepturen produzieren. Diese Tradition wurde als immaterielles Kulturerbe in Deutschland anerkannt.",
    color: "border-primary",
    badge: "bg-primary/10 text-primary border-primary/40",
  },
  {
    name: "Norddeutscher Schnitterbitter",
    abv: "bis 32% Vol.",
    category: "Regional",
    region: "Norddeutschland",
    herbs: ["Beifuß", "Wacholder", "Kümmel", "Dill", "Liebstöckel"],
    description:
      "Im Norden Deutschlands entwickelte sich eine eigene Bitter-Tradition, die stärker auf regionale Kräuter der norddeutschen Tiefebene und Küstenregion setzt. Diese Bitters sind oft milder und weniger süß als ihre süddeutschen Pendants, mit einem betonten Wacholder- und Kümmelcharakter.",
    history:
      "Die norddeutsche Bitter-Tradition entstand in enger Verbindung mit der Hansekultur des 14. und 15. Jahrhunderts. Handelsstädte wie Hamburg und Bremen importierten exotische Gewürze, die in lokale Kräuterrezepturen integriert wurden.",
    color: "border-accent",
    badge: "bg-accent/10 text-accent border-accent/40",
  },
]

export default function KraeuterbitterPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-44 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/kraeuter-section.jpg"
            alt="Getrocknete Kräuter und Wurzeln für Kräuterbitter"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          {/* 18+ disclaimer */}
          <div className="inline-block mb-6 px-4 py-2 bg-muted/40 border border-border/50 rounded text-xs text-muted-foreground">
            <span className="text-primary font-semibold">18+</span> — Alle Inhalte richten sich ausschließlich an Erwachsene.
            Kein Verkauf. Rein informativ.
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6 text-balance leading-tight">
            Deutsche <span className="text-primary">Kräuterbitter</span><br />
            — Sorten &amp; Stärken
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Von milden Digestiven bis zum kraftvollen 44%-Kräuterlikör — eine umfassende
            Übersicht der deutschen Kräuterbitter-Tradition mit ihren Regionen und botanischen Grundlagen.
          </p>
        </div>
      </section>

      {/* Varieties */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            {varieties.map((v, i) => (
              <article
                key={v.name}
                className={`border ${v.color} rounded bg-card p-8 group hover:bg-card/80 transition-colors`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className={`inline-block text-xs border rounded-full px-3 py-1 mb-3 tracking-wide ${v.badge}`}>
                      {v.category}
                    </span>
                    <h2 className="font-serif text-3xl text-foreground group-hover:text-primary transition-colors">
                      {v.name}
                    </h2>
                  </div>
                  <div className="text-right">
                    <div className="border border-primary/30 rounded px-5 py-3 text-center bg-background">
                      <span className="block text-primary font-serif text-3xl font-bold leading-none">{v.abv.split(" ")[0]}</span>
                      <span className="block text-muted-foreground text-xs tracking-widest uppercase mt-1">Vol. max.</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mb-5 text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{v.region}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="md:col-span-2">
                    <h3 className="text-primary text-xs tracking-widest uppercase font-serif mb-2">Beschreibung</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{v.description}</p>
                  </div>
                  <div>
                    <h3 className="text-primary text-xs tracking-widest uppercase font-serif mb-2">Typische Kräuter</h3>
                    <div className="flex flex-wrap gap-2">
                      {v.herbs.map((herb) => (
                        <span
                          key={herb}
                          className="inline-flex items-center gap-1 text-xs border border-border rounded-full px-3 py-1 text-muted-foreground bg-background"
                        >
                          <Leaf className="w-2.5 h-2.5 text-accent" />
                          {herb}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-primary text-xs tracking-widest uppercase font-serif mb-2">Geschichte &amp; Tradition</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{v.history}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  )
}
