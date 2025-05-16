import { useEffect, useRef } from "react";
import gsap from "gsap";

const About = () => {
  const frontendSkills = ["HTML", "CSS", "React", "JavaScript", "Tailwindcss"];
  const backendSkills = ["Node.js", "Express.js", "MySQL"];
  const skillRef = useRef([]);
  const edRef = useRef()
  const cerRef = useRef()


  useEffect(() => {
    const target = skillRef.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              target,
              { x: 30, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1.8,
                ease: "elastic.out(1,0.5)",
                stagger: 0.5,
                delay: 0.3,
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if(target.length > 0){
      observer.observe(target[0])
    }
    return () => observer.disconnect()
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center py-20 bg-[#000000] "

    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-white text-center ">
          About ME
        </h2>
        <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-white">
            I’m a passionate Web Developer actively learning to build modern,
            full-stack web applications.
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 ">
              <h3 className="text-md font-bold mb-4 text-white">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-[#FFFF11] py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-blue-500/20  hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    ref={(el) => (skillRef.current[i] = el)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 ">
              <h3 className="text-md font-bold mb-4 text-white">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-[#FFFF11] py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                     ref={(el) => (skillRef.current[i + frontendSkills.length] = el)}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold list-inside text-white mb-4">
              {" "}
              🏫 Education
            </h3>
            <ul className="list-disc list-inside text-white">
              <li>
                Bachelors in Information Technology - Mumbai University
                (2022-2025)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl head border-white/10 border hover:-translate-y-1 transition-all " >
            <h3 className="text-xl font-bold list-inside text-white mb-4">
              {" "}
              🧾 Certification
            </h3>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Java Backend Development with Spring Boot and MySQL (Offline Course)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
