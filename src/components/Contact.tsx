import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: "123 Digital Avenue, Marketing District, NY 10001",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@digitalagency.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9AM-6PM EST",
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-accent/30">
            Get In Touch
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            Ready to <span className="text-gradient-accent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals. Our team is ready to create a custom strategy just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="service-card fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Company</label>
                <Input placeholder="Your Company Name" className="bg-background/50" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">How can we help?</label>
                <Textarea 
                  placeholder="Tell us about your project and goals..."
                  className="bg-background/50 min-h-[120px]"
                />
              </div>
              
              <Button variant="gradient" size="lg" className="w-full text-lg py-4 h-auto">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Get in touch today</h3>
              <p className="text-muted-foreground text-lg">
                We're here to help you succeed. Reach out through any of these channels and let's start building your digital success story.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="service-card p-6 slide-up"
                  style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="service-card p-8 mt-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-accent opacity-5"></div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2 text-gradient-accent">
                  Free Strategy Consultation
                </h4>
                <p className="text-muted-foreground mb-4">
                  Book a 30-minute call with our experts to discuss your goals and get actionable insights.
                </p>
                <Button variant="accent" size="lg">
                  Book Free Consultation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;