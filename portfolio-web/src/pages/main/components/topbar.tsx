import { ThemeToggleIcon } from "@/components/icons/themeIconButton"
import { useTheme } from "@/components/theme-provider"
import { scrollToSection } from "@/lib/scrollToSection"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function TopBar() {
    const navItems = [
        { label: 'Home', href: '#Home' },
        { label: 'About', href: '#About' },
        { label: 'Projects', href: '#Projects' },
        // { label: 'Experience', href: '#Experience' },
        { label: 'Skills', href: '#Skills' },
        { label: 'Contact', href: '#Contact' }
    ]

    const { theme, setTheme } = useTheme()
    const [activeSection, setActiveSection] = useState('Home')

    // En tu componente principal
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // La función para toggle del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Esperar a que el DOM esté listo
        const timeoutId = setTimeout(() => {
            const sections = navItems.map(item => item.href.substring(1))

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const sectionId = entry.target.id
                            setActiveSection(sectionId)
                        }
                    })
                },
                {
                    rootMargin: '-50px 0px -20% 0px',
                    threshold: 0.1
                }
            )

            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId)
                if (element) {
                    observer.observe(element)
                } else {
                    console.warn('Element not found:', sectionId) // Debug
                }
            })

            return () => {
                sections.forEach((sectionId) => {
                    const element = document.getElementById(sectionId)
                    if (element) {
                        observer.unobserve(element)
                    }
                })
                observer.disconnect()
            }
        }, 100) // Pequeño delay para asegurar que el DOM esté listo

        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 md:hidden"
                    >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Open main menu</span>

                        {/* Icono de hamburguesa (menú cerrado) */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-hidden="true"
                            className={`size-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                        >
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        {/* Icono de cerrar (menú abierto) */}
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-hidden="true"
                            className={`size-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                        >
                            <path d="M6 18 18 6M6 6l12 12"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-bold">pCarboneroDev</a>
                    </div>

                    <div className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={cn(
                                    "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    "text-muted-foreground",
                                    activeSection === item.label ? "selected" : ""
                                )}
                            >
                                {item.label}
                            </a>
                        ))}

                        <ThemeToggleIcon theme={theme === "system" ? "light" : theme} setTheme={setTheme} />
                    </div>
                </div>
            </div>

            {/* Menú móvil (desplegable) - OPCIONAL pero recomendado */}
            {isMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur border-b dropdown">
                    <div className="container mx-auto px-4 py-2 space-y-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    scrollToSection(e, item.href);
                                    setIsMenuOpen(false); // Cierra el menú después de hacer clic
                                }}
                                className={cn(
                                    "block px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    "text-muted-foreground",
                                    activeSection === item.label ? "selected" : ""
                                )}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="px-4 py-2">
                            <ThemeToggleIcon theme={theme === "system" ? "light" : theme} setTheme={setTheme} />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}