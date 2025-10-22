import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SuccessStoriesPage() {
  const testimonials = [
    {
      name: "Nyamuhaki Denis",
      role: "Student",
      location: "Now in Denmark",
      quote:
        "Hapworth International transformed my career. I was stuck with tuition fees for my diploma in Animal Husbandry. After consultations from their staff, I succeeded in achieving a paid agricultural internship. I'm soon finishing my internship, and with enough money saved, I can complete my studies and start my own commercial modern farm with skills learned. Thank you, Hapworth International!",
      image: "/african-woman-software-engineer.png",
    },
    {
      name: "Abiranga Hassan",
      role: "Student",
      location: "Now in Norway",
      quote:
        "I was ovewhelmed by the process of moving abroad to study, but Hapworth International made it seamless. Their personalized approach and attention to detail gave me confidence throught my journey. Iam really greatful to the staff.",
      image: "/professional-african-man-healthcare-worker.jpg",
    },
    {
      name: "Lubega Micheal",
      role: "Nurse",
      location: "Now in Canada",
      quote:
        "The team of Hapworth International guided me through every step from preperation to visa processing. I recently acquired a work visa to work in a hospital in Torornto. Special thanks to their team for expertise and generous customer experience.",
      image: "/professional-african-woman-business-analyst.jpg",
    },
    {
      name: "Ssebagala Caleb",
      role: "Agricultural Student",
      location: "Now in Denmark",
      quote:
        "The paid internship program opened doors I never thought possible. I had applied on my own for over a year, used other agencies but was frustrated. Until, I got in touch with hapworth international who hepled me in less than 5 months. From this paid agricultural internship in Denmark for 18 months, I now will learn alot of skill to bring back to my country Uganda.",
      image: "/professional-african-man-engineer.jpg",
    },
    {
      name: "Otieno Michael",
      role: "Employee",
      location: "Now in Netherlands",
      quote:
        "From CV preperation, IELTs training to contract Negotiation, Hapworth International exceeded my expectations. I'm now working in a food processing plant in Netherlands from neing an intern in a dairy farm. i have managed to build a career and a great life.",
      image: "/professional-african-woman-marketing-specialist.jpg",
    },
    {
      name: "Nankinga Louise",
      role: "Student",
      location: "Now in Switzerland",
      quote:
        "Hapworth International didn't just help me find a job - they helped me build a career in Europe that i thought i had lost back at home. With Savings from my Job as a waitress in an expensive restaurant, I have enrolled to study in a prestigious university. The Comprehensive support and genuine care for my success made all the difference.",
      image: "/african-data-scientist.png",
    },
  ]

  const stats = [
    { value: "500+", label: "Successful Placements" },
    { value: "20+", label: "Countries Worldwide" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "Commitment to Excellence" },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hapworth International",
    url: "https://hapworthinternational.com/success-stories",
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Success Stories</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Real people, real transformations, real opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <Quote className="text-primary mb-4 md:mb-6" size={32} />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg md:text-xl flex-shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs md:text-sm text-gray-400 font-medium">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-balance">
              Your Success Is Our Mission
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10 text-pretty">
              Every success story starts with a single step. These professionals trusted us with their dreams, and we
              helped them turn those dreams into reality. Whether you're seeking your first international opportunity or
              looking to advance your global career, we're here to guide you every step of the way.
            </p>
            <div className="space-y-4 md:space-y-6 text-left max-w-2xl mx-auto">
              {[
                "Personalized career guidance tailored to your goals",
                "Comprehensive support from application to placement",
                "Access to exclusive international opportunities",
                "Ongoing support even after placement",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ArrowRight size={14} />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <Card className="bg-primary text-primary-foreground border-0 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-balance">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
                Join the hundreds of professionals who have transformed their careers with Hapworth International
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="ml-2" size={20} />
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
