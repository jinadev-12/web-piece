
import bucket from "../assets/img/order-img-1.png";
import chicken1 from "../assets/img/chicken-dam-5.png";
import chicken2 from "../assets/img/chicken-dam-6.png";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);


    
   useEffect(() => {
     const ctx = gsap.context(() => {
         gsap.fromTo(
           textRef.current,
           { y: 40, autoAlpha: 0 }, // start
           {
             y: 0,
             autoAlpha: 1, // end
             duration: 1,
             scrollTrigger: {
               trigger: sectionRef.current,
               start: "top 80%",
             },
           }
         );
     }, sectionRef);
   
   },[])
