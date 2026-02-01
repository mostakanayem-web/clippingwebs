import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    alt?: string;
    className?: string;
    showLabels?: boolean;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, alt = "Comparison", className = "", showLabels = true }: BeforeAfterSliderProps) {
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const isMoving = useRef(false);
    const rafId = useRef<number | null>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current || !isMoving.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;

        // Use requestAnimationFrame for smooth updates
        if (rafId.current) {
            cancelAnimationFrame(rafId.current);
        }
        
        rafId.current = requestAnimationFrame(() => {
            setPosition(percent);
        });
    }, []);

    const onMouseMove = useCallback((e: MouseEvent) => {
        handleMove(e.clientX);
    }, [handleMove]);

    const onTouchMove = useCallback((e: TouchEvent) => {
        if (e.touches.length === 0) return;
        e.preventDefault(); // Prevent scrolling on mobile
        handleMove(e.touches[0].clientX);
    }, [handleMove]);

    const onMouseUp = useCallback(() => {
        isMoving.current = false;
        setIsDragging(false);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('touchend', onMouseUp);
    }, [onMouseMove, onTouchMove]);

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        isMoving.current = true;
        setIsDragging(true);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        handleMove(e.clientX);
    }, [handleMove, onMouseMove, onMouseUp]);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        e.preventDefault();
        isMoving.current = true;
        setIsDragging(true);
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onMouseUp);
        if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
        }
    }, [handleMove, onTouchMove, onMouseUp]);

    // Cleanup RAF on unmount
    useEffect(() => {
        return () => {
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    return (
        <div
            className={`slider-container relative select-none overflow-hidden ${className}`}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ touchAction: 'none', userSelect: 'none' }}
        >
            {/* Before Image (Background) */}
            <Image 
                src={beforeSrc} 
                alt={`Before ${alt}`} 
                fill
                className="slider-image object-cover pointer-events-none select-none"
                style={{ zIndex: 0 }}
                draggable={false}
                unoptimized
            />

            {/* After Image (Foreground, Clipped) */}
            <div 
                className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
                <Image
                    src={afterSrc}
                    alt={`After ${alt}`}
                    fill
                    className="slider-image object-cover select-none"
                    draggable={false}
                    unoptimized
                />
            </div>

            {/* Handle Line & Circle - No transition during drag for smooth movement */}
            <div
                className={`slider-handle absolute top-0 bottom-0 z-20 pointer-events-none ${isDragging ? '' : 'transition-all duration-300'}`}
                style={{ 
                    left: `${position}%`,
                }}
            />

            {showLabels && (
                <>
                    <div 
                        className="absolute top-6 left-6 text-white px-5 py-2 rounded-full text-xs font-bold font-raleway uppercase tracking-widest z-30 pointer-events-none transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                    >
                        Before
                    </div>
                    <div 
                        className="absolute top-6 right-6 text-white px-5 py-2 rounded-full text-xs font-bold font-raleway uppercase tracking-widest z-30 pointer-events-none transition-opacity duration-300"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                    >
                        After
                    </div>
                </>
            )}
        </div>
    );
}
