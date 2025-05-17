import website_image from "../assets/website_image.png";
import gsap from "gsap";
import { useEffect,useRef } from "react";

const Project = () => {
    const boxRef = useRef([]);



  useEffect(() => {
    const target = boxRef.current.filter(Boolean);
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              target,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.8,
                ease: "elastic.out(1,0.5)",
                stagger: 0.5,
                delay: 0.1,
              }
            );
            observer.disconnect();
          }
        });
      },
      { threshold: 0.001 }
    );
    if(target.length > 0){
      observer.observe(target[0])
    }
    return () => observer.disconnect()
  }, []);
  return (
    <section
      id="projects"
      className="min-h-screen w-full  border-t border-white flex flex-col justify-center items-center py-1 bg-[#000000] pt-20 pb-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl text-white font-bold text-center mb-8">
          Featured Projects
        </h2>

   
        <div className=" gap-6 flex flex-wrap  ">
          {/* Project 1 */}
          <div ref={(el) => (boxRef.current[0] = el)} className="p-6 rounded-xl h-auto border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(255,255,240,0.2)] transition-all">
            <img
              className="rounded-xl mb-8"
              src={website_image}
              alt="mousehaus"
            />
            <h3 className="text-xl text-white font-semibold mb-4">
              Web Application
            </h3>
            <h4 className="mb-2 text-white italic underline decoration-1 cursor-pointer">
              <a
                href="https://mousehaus.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                mousehaus.vercel.app
              </a>
            </h4>
            <p className="text-gray-400 mb-2">
              Developed a responsive e-commerce platform for computer mice,
              emphasizing product discoverability and user experience.
            </p>
            <p className="text-gray-400 mb-2">
              Built client-side UI with React and Tailwind CSS; implemented
              server-side logic using Node.js and Express.js.
            </p>
            <p className="text-gray-400 mb-8">
              Integrated MongoDB; implemented dynamic product routing and
              filters.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-[#FFFF00] py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Project 2 */}
          <div ref={(el) => (boxRef.current[1] = el)} className="p-6 h-auto rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(255,255,240,0.2)] transition-all"
          >
            {/* <img className="rounded-xl mb-8" src={another_project} alt="Another Project" /> */}
            <h3 className="text-xl text-white font-semibold mb-4">
              Portfolio Website
            </h3>
            <h4 className="mb-2 text-white italic underline decoration-1 cursor-pointer">
              <a
                href="https://theaashishh.github.io/theaashishh"
                target="_blank"
                rel="noreferrer"
              >
                theaashishh.github.io/theaashishh
              </a>
            </h4>

            <p className="text-gray-400 mb-2">
              Created a sleek, personal developer portfolio using modern React
              and Tailwind CSS techniques.
            </p>
            <p className="text-gray-400 mb-8">
              Includes animated intro, project showcase, and responsive contact
              form.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TailwindCSS", "emailjs", "GSAP"].map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/10 text-[#FFFF00] py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 3 */}
          {/* <div className="p-6 h-auto rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(255,255,240,0.2)] transition-all">
            <img className="rounded-xl mb-8" src={third_project} alt="Third Project" />
            <h3 className="text-xl text-white font-semibold mb-4">
              Chai Stall @ Mahakumbh
            </h3>
            <h4 className="mb-2 text-white italic underline decoration-1 cursor-pointer">
              <a
                href="https://mahakumbhchai.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                mahakumbhchai.vercel.app
              </a>
            </h4>
            <h4 className="mb-4 text-blue-400 underline cursor-pointer text-sm">
              <a
                href="https://github.com/yourusername/chai-mahakumbh"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo →
              </a>
            </h4>
            <p className="text-gray-400 mb-2">
              A digital menu for our physical chai stall at Mahakumbh, featuring
              QR scan and order collection system.
            </p>
            <p className="text-gray-400 mb-8">
              Developed with a focus on simplicity and accessibility for
              pilgrims.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "TailwindCSS", "Vite"].map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-500/10 text-[#FFFF00] py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Project;
