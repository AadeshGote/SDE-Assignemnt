// eslint-disable-next-line no-unused-vars
import { motion, useTransform } from "framer-motion";

const ScrollCard = ({ index, scrollProgress, title, description }) => {
  const reversedIndex = 2 - index;
  const startProgress = reversedIndex * 0.33;
  const endProgress = startProgress + 0.33;

  const cardProgress = useTransform(
    scrollProgress,
    [startProgress, endProgress],
    [0, 1]
  );
  const y = useTransform(cardProgress, [0, 1], [0, -750]);

  const cardOffset = index * 20;

  return (
    <motion.div
      className="fixed left-1/2 -translate-x-1/2 w-full flex justify-center"
      style={{
        y,
        top: `calc(20% - ${cardOffset}px)`,
      }}
    >
      {/* ✅ 70% width card, fixed design */}
      <div className="w-[70vw] h-[70vh] max-w-xl bg-white rounded-3xl shadow-xl border border-gray-200 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-2 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="inline-block px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-700 font-medium">
          Card {index + 1}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollCard;
