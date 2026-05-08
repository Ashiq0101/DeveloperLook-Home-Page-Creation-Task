import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ChasingConsumers.css';

gsap.registerPlugin(ScrollTrigger);

function ChasingConsumers() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let mm = gsap.matchMedia();
        const container = containerRef.current;

        mm.add("(pointer: fine)", () => {
            gsap.to(container, {
                xPercent: -20,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                }
            });
        });

        return () => mm.revert();
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        
        const moveCursor = (e) => {
            if (cursor) {
                const left = e.clientX - cursor.clientWidth / 2;
                const top = e.clientY - cursor.clientHeight / 2;
                cursor.style.left = `${left}px`;
                cursor.style.top = `${top}px`;
            }
        };

        if (isHovering) {
            window.addEventListener('pointermove', moveCursor);
            document.body.classList.add('hide-cursor');
            document.documentElement.classList.add('hide-cursor');
        } else {
            window.removeEventListener('pointermove', moveCursor);
            document.body.classList.remove('hide-cursor');
            document.documentElement.classList.remove('hide-cursor');
        }

        return () => {
            window.removeEventListener('pointermove', moveCursor);
            document.body.classList.remove('hide-cursor');
            document.documentElement.classList.remove('hide-cursor');
        };
    }, [isHovering]);

    const items = [
        { text: 'Chasing Consumers', image: '/images/Screenshot-2025-06-25-at-14.49.00.png' },
        { text: 'Not Algorithms', image: '/images/IMG_5023.jpg' },
        { text: 'Chasing Consumers', image: '/images/Screenshot-2025-06-25-at-14.49.00.png' },
        { text: 'Not Algorithms', image: '/images/IMG_5023.jpg' },
    ];

    // Double the items for seamless infinite scroll
    const marqueeItems = [...items, ...items];

    return (
        <section 
            className="chasing-consumers-section" 
            ref={sectionRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div 
                className={`custom-cursor-chasing ${isHovering ? 'scale-100' : ''}`}
                ref={cursorRef}
            >
                <div className="cursor-text">Send Us Your Brief</div>
            </div>

            <a href="https://riseatseven.com/contact/" className="chasing-link">
                <div className="marquee-wrapper" ref={containerRef}>
                    <div className="chasing-marquee-track">
                        {marqueeItems.map((item, idx) => (
                            <div className="marquee-item" key={idx}>
                                <h2>{item.text}</h2>
                                <div className="marquee-image-wrapper">
                                    <img src={item.image} alt={item.text} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </a>
        </section>
    );
}

export default ChasingConsumers;
