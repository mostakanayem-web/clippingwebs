import { useState, useEffect, useRef, useMemo } from 'react';

interface StatItemProps {
    id: string;
    target: number;
    label: string;
    suffix?: string;
}

export default function StatsCounter() {
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const stats: StatItemProps[] = useMemo(() => [
        { id: 'projects', target: 500, label: 'Projects Completed', suffix: '+' },
        { id: 'satisfaction', target: 98, label: 'Client Satisfaction', suffix: '%' },
        { id: 'turnaround', target: 24, label: 'Avg. Turnaround', suffix: 'h' },
        { id: 'clients', target: 50, label: 'Happy Clients', suffix: '+' },
    ], []);

    const [counts, setCounts] = useState<{ [key: string]: number }>({
        projects: 0,
        satisfaction: 0,
        turnaround: 0,
        clients: 0
    });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasStarted) {
                setHasStarted(true);
            }
        }, { threshold: 0.5 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted) return;

        const duration = 2000;
        const steps = 50;
        const interval = duration / steps;

        const timer = setInterval(() => {
            setCounts(prevCounts => {
                const newCounts = { ...prevCounts };
                let allDone = true;

                stats.forEach(stat => {
                    if (newCounts[stat.id] < stat.target) {
                        const increment = stat.target / steps;
                        newCounts[stat.id] = Math.min(newCounts[stat.id] + increment, stat.target);
                        allDone = false;
                    }
                });

                if (allDone) clearInterval(timer);
                return newCounts;
            });
        }, interval);

        return () => clearInterval(timer);
    }, [hasStarted, stats]);

    return (
        <div ref={sectionRef} className="bg-linear-to-r from-primary to-primary-hover rounded-2xl p-8 text-white text-center mb-16 relative overflow-hidden hover-lift animate-zoom-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10 stagger-animation animate">
                {stats.map((stat, index) => (
                    <div key={stat.id} className="stat-item animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="text-3xl font-bold mb-2">
                            {Math.floor(counts[stat.id])}{stat.suffix}
                        </div>
                        <div className="text-sm opacity-90">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
