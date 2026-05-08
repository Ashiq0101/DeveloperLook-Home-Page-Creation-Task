import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ReadyToRise.css';

gsap.registerPlugin(ScrollTrigger);

function ReadyToRise() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        let ctx;
        let isMounted = true;

        document.fonts.ready.then(() => {
            if (!isMounted) return;

            ctx = gsap.context(() => {
                const heading = contentRef.current;
                const headingWidth = heading.offsetWidth;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                let yStart = 150;
                let yEnd = 400;
                let charyStart = -60;

                if (windowWidth <= 1023) {
                    yStart = 100;
                    yEnd = 200;
                    charyStart = -60;
                }

                gsap.set(heading, {
                    y: yStart,
                    x: headingWidth - windowWidth + windowWidth * 0.5,
                });

                gsap.to(heading, {
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
                });

                const chars = heading.querySelectorAll('.char');

                chars.forEach((char) => {
                    gsap.set(char, {
                        yPercent: charyStart,
                        rotation: 10
                    });
                });

                gsap.to(chars, {
                    yPercent: 0,
                    rotation: 0,
                    ease: 'back.inOut(4)',
                    stagger: 0.35,
                    duration: 2.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 77%',
                        end: () => '+=' + (heading.offsetWidth - window.innerWidth + 200),
                        scrub: true,
                        invalidateOnRefresh: true
                    },
                });

            }, sectionRef);
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
