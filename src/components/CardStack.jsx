import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CardStack = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Each card moves up by a different amount as we scroll
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <section
      ref={ref}
      className="relative h-[150vh] flex items-center justify-center bg-gray-100"
    >
      {/* Card 3 (back) */}
      <motion.div
        style={{ y: y3 }}
        className="absolute w-80 h-52 bg-blue-300 rounded-2xl shadow-lg translate-y-12 z-0"
      />

      {/* Card 2 (middle) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute w-80 h-52 bg-blue-500 rounded-2xl shadow-lg translate-y-6 z-10"
      />

      {/* Card 1 (front) */}
      <motion.div
        style={{ y: y1 }}
        className="absolute w-80 h-52 bg-blue-700 rounded-2xl shadow-lg z-20 flex items-center justify-center text-white text-xl font-semibold"
      >
        Card 1
      </motion.div>
    </section>
  );
};

export default CardStack;
