export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} Pablo Carbonero. All rights reserved.
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Made with React and ShadCN UI.
                    </p>
                    
                    <div className="flex gap-4">
                        <a href="#Home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Home
                        </a>
                        <a href="#Contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            Contact
                        </a>
                        {/* <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            Volver arriba
                        </button> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}