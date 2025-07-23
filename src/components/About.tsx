import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, number: "150+", label: "Happy Clients" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: TrendingUp, number: "300%", label: "Average Growth" },
  ];

  const values = [
    "Data-driven strategies that deliver measurable results",
    "Creative campaigns that capture attention and drive action",
    "Transparent reporting with real-time performance insights",
    "24/7 support from dedicated marketing experts",
    "Scalable solutions that grow with your business"
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="fade-in">
            <Badge variant="outline" className="mb-6 px-4 py-2 text-sm border-accent/30 text-accent">
              About Our Agency
            </Badge>
            
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              We're <span className="text-gradient-accent">Digital Innovators</span> Obsessed with Results
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over 8 years, we've been helping businesses transform their digital presence through innovative marketing strategies. Our team combines creative excellence with data-driven insights to deliver campaigns that don't just look great—they perform.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg" className="text-lg px-8 py-4 h-auto">
              Learn More About Us
            </Button>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Main Stats Card */}
              <div className="service-card p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
                    Our Impact by Numbers
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {achievements.map((achievement, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-4 rounded-lg bg-background/50 slide-up"
                        style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                      >
                        <div className="p-3 rounded-lg bg-primary/10">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gradient-primary">
                            {achievement.number}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {achievement.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 float"></div>
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-primary rounded-full opacity-10 float"
                style={{ animationDelay: '-2s' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;