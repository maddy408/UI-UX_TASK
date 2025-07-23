import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, 
  Share2, 
  Target, 
  BarChart3, 
  Search, 
  Mail 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Comprehensive social media strategies that build communities and drive engagement across all major platforms.",
      features: ["Content Strategy", "Community Management", "Paid Social Campaigns", "Analytics & Reporting"],
      badge: "Most Popular"
    },
    {
      icon: Megaphone,
      title: "Digital Advertising",
      description: "Data-driven advertising campaigns that maximize ROI through precise targeting and optimization.",
      features: ["Google Ads", "Facebook Ads", "Display Advertising", "Retargeting Campaigns"],
      badge: "High ROI"
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description: "Boost your organic visibility with strategic SEO and compelling content that converts.",
      features: ["Keyword Research", "On-Page SEO", "Content Creation", "Link Building"],
      badge: "Long-term Growth"
    },
    {
      icon: BarChart3,
      title: "Analytics & Optimization",
      description: "Deep insights and continuous optimization to ensure your campaigns perform at their peak.",
      features: ["Performance Tracking", "A/B Testing", "Conversion Optimization", "ROI Analysis"],
      badge: "Data-Driven"
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Develop a compelling brand presence that resonates with your target audience and drives loyalty.",
      features: ["Brand Positioning", "Visual Identity", "Voice & Messaging", "Brand Guidelines"],
      badge: "Creative"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Personalized email campaigns that nurture leads and drive conversions at every stage.",
      features: ["Campaign Design", "Automation", "Segmentation", "Performance Tracking"],
      badge: "High Conversion"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/30">
            Our Services
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            Complete <span className="text-gradient-primary">Digital Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From social media mastery to data-driven advertising, we provide end-to-end digital marketing services that scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="service-card relative overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-accent/20 text-accent border-accent/30"
                  >
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;