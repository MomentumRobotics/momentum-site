import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import your ThemeContext

const ConstellationParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Access the current theme from the ThemeContext
    const { isDarkMode } = useContext(ThemeContext); // Access isDarkMode

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let particleCount = 120; // Default number of particles for 1920x1080
        const maxConnectionDistance = 150; // Maximum distance for particle connections

        // Function to adjust the canvas size and update particle count/connection distance
        const updateCanvasSize = () => {
            const { innerWidth, innerHeight } = window;
            canvas.width = innerWidth;
            canvas.height = innerHeight;

            // Adjust particle count for smaller resolutions
            if (innerWidth < 1920 || innerHeight < 1080) {
                const scaleFactor = Math.min(innerWidth / 1920, innerHeight / 1080);
                particleCount = Math.max(40, Math.floor(120 * scaleFactor)); // Scale particles based on screen size
            } else {
                particleCount = 120; // Keep 120 particles for 1920x1080
            }
        };

        // Create the Particle class
        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                this.x = Math.random() * canvas.width;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1; // Size of each particle
                this.speedX = (Math.random() - 0.5) * 0.5; // Slow horizontal speed
                this.speedY = (Math.random() - 0.5) * 0.5; // Slow vertical speed
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Boundary wrapping
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (this.x > canvas.width) this.x = 0;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (this.x < 0) this.x = canvas.width;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (this.y > canvas.height) this.y = 0;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.beginPath();
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                // Change color based on theme (dark or light)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.fillStyle = isDarkMode
                    ? "rgba(255, 255, 255, 0.8)" // Light color for dark mode
                    : "rgba(0, 0, 0, 0.8)"; // Dark color for light mode
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.fill();
            }

            connect(particles: Particle[]) {
                particles.forEach((otherParticle) => {
                    const dx = this.x - otherParticle.x;
                    const dy = this.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxConnectionDistance) {
                        const opacity = 1 - distance / maxConnectionDistance;
                        const lineColor = isDarkMode
                            ? "255, 255, 255" // Line color for dark mode
                            : "0, 0, 0"; // Line color for light mode
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.strokeStyle = `rgba(${lineColor}, ${opacity})`;
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.lineWidth = 0.5;
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.beginPath();
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.moveTo(this.x, this.y);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.stroke();
                    }
                });
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
                particle.connect(particles);
            });

            requestAnimationFrame(animate);
        };

        const handleResize = () => {
            updateCanvasSize();
            init();
        };

        updateCanvasSize();
        init();
        animate();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isDarkMode]); // Re-run effect when the theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    );
};

export default ConstellationParticles;
