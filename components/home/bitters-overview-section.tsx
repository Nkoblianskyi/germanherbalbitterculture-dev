import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Droplets, MapPin } from "lucide-react"

const bitterTypes = [
  {
    name: "Kräuterlikör",
    abv: "bis 44% Vol.",
    description:
      "Vielschichtige Likörkomposition aus Wurzeln, Rinden und Kräutern. Harmonisch in der Balance zwischen Süße und Bitterkeit.",
    region: "Bundesweit",
    color: "border-primary/40",
  },
  {
    name: "Magenbitter",
    abv: "bis 40% Vol.",
    description:
      "Traditionell nach dem Essen genossen — fördert die Verdauung mit Enzian, Wermut und Anis.",
    region: "Bayern & Franken",
    color: "border-accent/40",
  },
  {
    name: "Alpenbitter",
    abv: "bis 38% Vol.",
    description:
      "Aus den Alpenregionen stammend, mit Bergkräutern wie Arnika, Latschenkiefer und Enzian zubereitet.",
    region: "Alpenregion",
    color: "border-primary/40",
  },
  {
    name: "Wurzelbitter",
    abv: "bis 35% Vol.",
    description:
      "Basiert auf Wurzelauszügen wie Angelika, Kalmuswurzel und Enzianwurzel — erdige Tiefe mit langer Nachbitterung.",
    region: "Schwarzwald",
    color: "border-accent/40",
  },
]

export default function BittersOverviewSection() {
  return (
    <section className="py-24 px-6 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/kraeuter-section.jpg"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-accent/40 rounded-full px-4 py-1.5 mb-6">
            <Droplets className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent text-xs tracking-[0.2em] uppercase font-serif">
              Botanische Vielfalt
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Deutsche Kräuterbitter —{" "}
            <br />
            <span className="text-primary">Ein botanisches Erbe</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
            Von milden Digestiven bis zu kraftvollen Alpenbitters — die Vielfalt der deutschen
            Kräuterliköre spiegelt Jahrhunderte botanischen Wissens wider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {bitterTypes.map((bitter) => (
            <div
              key={bitter.name}
              className={`border ${bitter.color} bg-background/60 backdrop-blur rounded p-6 hover:bg-background/80 transition-colors group`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                  {bitter.name}
                </h3>
                <span className="text-xs border border-primary/30 rounded-full px-3 py-1 text-primary tracking-wide">
                  {bitter.abv}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {bitter.description}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
                <MapPin className="w-3 h-3" />
                <span>{bitter.region}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/kraeuterbitter"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm tracking-widest uppercase font-serif hover:bg-primary/90 transition-colors"
          >
            Alle Sorten entdecken
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
