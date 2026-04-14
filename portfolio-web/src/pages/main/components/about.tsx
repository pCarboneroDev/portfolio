import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
    const experiencia = [
        {
        puesto: "Flutter developer",
        empresa: "M&L Apps S.L.",
        periodo: "March 2025 - June 2025",
        descripcion: "Development of a mobile app for users of the game Pokemon TCG pocket.",
        },
        {
        puesto: "Videogames developer",
        empresa: "Timber Films",
        periodo: "March 2023 - June 2023",
        descripcion: "Developer of the videogame Mencía. A never was tale.",
        },
    ];


      return (
    <section id="about" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Imagen */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border" data-aos="zoom-in">
              <img
                src="/profile.png"
                alt="About me"
                className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Columna derecha - Texto + Experiencia */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge variant="secondary" className="text-sm font-mono">
                About me
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Hi, I'm <span className="text-primary">Pablo Carbonero</span>
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground space-y-4">
                <p>
                  I'm a junior fullstack developer with a focus on mobile, web, and AI. 
                  I'm a perfectionist and resilient by nature — I pay close attention to detail and don't give up easily when facing challenges. 
                  Outside of coding, I love music and play the guitar, and I'm also an avid reader. 
                  For me, building apps and writing code goes hand in hand with creativity, curiosity, and continuous learning.
                </p>
                <p>
                  Feel free to explore my projects and get in touch if you want to collaborate or just say hi!
                </p>
              </div>
            </div>

            {/* Experiencia laboral */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Professional Experience
              </h3>
              <div className="space-y-4">
                {experiencia.map((exp, index) => (
                  <div key={index} data-aos="fade-left" data-aos-delay={index * 200}>
                    <Card className="border-border/50 bg-card/50 hover:bg-card transition-colors">
                      <CardContent className="p-4 space-y-1">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <h4 className="font-bold text-lg">{exp.puesto}</h4>
                          <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                            {exp.periodo}
                          </span>
                        </div>
                        <p className="text-primary font-medium text-sm">{exp.empresa}</p>
                        <p className="text-sm text-muted-foreground">{exp.descripcion}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}