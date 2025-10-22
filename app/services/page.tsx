import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Briefcase, FileText, Car, GraduationCap, FileCheck, Plane, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hapworth International",
    url: "https://hapworthinternational.com/services",
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

  const services = [
    {
      icon: UserPlus,
      title: "Enrollment & Career Guidance",
      description:
        "Begin your journey with personalized career counseling. We assess your skills, aspirations, and goals to match you with the perfect international opportunity.",
      features: [
        "One-on-one career consultation",
        "Skills assessment and evaluation",
        "Program matching and recommendations",
        "Career pathway planning",
      ],
    },
    {
      icon: Briefcase,
      title: "Paid Internships Abroad",
      description:
        "Access exclusive paid internship opportunities in leading companies worldwide. Gain valuable international work experience while earning competitive compensation.",
      features: [
        "Curated internship opportunities",
        "Competitive compensation packages",
        "Industry-specific placements",
        "Professional development support",
      ],
    },
    {
      icon: FileText,
      title: "Passport Acquisition",
      description:
        "Navigate the passport application process with ease. We provide comprehensive support to ensure you obtain your travel documents efficiently.",
      features: [
        "Application guidance and support",
        "Document preparation assistance",
        "Process tracking and updates",
        "Expedited service options",
      ],
    },
    {
      icon: FileCheck,
      title: "Professional CV Services",
      description:
        "Stand out with a professionally crafted CV tailored to international standards. We highlight your strengths and achievements to maximize your opportunities.",
      features: [
        "International CV formatting",
        "ATS-optimized content",
        "Industry-specific customization",
        "Cover letter writing",
      ],
    },
    {
      icon: Car,
      title: "Driver's License Support",
      description:
        "Obtain your driver's license with our comprehensive support services. We guide you through the entire process from application to testing.",
      features: [
        "Application process guidance",
        "Test preparation resources",
        "International license conversion",
        "Documentation assistance",
      ],
    },
    {
      icon: GraduationCap,
      title: "IELTS Classes & Certification",
      description:
        "Achieve your target IELTS score with our expert-led preparation classes. We provide comprehensive training and certification support.",
      features: [
        "Expert instructors and tutors",
        "Comprehensive study materials",
        "Practice tests and assessments",
        "Certification guidance",
      ],
    },
    {
      icon: FileCheck,
      title: "Contract Acquisition",
      description:
        "Secure employment contracts with reputable international employers. We negotiate on your behalf to ensure fair terms and conditions.",
      features: [
        "Contract negotiation support",
        "Legal review and guidance",
        "Terms and conditions verification",
        "Employment rights protection",
      ],
    },
    {
      icon: Globe,
      title: "Visa Services",
      description:
        "Navigate complex visa requirements with confidence. Our experienced team handles your visa application from start to finish.",
      features: ["Visa type consultation", "Application preparation", "Document verification", "Interview preparation"],
    },
    {
      icon: Plane,
      title: "International Travel Arrangements",
      description:
        "Enjoy seamless travel arrangements to your destination. We handle all logistics to ensure a smooth transition to your new opportunity.",
      features: [
        "Flight booking and coordination",
        "Accommodation arrangements",
        "Airport transfers",
        "Pre-departure orientation",
      ],
    },
  ]

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Comprehensive solutions to launch your international career
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid gap-8 md:gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 text-primary">
                      <service.icon size={24} className="md:w-8 md:h-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-3 md:mb-4">{service.title}</CardTitle>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-0 md:ml-[88px]">
                    <h4 className="font-semibold mb-3 text-sm md:text-base">Key Features:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 md:gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <div className="inline-flex items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href="/APPLICATION FORM - HAPWORTH INTERNATIONAL.docx" download aria-label="Download application form">
                  Download Application Form
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <Card className="bg-primary text-primary-foreground border-0 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-balance">Ready to Get Started?</h2>
              <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
                Contact us today to discuss your career goals and learn how we can help you achieve them
              </p>
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contact">
                  Contact Us Now <ArrowRight className="ml-2" size={20} />
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
