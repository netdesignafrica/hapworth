import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, Users, Award, TrendingUp } from "lucide-react"
import Hero from "@/components/Hero"

export default function HomePage() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hapworth International",
    url: "https://hapworthinternational.com",
    logo: "https://hapworthinternational.com/logo.jpg",
    sameAs: [
      "https://instagram.com/hapworthinternational",
      "https://facebook.com/hapworthinternational",
      "https://x.com/hapworthinternational",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hapworthinternational@gmail.com",
        contactType: "customer support",
        areaServed: "Africa",
      },
    ],
  }
  
  return (
    <div className="min-h-screen">
      {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GD1P3N81MH" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-GD1P3N81MH');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Globe, label: "Global Reach", value: "20+", subtitle: "Countries" },
              { icon: Users, label: "Clients Served", value: "500+", subtitle: "Professionals" },
              { icon: Award, label: "Success Rate", value: "95%", subtitle: "Placement" },
              { icon: TrendingUp, label: "Career Growth", value: "100%", subtitle: "Commitment" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-3 md:mb-4">
                  <stat.icon size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We empower African talent by connecting them with sustainable and rewarding career opportunities
                  abroad, fostering personal growth, economic advancement, and global impact.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading bridge that connects Africa to the world of work, ensuring that no talent is left
                  behind in the global economy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
              Comprehensive Career Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From enrollment to international placement, we guide you every step of the way
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Enrollment & Guidance",
                description: "Personalized career counseling and program enrollment assistance",
              },
              {
                title: "Paid Internships Abroad",
                description: "Access to rewarding international internship opportunities",
              },
              {
                title: "Document Services",
                description: "Passport acquisition, CV preparation, and driver's license support",
              },
              {
                title: "IELTS Preparation",
                description: "Comprehensive classes and certification assistance",
              },
              {
                title: "Contract & Visa Services",
                description: "Contract acquisition and visa application support",
              },
              {
                title: "Global Travel",
                description: "End-to-end travel arrangements and logistics",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 lg:p-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
                Ready to Start Your Global Career?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 md:mb-10 max-w-2xl mx-auto text-pretty">
                Join hundreds of professionals who have transformed their careers with Hapworth International
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contact">
                  Contact Us Today <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
