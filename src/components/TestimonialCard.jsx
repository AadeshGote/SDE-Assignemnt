import AnimatedCard from "./AnimatedCard";

const TestimonialCard = () => (
  <section className="py-16 bg-white">
    <AnimatedCard delay={0.2}>
      <blockquote className="text-gray-700 italic text-lg">
        "This product completely changed the way we work!"
      </blockquote>
      <p className="mt-4 font-semibold">– John Doe, CEO</p>
    </AnimatedCard>
  </section>
);

export default TestimonialCard;
