import website_image from '../assets/website_image.png'
const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full h-[110vh] border-t border-white flex flex-col justify-center bo items-center  py-1  bg-[#000000]"
    >
      <div className="max-w-5xl mx-auto px-4" >
      
      <h2 className="text-5xl text-white font-bold text-center mb-8 ">Featured Projects</h2>
      <div className="gap-6 ">
        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500-/30 hover:shadow-[0_2px_8px_rgba(255,255,240,0.2)] transition-all">
        <img className='rounded-xl mb-8' src={website_image}/>
          <h3 className="text-xl text-white font-semibold mb-4">Web Application</h3>
          <h4 className="mb-4 text-white italic underline decoration-1 cursor-pointer"><a href="https://mousehaus.vercel.app" target="_blank">mousehaus.vercel.app</a></h4>
          <p className="text-gray-400 mb-2">
            Developed a responsive e-commerce platform for computer mice,
            emphasizing product discoverability and user experience.
          </p>
          <p className="text-gray-400 mb-2">
            Built client-side UI with React and Tailwind CSS; implemented
            server-side logic using Node.js and Express.js.
          </p>
          <p className="text-gray-400 mb-8">
            Integrated MongoDB;
            implemented dynamic product routing and filters.
          </p>
          <div>
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
        </div>
      </div>
    </section>
  );
};

export default Project;
