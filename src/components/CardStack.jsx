import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollCard from "./ScrollCard";

const CardStack = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden"
    >
      <div className="relative h-[300vh] flex items-start justify-center pt-20 overflow-hidden">
        <ScrollCard
          index={0}
          scrollProgress={scrollYProgress}
          title="Card One"
          description="This is the first card that will slide up as you scroll"
        />
        <ScrollCard
          index={1}
          scrollProgress={scrollYProgress}
          title="Card Two"
          description="This is the second card that follows the first one"
        />
        <ScrollCard
          index={2}
          scrollProgress={scrollYProgress}
          title="Card Three"
          description="This is the third card that completes the sequence"
        />
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-800 text-xs font-medium px-3 py-2 rounded-full border border-gray-300 bg-transparent">
            <img
              className="w-4 h-4 rounded-full "
              src="src/assets/react.svg"
              alt="User avatar"
            />
            <span>Jessica Park</span>
          </div>

          <p className="text-gray-600 mt-4 px-5 text-xl font-medium leading-relaxed text-center">
            {`''The first time I used Speak Tutor, I couldn't believe it wasent a real person. It feels like it understands my motivations at a deep levels.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
