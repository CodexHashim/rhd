import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Cpu, Globe2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Transforming Ideas into Digital Reality
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            RH Dynamics delivers innovative software solutions that drive business growth
            and digital transformation.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <Globe2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-muted-foreground">
                Custom web applications and responsive websites built with modern technologies.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Software Solutions</h3>
              <p className="text-muted-foreground">
                Tailored software solutions to streamline your business processes.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <Cpu className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-muted-foreground">
                End-to-end digital transformation services for modern enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}