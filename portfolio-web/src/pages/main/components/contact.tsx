import { GithubIcon } from "@/components/icons/githubIcon";
import { LinkedinIcon } from "@/components/icons/linkedinIcon";
import emailjs from '@emailjs/browser';

export function Contact() {


    function sendEmail(e: React.FormEvent<HTMLFormElement>) { // Parameter 'e' implicitly has an 'any' type.
        e.preventDefault();

        emailjs
            .sendForm(
                'service_mdikh2z', // Service ID
                'template_7kzzxfm',   // Template ID
                e.currentTarget,             // El formulario (no currentTarget)
                '2PJBufDYSvUjkC0NN'     // Tu Public Key real
            )
            .then(
                () => { // result
                    // alert('Email sent!');
                    window.location.reload();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="container mx-auto max-w-6xl">
            {/* Header de la sección */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Let's Connect
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Do you have a project in mind? I'm available for new projects and interesting opportunities.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Columna izquierda - Información de contacto */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
                        <p className="text-muted-foreground">
                            I'm always interested in hearing about new projects, job opportunities or just to chat about technology.
                        </p>
                    </div>

                    {/* Tarjetas de contacto */}
                    <div className="space-y-4">
                        {/* Email */}
                        <div className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium">Email</p>
                                <a href="mailto:pcarboneroalmellones@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    pcarboneroalmellones@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Teléfono */}
                        {/* <div className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium">Teléfono</p>
                                <a href="tel:+34667291647" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    +34 667 29 16 47
                                </a>
                            </div>
                        </div> */}

                        {/* Ubicación */}
                        <div className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-medium">Location</p>
                                <p className="text-sm text-muted-foreground">Seville, Spain</p>
                            </div>
                        </div>
                    </div>

                    {/* Redes sociales */}
                    <div className="pt-4">
                        <p className="font-medium mb-4">Follow me</p>
                        <div className="flex gap-3">
                            <GithubIcon></GithubIcon>
                            <LinkedinIcon></LinkedinIcon>
                        </div>
                    </div>
                </div>

                {/* Columna derecha - Formulario de contacto */}
                <div className="rounded-lg border bg-card p-6 md:p-8">
                    <form className="space-y-6" onSubmit={sendEmail}>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your name"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="title"
                                placeholder="What can I help you with?"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                rows={5}
                                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch w-full">
                            <button
                                type="submit"
                                className="clickable inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 w-full sm:w-auto"
                            >
                                Send Message
                                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>


                        </div>


                        <p className="text-xs text-center text-muted-foreground pt-4">
                            I will get back to you as soon as possible. Usually within 24-48 hours.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}