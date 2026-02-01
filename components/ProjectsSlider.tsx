import { useState, useRef, useEffect } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function ProjectsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const totalSlides = 8;
  const sliderWidth = 400; // Width of each slide
  const gap = 32; // Gap between slides
  const autoPlayInterval = 5000; // 5 seconds







  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!mounted) return;
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);

    return () => {
      resetTimeout();
    };
  }, [currentSlide, mounted]);

  if (!mounted) return null;

  return (
    <div 
      className="relative mb-16"
      onMouseEnter={resetTimeout}
      onMouseLeave={() => {
        resetTimeout();
        timeoutRef.current = setTimeout(nextSlide, autoPlayInterval);
      }}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover-lift magnetic-btn"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover-lift magnetic-btn"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Projects Slider */}
      <div className="projects-slider overflow-hidden">
        <div
          className="flex space-x-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * (sliderWidth + gap)}px)` }}
        >
          {/* Project 1 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  Fashion Apparel Editing
                </div>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  Jewelry Retouching
                </div>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  E-commerce Product
                </div>
              </div>
            </div>
          </div>
          {/* Project 4 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  Model Retouching
                </div>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1558603668-6576fb9c6fbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  Jewelry Photography
                </div>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  Ghost Mannequin
                </div>
              </div>
            </div>
          </div>
          {/* Project 7 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  Background Removal
                </div>
              </div>
            </div>
          </div>
          {/* Project 8 */}
          <div className="project-slide shrink-0 group cursor-pointer" style={{ width: '400px' }}>
            <div className="relative rounded-2xl shadow-lg overflow-hidden">
              <div className="relative overflow-hidden" style={{ height: '560px' }}>
                <BeforeAfterSlider
                  beforeSrc="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  afterSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  className="h-full"
                  showLabels={true}
                />
              </div>
              {/* Simple Title Label at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pointer-events-none z-30">
                <div className="text-white text-sm font-bold font-raleway uppercase tracking-widest">
                  Color Enhancement
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(totalSlides)].map((_, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full slider-indicator cursor-pointer transition-all duration-300 ${i === currentSlide ? 'active bg-primary' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
