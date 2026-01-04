import React, { useState } from "react";

const cards = [
  {
    front: "AI Layout Generator",
    back: "Automatically creates a complete website layout from a single prompt.",
  },
  {
    front: "AI Content Writer",
    back: "Generates high-quality headlines, text, and call-to-actions instantly.",
  },
  {
    front: "Performance Optimization",
    back: "Ensures fast load speed, clean code, and high PageSpeed scores.",
  },
];

const Card = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="group w-60 h-72 cursor-pointer [perspective:1200px] "
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-700 ease-out
          [transform-style:preserve-3d]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
          md:group-hover:[transform:rotateY(180deg)]
        `}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-xl bg-white border border-gray-200 shadow-lg flex flex-col items-center justify-center px-5 text-center [backface-visibility:hidden]">
          <h3 className="text-lg font-semibold text-gray-900">
            {front}
          </h3>
          <span className="mt-3 h-1 w-10 rounded-full bg-indigo-600"></span>
          <p className="mt-4 text-xs text-gray-400 md:hidden">
            Tap to flip
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xl px-6 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm leading-relaxed opacity-95">
            {back}
          </p>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <section className="py-20 px-4">
      
      {/* Top Text */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-indigo-600 uppercase">
          Features
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Everything You Need to Build with AI
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          From layout generation to content writing and performance optimization,
          our AI tools handle the heavy lifting for you.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-10 justify-center">
        {cards.map((card, index) => (
          <Card key={index} front={card.front} back={card.back} />
        ))}
      </div>

    </section>
  );
};

export default Cards;
