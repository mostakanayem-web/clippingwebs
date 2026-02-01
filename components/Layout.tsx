import Header from './Header';
import Footer from './Footer';
import { ReactNode, useEffect } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    useEffect(() => {
        const magneticBtns = document.querySelectorAll('.magnetic-btn');

        const handleMouseMove = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            const rect = btn.getBoundingClientRect();
            const x = (e as MouseEvent).clientX - rect.left - rect.width / 2;
            const y = (e as MouseEvent).clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px)`;
        };

        const handleMouseLeave = (e: Event) => {
            const btn = e.currentTarget as HTMLElement;
            btn.style.transform = 'translate(0px, 0px)';
        };

        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', handleMouseMove);
            btn.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            magneticBtns.forEach(btn => {
                btn.removeEventListener('mousemove', handleMouseMove);
                btn.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
