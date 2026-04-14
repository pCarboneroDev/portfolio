import type { MouseEventHandler, JSX } from 'react';

interface ThemeToggleIconProps {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export function ThemeToggleIcon({ theme, setTheme }: ThemeToggleIconProps): JSX.Element {
    const toggleTheme: MouseEventHandler<HTMLButtonElement> = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 clickable"
            aria-label="Cambiar tema"
            type="button"
        >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                {theme === 'dark' ? (
                    // Icono de sol (modo claro)
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                ) : (
                    // Icono de luna (modo oscuro)
                    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.96 0-5.36-2.4-5.36-5.36 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                )}
            </svg>
        </button>
    );
}
