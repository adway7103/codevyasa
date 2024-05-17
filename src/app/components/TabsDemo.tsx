"use client";
import { useEffect } from "react";
import { Tabs } from "./ui/tabs";
import { useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
export function TabsDemo() {
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
  const tabs = [
    {
      title: "Product Development and Innovation",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white bg-gradient-to-br from-purple-700 to-pink-900">
          <p>Product Development and Innovation</p>
          <h6 className="mt-8 text-2xl">
            CodeVyasa pioneers product/SaaS development, crafting innovative
            digital solutions that resonate. We turn concepts into reality,
            creating tech that stands out in a digital crowd.
          </h6>
        </div>
      ),
    },
    {
      title: "Data Engineering",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white bg-gradient-to-br from-pink-700 to-violet-900">
          <p>Data Engineering</p>
          <h6 className="mt-8 text-2xl">
            CodeVyasa pioneers product/SaaS development, crafting innovative
            digital solutions that resonate. We turn concepts into reality,
            creating tech that stands out in a digital crowd.
          </h6>
        </div>
      ),
    },
    {
      title: "DevOps & Cloud",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white bg-gradient-to-br from-blue-700 to-pink-900">
          <p>Devops & Cloud</p>
          <h6 className="mt-8 text-2xl">
            CodeVyasa pioneers product/SaaS development, crafting innovative
            digital solutions that resonate. We turn concepts into reality,
            creating tech that stands out in a digital crowd.
          </h6>
        </div>
      ),
    },
    {
      title: "Artificial Intelligence",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white bg-gradient-to-br from-red-500 to-pink-800">
          <p>Artificial Intelligence</p>
          <h6 className="mt-8 text-2xl">
            CodeVyasa pioneers product/SaaS development, crafting innovative
            digital solutions that resonate. We turn concepts into reality,
            creating tech that stands out in a digital crowd.
          </h6>
        </div>
      ),
    },
    {
      title: "IOT",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-5xl font-bold text-white  bg-gradient-to-br from-violet-700 to-fuchsia-600">
          <p>Internet Of Things</p>
          <h6 className="mt-8 text-2xl">
            CodeVyasa pioneers product/SaaS development, crafting innovative
            digital solutions that resonate. We turn concepts into reality,
            creating tech that stands out in a digital crowd.
          </h6>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 10, transition: { duration: 0.6 } },
        hidden: { opacity: 0, x: -100 },
      }}
      className="bg-black py-20 mb-20"
    >
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-8">
        <Tabs tabs={tabs} />
      </div>
    </motion.div>
  );
}
