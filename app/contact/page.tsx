"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, Instagram, Facebook, X } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  // Set your company's WhatsApp number (international format, no +)
  // Example for a Ugandan number: '256759259569'
  const WHATSAPP_NUMBER = "256759259569"

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic validation for required fields (name, email, message)
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill in your name, email and message before sending.")
      return
    }

    setIsSending(true)

    try {
      // First, POST the message to our server-side stub/api
      const resp = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!resp.ok) {
        const err = await resp.text()
        console.error("send-whatsapp error:", err)
        alert("Failed to send message to server. Please try again later.")
        return
      }

      // Compose a readable message for WhatsApp
      const lines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.phone ? `Phone: ${formData.phone}` : null,
        formData.service ? `Service: ${formData.service}` : null,
        "",
        `Message:`,
        `${formData.message}`,
      ].filter(Boolean)

      const text = encodeURIComponent(lines.join("\n"))

      // Build WhatsApp URL. If WHATSAPP_NUMBER is empty, the link opens WhatsApp Web/APP with the message only.
      const base = WHATSAPP_NUMBER
        ? `https://api.whatsapp.com/send?phone=${encodeURIComponent(WHATSAPP_NUMBER)}&text=${text}`
        : `https://api.whatsapp.com/send?text=${text}`

      // Open WhatsApp in a new tab/window. Mobile devices will open the app if available.
      const opened = window.open(base, "_blank")
      if (!opened) {
        // Popup blocked: show the link so user can copy it
        window.prompt("Copy this link to open WhatsApp:", base)
      }

      // Clear the form after attempting to open WhatsApp
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    } catch (err) {
      console.error("Failed to send message:", err)
      alert("Unable to send message. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />

        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-br from-primary/5 via-accent/5 to-background overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ready to start your international career journey? We're here to help
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6 md:space-y-8 min-w-0">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="md:w-6 md:h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-sm md:text-base">Email</h3>
                        <a href="mailto:hapworthinternational@gmail.com" className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors break-all">
                          hapworthinternational@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="md:w-6 md:h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-sm md:text-base">Location</h3>
                        <p className="text-sm md:text-base text-muted-foreground">Serving clients across Africa</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-muted/50 border-0">
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold mb-3 text-sm md:text-base">Office Hours</h3>
                    <div className="space-y-2 text-sm md:text-base text-muted-foreground">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>

                <div>
                  <h3 className="font-semibold mb-4 text-sm md:text-base">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/hapworthinternational" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center" aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="https://facebook.com/hapworthinternational" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center" aria-label="Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="https://x.com/hapworthinternational" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center" aria-label="X (Twitter)">
                      <X size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 min-w-0">
                <Card className="border-2 w-full">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Send Us a WhatsApp</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your email" required />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+256 xxx xxx xxxx" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service of Interest</Label>
                          <select id="service" name="service" value={formData.service} onChange={handleChange} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <option value="">Select a service</option>
                            <option value="enrollment">Enrollment & Guidance</option>
                            <option value="internships">Paid Internships Abroad</option>
                            <option value="passport">Passport Acquisition</option>
                            <option value="cv">CV Services</option>
                            <option value="license">Driver's License</option>
                            <option value="ielts">IELTS Classes</option>
                            <option value="contract">Contract Acquisition</option>
                            <option value="visa">Visa Services</option>
                            <option value="travel">Travel Arrangements</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your career goals and how we can help..." rows={6} required />
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white" disabled={isSending}>
                        Send Message <Send className="ml-2" size={18} />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How long does the process take?",
                    answer:
                      "The timeline varies depending on the service and destination country. On average, the complete process from enrollment to placement takes 3-6 months. We work efficiently to ensure timely processing while maintaining quality.",
                  },
                  {
                    question: "What are the costs involved?",
                    answer:
                      "Our fees vary based on the services you require. We offer transparent pricing with no hidden costs. Contact us for a detailed consultation and personalized quote based on your specific needs.",
                  },
                  {
                    question: "Do you guarantee job placement?",
                    answer:
                      "While we cannot guarantee placement, we have a 95% success rate. We work closely with reputable international employers and only present opportunities that match your qualifications and career goals.",
                  },
                  {
                    question: "What support do you provide after placement?",
                    answer:
                      "We provide ongoing support even after placement, including assistance with settling in, cultural adaptation, and career development. Our relationship doesn't end with placement - we're committed to your long-term success.",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="p-6">
                      <h3 className="text-lg md:text-xl font-semibold mb-3">{faq.question}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    )
  }

