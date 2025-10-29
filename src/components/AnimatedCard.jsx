import { motion as Motion } from "framer-motion";

const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <>
      <Motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-2xl shadow-lg bg-white p-6 sm:p-8 max-w-md w-full mx-auto"
      >
        {children}
      </Motion.div>
    </>
  );
};

export default AnimatedCard;
