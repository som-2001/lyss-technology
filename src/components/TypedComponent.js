import React from "react";
import TypingEffect from "react-typing-effect";

export const TypedComponent = () => {
  return (
    <div>
      <TypingEffect
        text={[
          "Welcome to Lyss Technology!",
          "Innovative Solutions for Your Business",
          "Empowering Your Success with Our Expertise",
          "Quality Products and Exceptional Services",
          "Transforming Ideas into Reality",
          "Your Trusted Partner in Excellence",
          "Enhancing Your Experience with Cutting-Edge Technology",
          "Dedicated to Your Satisfaction",
          "Delivering Value Beyond Expectations",
          "Professional Services Tailored to Your Needs",
          "Experience the Future of Innovation",
        ]}
        speed={100}
        eraseDelay={1000}
      />
    </div>
  );
};
