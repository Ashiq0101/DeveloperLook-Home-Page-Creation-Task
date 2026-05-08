import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Pioneers.css';

gsap.registerPlugin(ScrollTrigger);

function Pioneers() {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);

    const cards = [
        {
            id: 1,
            title: "Pioneers",
            image: "/images/pioneers-img.jpg",
            text1: "We're dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
            text2: "We're on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
            bgClass: "card-bg-dark",
            textClass: "card-text-light",
            initialRotation: -2
        },
        {
            id: 2,
            title: "Award Winning",
            image: "/images/IMG_5087.JPG",
            text1: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
            text2: "",
            bgClass: "card-bg-mint",
            textClass: "card-text-dark",
            initialRotation: 4
        },
        {
            id: 3,
            title: "Speed",
            image: "/images/speed-img.png",
            text1: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We've created a service which takes ideas to result within 60 minutes.",
            text2: "",
            bgClass: "card-bg-white",
            textClass: "card-text-dark",
            initialRotation: -3
        }
    ];

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const cardElements = gsap.utils.toArray('.pioneers-card-wrapper-item');
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top", // Pin as soon as the section hits the top of the screen
                    end: () => `+=${window.innerHeight * (cardElements.length)}`, // Ensure enough scroll space for all cards
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1
                }
            });

            // Add a small pause at the beginning
            tl.addLabel("start")
              .to({}, {duration: 0.2});

            // Animate each card (except the last one) to move out of the way
            cardElements.forEach((card, i) => {
                if (i !== cardElements.length - 1) {
                    tl.to(card, {
                        yPercent: -120, // Move further up to completely clear
                        rotation: -15, // A bit more rotation for effect
                        opacity: 0,
                        scale: 0.8,
                        ease: "power2.inOut",
                        duration: 1
                    }, `+=${0.1}`); // Sequence the animations with a small gap
                }
            });

            // Add a small pause at the end
            tl.to({}, {duration: 0.2});

            return () => {
                if (tl) tl.kill();
            };
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className="pioneers-section container">
            <h2 className="pioneers-title">Legacy In The Making</h2>
            
            <div className="pioneers-cards-wrapper" ref={wrapperRef}>
                <div className="pioneers-cards-stack">
                    {cards.map((card, idx) => (
                        <div 
                            key={card.id} 
                            className="pioneers-card-wrapper-item"
                            style={{ 
                                zIndex: cards.length - idx,
                                transform: `rotate(${card.initialRotation}deg)`
                            }}
                        >
                            <div className={`pioneers-card-main ${card.bgClass}`}>
                                <div className="pioneers-image-wrapper">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <h3 className={`pioneers-heading ${card.textClass}`}>{card.title}</h3>
                                <p className={`pioneers-text ${card.textClass}`}>
                                    {card.text1}
                                </p>
                                {card.text2 && (
                                    <p className={`pioneers-text ${card.textClass}`}>
                                        {card.text2}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pioneers;
