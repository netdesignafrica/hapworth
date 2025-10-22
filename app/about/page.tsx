import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Eye, Handshake, Heart } from "lucide-react"

export default function AboutPage() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hapworth International",
    url: "https://hapworthinternational.com/about",
    logo: "https://hapworthinternational.com/logo.jpg",
    sameAs: [
      "https://instagram.com/hapworthinternational",
      "https://facebook.com/hapworthinternational",
      "https://x.com/Hapworth_Int?t=F3VAhXhdGLUHZnjm5hyydA&s=09",
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
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">
              About Hapworth International
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Building bridges between African talent and global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary mb-4 md:mb-6">
                <Shield size={24} className="md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We empower African talent by connecting them with sustainable and rewarding career opportunities abroad,
                fostering personal growth, economic advancement, and global impact.
              </p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 text-accent mb-4 md:mb-6">
                <Eye size={24} className="md:w-8 md:h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                To be the leading bridge that connects Africa to the world of work, ensuring that no talent is left
                behind in the global economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">Our Core Values</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Ethics",
                description:
                  "We uphold honesty, transparency, and fairness in every process, ensuring ethical recruitment and placement.",
              },
              {
                icon: Eye,
                title: "Transparency",
                description:
                  "We take responsibility for our actions and are committed to the success and safety of our clients.",
              },
              {
                icon: Handshake,
                title: "Partnership",
                description:
                  "We build strong, reliable relationships with international employers, training institutions, and communities to create sustainable opportunities.",
              },
              {
                icon: Heart,
                title: "Community Impact",
                description:
                  "We work not only for individual success but also to uplift families and communities through job creation and knowledge transfer.",
              },
            ].map((value, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 md:p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 text-primary mb-4 md:mb-6">
                    <value.icon size={24} className="md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-balance">
              Why Choose Hapworth International?
            </h2>
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: "Proven Track Record",
                  description:
                    "With hundreds of successful placements, we have established ourselves as a trusted partner in international career development.",
                },
                {
                  title: "Comprehensive Support",
                  description:
                    "From initial consultation to post-placement follow-up, we provide end-to-end support throughout your journey.",
                },
                {
                  title: "Global Network",
                  description:
                    "Our extensive network of international employers and institutions opens doors to opportunities across the globe.",
                },
                {
                  title: "Personalized Approach",
                  description:
                    "We understand that every career journey is unique, and we tailor our services to meet your specific needs and aspirations.",
                },
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-primary pl-6 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
