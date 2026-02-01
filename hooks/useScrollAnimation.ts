import { useEffect } from 'react';

export default function useScrollAnimation() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Match main.js behavior
                    if (entry.target.classList.contains('fade-in') || 
                        entry.target.classList.contains('text-reveal')) {
                        entry.target.classList.add('visible');
                    }
                    
                    if (entry.target.classList.contains('stagger-animation') ||
                        entry.target.classList.contains('animate-fade-in-up') ||
                        entry.target.classList.contains('animate-slide-in-left') ||
                        entry.target.classList.contains('animate-slide-in-right') ||
                        entry.target.classList.contains('animate-zoom-in')) {
                        entry.target.classList.add('animate');
                    }
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(
            '.fade-in, .text-reveal, .stagger-animation, .animate-fade-in-up, .animate-slide-in-left, .animate-slide-in-right, .animate-zoom-in'
        );
        
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);
}
