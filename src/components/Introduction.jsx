import { useEffect, useRef } from "react";


import gsap from "gsap";

const Introduction = () => {
  const wordsRefs = useRef([]);

  useEffect(() => {
    const targets = wordsRefs.current.filter(Boolean);

    gsap.fromTo(
      targets,
      { y: 30, opacity: 0, scale: 0.8 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.6,
        ease: "elastic.out(1,0.5)",
        stagger: 0.3,
        delay: 0.2,
      }
    );
  }, []);

  const words = ["Hi", ",", "I", "'", "m ", " Aashish", "Sharma"];

  return (
    <section
      id="introduction"
      className="min-h-screen bg-cover bg-center bg-no-repeat w-full px-20 py-12 bg-[#FFFF11] text-white flex flex-col items-center justify-center text-center "

    >
      <h1 className="text-4xl text-black md:text-6xl lg:text-8xl font-bold flex flex-wrap justify-center">
        {words.map((word, i) => (
          <span
            key={i}
            ref={(el) => (wordsRefs.current[i] = el)}
            className="inline-block mr-1 pr-3"
          >
            {word}
          </span>
        ))}
      </h1>

      <p className="text-xl font-medium text-gray-600 mt-4 max-w-2xl">
        I’m a passionate Web Developer specializing in building modern,
        full-stack web applications.
      </p>

      <div className="flex justify-center gap-4 pt-6 flex-wrap">
        <div
          id="btn"
          onClick={() => {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium shadow-xl rounded-sm text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition duration-200 hover:translate-y-2 cursor-pointer"
        >
          <button>View Projects</button>
        </div>
        <div
          id="btn"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-white/60 backdrop-blur text-black border border-black/90 focus:outline-none shadow-xl focus:ring-4 focus:ring-white/20 font-medium rounded-sm text-sm px-5 py-2.5 transition hover:translate-y-2 duration-200 hover:bg-white/30 cursor-pointer"
        >
          Contact Me
        </div>
      </div>
    </section>
  );
};

export default Introduction;
