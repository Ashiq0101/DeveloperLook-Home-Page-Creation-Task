import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ReadyToRise.css';

gsap.registerPlugin(ScrollTrigger);

function ReadyToRise() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        let ctx;
        let isMounted = true;

        const initAnimation = () => {
            if (!isMounted) return;

            ctx = gsap.context(() => {
                const heading = contentRef.current;
                const chars = heading.querySelectorAll('.char');

                let yStart = 0;
                let yEnd = 0;
                let charyStart = -60;

                if (window.innerWidth <= 1023) {
                    yStart = 0;
                    yEnd = 0;
                    charyStart = -60;
                }

                // Use fromTo so the starting position is also dynamically recalculated on resize/refresh
                gsap.fromTo(heading, 
                    {
                        y: yStart,
                        x: () => heading.offsetWidth - window.innerWidth + window.innerWidth * 0.5,
                    },
                    {
                        x: () => -(heading.offsetWidth - window.innerWidth + 1000),
                        y: yEnd,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 70%',
                            end: () => '+=' + (heading.offsetWidth - window.innerWidth + window.innerHeight * 0.35),
                            scrub: true,
                            invalidateOnRefresh: true
                        },
                    }
                );

                gsap.fromTo(chars, 
                    {
                        yPercent: charyStart,
                        rotation: 10
                    },
                    {
                        yPercent: 0,
                        rotation: 0,
                        ease: 'back.inOut(4)',
                        stagger: 0.35,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 77%',
                            end: () => '+=' + (heading.offsetWidth - window.innerWidth + 200),
                            scrub: true,
                            invalidateOnRefresh: true
                        },
                    }
                );

            }, sectionRef);
        };

        // Wait for fonts to load, then wait a frame for CSS to apply
        const loadPromise = document.fonts ? document.fonts.ready : Promise.resolve();
        
        loadPromise.then(() => {
            setTimeout(() => {
                initAnimation();
                // Force ScrollTrigger to refresh after everything is set
                ScrollTrigger.refresh();
            }, 100);
        });

        return () => {
            isMounted = false;
            if (ctx) ctx.revert();
        };
    }, []);

    const text = "Ready to Rise at Seven?";

    return (
        <section 
            ref={sectionRef} 
            className="ready-to-rise-section"
        >
            <div className="marquee-wrapper">
                <div className="marquee-content" ref={contentRef}>
                    <h1 className="marquee-text">
                        {text.split('').map((char, index) => (
                            <span 
                                key={index} 
                                className="char" 
                                style={{ display: 'inline-block', whiteSpace: 'pre' }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default ReadyToRise;
