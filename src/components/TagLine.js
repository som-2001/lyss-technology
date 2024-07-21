import React from "react";
import TypingEffect from "react-typing-effect";

export const TagLine = () => {
  return (
    <div>
      <TypingEffect
        text={[
          "Leading with Integrity, Achieving Greatness",
          "Guiding Innovation, Shaping the Future",
          "Empowering Success, Cultivating Excellence",
          "Visionary Leadership, Exceptional Results",
          "Pioneering Change, Inspiring Achievement",
          "Strategic Leadership, Lasting Impact",
          "Innovative Minds, Remarkable Outcomes",
          "Transforming Ideas, Driving Excellence",
          "Focused Leadership, Inspired Performance",
          "Building Success, Elevating Standards",
        ]}
        speed={100}
        eraseDelay={1000}
      />
    </div>
  );
};
