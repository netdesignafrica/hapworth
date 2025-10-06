import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SuccessStoriesPage() {
  const testimonials = [
    {
      name: "Amara Okafor",
      role: "Software Engineer",
      location: "Now in Germany",
      quote:
        "Hapworth International transformed my career. Within 6 months, I went from searching for opportunities to working at a leading tech company in Berlin. Their support was invaluable.",
      image: "/african-woman-software-engineer.png",
    },
    {
      name: "Kwame Mensah",
      role: "Healthcare Professional",
      location: "Now in Canada",
      quote:
        "The team at Hapworth guided me through every step - from IELTS preparation to visa processing. I'm now working in my dream hospital in Toronto, and it's all thanks to their expertise.",
      image: "/professional-african-man-healthcare-worker.jpg",
    },
    {
      name: "Fatima Hassan",
      role: "Business Analyst",
      location: "Now in United Kingdom",
      quote:
        "I was overwhelmed by the process of moving abroad, but Hapworth made it seamless. Their personalized approach and attention to detail gave me confidence throughout my journey.",
      image: "/professional-african-woman-business-analyst.jpg",
    },
    {
      name: "Chidi Nwosu",
      role: "Mechanical Engineer",
      location: "Now in Australia",
      quote:
        "From CV preparation to contract negotiation, Hapworth International exceeded my expectations. I'm now working on exciting projects in Sydney and building a great life here.",
      image: "/professional-african-man-engineer.jpg",
    },
    {
      name: "Zainab Kamara",
      role: "Marketing Specialist",
      location: "Now in United States",
      quote:
        "The paid internship program opened doors I never thought possible. What started as a 6-month internship turned into a full-time position at a Fortune 500 company in New York.",
      image: "/professional-african-woman-marketing-specialist.jpg",
    },
    {
      name: "Tunde Adeyemi",
      role: "Data Scientist",
      location: "Now in Netherlands",
      quote:
        "Hapworth International didn't just help me find a job - they helped me build a career. The comprehensive support and genuine care for my success made all the difference.",
      image: "/african-data-scientist.png",
    },
  ]

  const stats = [
    { value: "500+", label: "Successful Placements" },
    { value: "20+", label: "Countries Worldwide" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "Commitment to Excellence" },
  ]

  return (
    <div className="min-h-screen">
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
                      <div className="text-xs md:text-sm text-accent font-medium">{testimonial.location}</div>
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
