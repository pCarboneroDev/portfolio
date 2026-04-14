import { EmailIcon } from "@/components/icons/emailIcon";
import { GithubIcon } from "@/components/icons/githubIcon";
import { LinkedinIcon } from "@/components/icons/linkedinIcon";
import { scrollToSection } from "@/lib/scrollToSection";
import "aos/dist/aos.css";

export function Hero() {
    return (
        <div className="text-center space-y-6 max-w-4xl mx-auto">

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Pablo Carbonero
                </span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground" data-aos="fade-up" data-aos-offset="-300">
                <span className="inline-flex items-center">
                    Fullstack Developer
                    <span className="ml-1 inline-block h-7 w-[2px] bg-primary animate-pulse"></span>
                </span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionated in creating modern web and mobile apps.
                Data science and AI enthusiast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                    href="#Contact"
                    onClick={(e) => scrollToSection(e, '#Contact')}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                    data-aos="fade-right"
                >
                    Contact Me
                </a>
                <a
                    href="#Projects"
                    onClick={(e) => scrollToSection(e, '#Projects')}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
                    data-aos="fade-left"
                >
                    View Projects
                </a>
            </div>

            {/* Social links opcional */}
            <div className="flex gap-4 justify-center pt-8">
                <GithubIcon></GithubIcon>
                <LinkedinIcon></LinkedinIcon>
                <EmailIcon></EmailIcon>
            </div>

            {/* Scroll indicator */}
            <br />
            <div>
                <div className="animate-bounce flex flex-col items-center justify-center">
                    <p>Scroll to explore</p>
                    <svg className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </div>
    )
}