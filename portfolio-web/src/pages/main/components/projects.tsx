import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Project } from "@/interfaces/Project";
import "aos/dist/aos.css";

export function Projects({ projects }: { projects: Project[] }) {
    return (
        <div className="container mx-auto px-8">
            <div className="text-center">
                <h1 className="text-7xl font-bold">
                    Featured{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                        Projects
                    </span>
                </h1>
                <br />
                <h2 className="text-2xl">A selection of my latest projects to showcase my software development abilities</h2>
            </div>

            <br />

            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} className="flex">
                        <Card className="card overflow-hidden flex flex-col h-full">
                            <CardHeader className="flex-shrink-0">
                                <CardTitle className="text-center text-2xl font-bold">
                                    {project.name}
                                </CardTitle>
                                <br />
                                <Carousel
                                    className="w-full max-w-[16rem] sm:max-w-md mx-auto"
                                    opts={{
                                        loop: true,
                                    }}
                                >
                                    <CarouselContent>
                                        {project.images.map((image, index) => (
                                            <CarouselItem key={index} className="flex justify-center">
                                                <img src={image} alt={`${project.name} preview ${index + 1}`} className="w-full object-cover" />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-0 ml-2" />
                                    <CarouselNext className="right-0 mr-2" />
                                </Carousel>
                                <CardDescription className="flex gap-2 mt-3 flex-wrap">
                                    {project.technologies.map((tech, index) => (
                                        <Badge key={index} variant="outline">{tech}</Badge>
                                    ))}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {project.description}
                            </CardContent>
                            <CardFooter className="flex justify-center gap-4 flex-shrink-0">
                                {project.actions.map((action, index) => (
                                    <Button key={index} variant="outline" size="sm" onClick={() => window.open(action.url, "_blank")} className="clickable">
                                        {action.name}
                                    </Button>
                                ))}
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>

            <Button
                variant="outline"
                size="lg"
                className="mx-auto mt-8 animate-pulse rounded-full clickable flex items-center gap-2 resizable"
                onClick={() => window.open("https://github.com/pCarboneroDev", "_blank")}
            >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.192.69.8.57 4.765-1.587 8.2-6.08 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View All Projects
            </Button>
        </div>
    )
}