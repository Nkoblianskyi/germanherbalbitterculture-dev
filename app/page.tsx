import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import HeroSection from "@/components/home/hero-section"
import FeaturedProductSection from "@/components/home/featured-product-section"
import BittersOverviewSection from "@/components/home/bitters-overview-section"
import BierBarsSection from "@/components/home/bier-bars-section"
import AboutPreviewSection from "@/components/home/about-preview-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedProductSection />
      <BittersOverviewSection />
      <BierBarsSection />
      <AboutPreviewSection />
      <Footer />
      <CookieBanner />
    </div>
  )
}
