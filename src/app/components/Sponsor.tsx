"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite';
import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
function Sponsor() {
    const [isInView, setIsInView] = useState(false);
     const controls = useAnimation();
     const ref = React.useRef(null);

     useEffect(() => {
       const element = ref.current;
       const onChange = (entries: IntersectionObserverEntry[]) => {
         setIsInView(entries[0].isIntersecting);
       };

       const observer = new IntersectionObserver(onChange, { threshold: 0.5 }); // Adjust threshold as needed
       observer.observe(element!);

       return () => observer.unobserve(element!);
     }, []);

     useEffect(() => {
       if (isInView) {
         controls.start("visible"); // Start the "visible" animation when in view
       }
     }, [isInView, controls]);
     const words = ["better", "cute", "beautiful", "modern"];
    const testimonials = [
      {
        url: "https://www.etcentric.org/wp-content/uploads/2016/07/Amazon_Logo_Black_bg.jpg",
      },
      {
        url: "https://th.bing.com/th/id/OIP.HwMi3C7BkxARkay1J3PdvQAAAA?rs=1&pid=ImgDetMain",
      },
      {
        url: "https://www.etcentric.org/wp-content/uploads/2017/12/Deloitte_Logo.jpg",
      },
      {
        url: "https://th.bing.com/th/id/OIP.UssJ25DxkCH2U-Z0GRV6wAAAAA?w=470&h=330&rs=1&pid=ImgDetMain",
      },
    ];
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 10, transition: { duration: 0.6 } },
        hidden: { opacity: 0, x: 100 },
      }}
      className="bg-black mt-[-40px]"
    >
      <div className="flex flex-col justify-center items-center px-4">
        <div className="text-white lg:w-[80%] 2xl:w-[60%] font-bold lg:text-[2.5rem] 2xl:text-[3rem] text-center">
          CodeVyasa is a trusted Outsourcing partner for over{" "}
          <span className="gradient-text">100 companies</span> globally
        </div>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
      
    </motion.div>
  );
}

export default Sponsor