import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Kräuterbitter und Heilkräuter auf einem Holztisch"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-balance text-foreground leading-none mb-6 tracking-tight">
          Die Seele<br />
          <span className="text-primary">des Kräuterbitters</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Seit Jahrhunderten prägen Kräuterliköre und Magenbitter die deutsche Trinkkultur.
          Entdecke Rezepturen, Regionen und die botanische Kunst hinter jedem Tropfen —
          bis zu 44&nbsp;% Vol.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/kraeuterbitter"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm tracking-widest uppercase font-serif hover:bg-primary/90 transition-colors"
          >
            Bitters entdecken
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ueber-uns"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3.5 rounded text-sm tracking-widest uppercase font-serif hover:border-primary/50 transition-colors"
          >
            Über den Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
