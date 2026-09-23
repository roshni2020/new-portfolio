"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SplitText({ text, as = "h2", className = "" }: { text: string; as?: any; className?: string }) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    // Split the text into characters
    const split = new SplitType(textRef.current, { types: "words,chars" });
    
    gsap.fromTo(split.chars, 
      {
        y: 100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: "power4.out",
      }
    );

    return () => {
      split.revert();
    };
  }, [text]);

  const Tag = as;

  return (
    <Tag ref={textRef} className={`${className} overflow-hidden`} style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
      {text}
    </Tag>
  );
}
