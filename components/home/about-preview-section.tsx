import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf } from "lucide-react"

export default function AboutPreviewSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <Image
              src="/images/about-preview.jpg"
              alt="Traditioneller Kräuterbitter in einem deutschen Gewölbekeller"
              width={600}
              height={450}
              className="w-full h-[420px] object-cover rounded"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded" />
          </div>

          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <Leaf className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary text-xs tracking-[0.2em] uppercase font-serif">
                Über den Blog
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6 text-balance">
              Leidenschaft für<br />
              <span className="text-primary">botanische Kultur</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 text-lg">
              German Herbal Bitter Culture ist ein unabhängiger, rein informativer Blog,
              der sich der Dokumentation und Bewahrung des deutschen Kräuterbitter-Erbes widmet.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wir verkaufen keinen Alkohol. Wir teilen Wissen — über Geschichte, Botanik,
              Regionen und die Menschen hinter den Rezepturen.
            </p>
            <Link
              href="/ueber-uns"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded text-sm tracking-widest uppercase font-serif hover:bg-primary/90 transition-colors"
            >
              Mehr erfahren
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
