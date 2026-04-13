import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Beer } from "lucide-react"

const stats = [
  { label: "Brauereien", value: "1.500+" },
  { label: "Regionen", value: "16" },
  { label: "Bierstile", value: "40+" },
]

export default function BierBarsSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Beer className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-serif">
                Brauhauskultur
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
              Lokales Bier,<br />
              <span className="text-primary">legendäre Bars &amp;</span><br />
              Brauereien
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
              Wo Kräuterbitter zuhause ist, ist auch das Bier nicht weit. Deutschland beherbergt
              über 1.500 aktive Brauereien und eine lebendige Barkultur, in der Bier und Bitter
              seit je her Hand in Hand gehen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              In Bierkellern Frankens, Brauhäusern Münchens und gemütlichen Kneipen Berlins —
              entdecke die Orte, an denen die Tradition lebt und gepflegt wird.
              Einige der schönsten Brauereistätten Deutschlands sind wahre Kulturdenkmäler.
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
              href="/bier-bars"
              className="inline-flex items-center gap-2 text-primary font-serif text-sm tracking-widest uppercase border-b border-primary/40 pb-1 hover:border-primary transition-colors"
            >
              Bier &amp; Bars erkunden
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 rounded" />
            <Image
              src="/images/bier-section.jpg"
              alt="Deutsches Brauhaus mit Bierkrügen und traditioneller Atmosphäre"
              width={600}
              height={500}
              className="w-full h-[500px] object-cover rounded relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
