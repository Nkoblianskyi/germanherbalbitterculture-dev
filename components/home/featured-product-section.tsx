import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

const stats = [
  { label: "Kräuter", value: "40+" },
  { label: "Reifezeit", value: "6 Mon." },
  { label: "Max. Stärke", value: "44%" },
]

export default function FeaturedProductSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 rounded" />
            <Image
              src="/images/featured-bitter.jpg"
              alt="Hochwertiger Kräuterlikör bis 44% Vol. — das Stärkste der deutschen Bitter-Tradition"
              width={600}
              height={700}
              className="w-full h-[500px] object-cover rounded relative z-10"
            />
            <div className="absolute top-6 right-6 z-20 bg-background/90 backdrop-blur border border-primary rounded px-4 py-3 text-center">
              <span className="block text-primary font-serif text-3xl font-bold leading-none">44%</span>
              <span className="block text-muted-foreground text-xs tracking-widest uppercase mt-1">Vol. max.</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-serif">
                Schwarzwald · Deutschland
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
              Der stärkste<br />
              <span className="text-primary">Kräuterlikör</span><br />
              Deutschlands
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
              Mit einer Maximalstärke von <strong className="text-foreground">44&nbsp;% Vol.</strong> verkörpern
              die kraftvollsten deutschen Kräuterliköre eine jahrhundertealte Destillationskunst.
              Aus über 40 sorgfältig ausgewählten Kräutern, Wurzeln und Gewürzen hergestellt —
              darunter Enzian, Wermut, Angelikawurzel und Anis.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Im Schwarzwald und in Bayern verwurzelt, bezieht diese Tradition ihre Kraft aus
              dem uralten Wissen der Kräuterkundigen und der reinen Natur der deutschen Mittelgebirge.
              Jede Rezeptur ist ein streng gehütetes Familiengeheimnis.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((item) => (
                <div key={item.label} className="border border-border rounded p-4 text-center bg-card">
                  <span className="block text-primary font-serif text-2xl font-bold">{item.value}</span>
                  <span className="block text-muted-foreground text-xs tracking-widest uppercase mt-1">{item.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/kraeuterbitter"
              className="inline-flex items-center gap-2 text-primary font-serif text-sm tracking-widest uppercase border-b border-primary/40 pb-1 hover:border-primary transition-colors"
            >
              Alle Bitters entdecken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
