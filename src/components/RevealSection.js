import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RevealSection({ id, title, icon, children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <motion.div variants={variants} initial="hidden" animate={controls}>
        <div className="flex flex-col items-center mb-6">
          <div className="text-cyan-500 dark:text-cyan-400 mb-4">{icon}</div>
          <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        </div>

        {children}
      </motion.div>
    </section>
  );
}
