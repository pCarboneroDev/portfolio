import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Configuración
        let dots: { x: number; y: number; size: number; baseOpacity: number }[] = []
        let mouseX = -1000
        let mouseY = -1000
        let animationFrameId: number
        let resizeObserver: ResizeObserver

        const DOT_SPACING = 40 // Espaciado entre puntos
        const DOT_SIZE = 1 // Tamaño base del punto
        const ILLUMINATION_RADIUS = 200 // Radio de iluminación alrededor del cursor

        // Inicializar puntos
        const initDots = () => {
            const rect = canvas.getBoundingClientRect()
            const width = rect.width
            const height = rect.height

            const cols = Math.ceil(width / DOT_SPACING) + 1
            const rows = Math.ceil(height / DOT_SPACING) + 1

            dots = []
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({
                        x: i * DOT_SPACING,
                        y: j * DOT_SPACING,
                        size: DOT_SIZE,
                        baseOpacity: 0.15
                    })
                }
            }
        }

        const getDotColor = () => {
            // Detectar si el tema es oscuro
            const isDark = document.documentElement.classList.contains('dark');
            return isDark ? '255, 255, 255' : '0, 0, 0';
        };

        // Actualizar tamaño del canvas
        const updateSize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect()
            if (rect) {
                canvas.width = rect.width
                canvas.height = rect.height
                initDots()
                draw()
            }
        }

        // Dibujar puntos
        const draw = () => {
            if (!ctx || !canvas) return

            // Limpiar canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Dibujar cada punto
            dots.forEach(dot => {
                // Calcular distancia al cursor
                const dx = mouseX - dot.x
                const dy = mouseY - dot.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                // Calcular opacidad basada en la distancia
                let opacity = dot.baseOpacity
                let size = dot.size

                if (distance < ILLUMINATION_RADIUS) {
                    // Efecto de iluminación: más brillante cerca del cursor
                    const intensity = 1 - (distance / ILLUMINATION_RADIUS)
                    opacity = dot.baseOpacity + intensity * 0.3
                    size = dot.size + intensity * 1.25
                }

                // Dibujar punto
                ctx.beginPath()
                ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2)
                const dotColor = getDotColor();
                ctx.fillStyle = `rgba(${dotColor}, ${opacity})`;//`rgba(255, 255, 255, ${opacity})`
                ctx.fill()
            })
        }

        // Manejador de movimiento del mouse
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouseX = e.clientX - rect.left
            mouseY = e.clientY - rect.top
            draw()
        }

        const handleMouseLeave = () => {
            mouseX = -1000
            mouseY = -1000
            draw()
        }

        // Configurar observador de tamaño
        resizeObserver = new ResizeObserver(() => {
            updateSize()
        })

        if (canvas.parentElement) {
            resizeObserver.observe(canvas.parentElement)
        }

        updateSize()

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)
        canvas.addEventListener('mouseleave', handleMouseLeave)

        // Animación continua
        const animate = () => {
            draw()
            animationFrameId = requestAnimationFrame(animate)
        }
        animate()

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
            resizeObserver.disconnect()
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )
}