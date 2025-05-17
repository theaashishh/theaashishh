import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    <header
      className={`p-4 sticky top-0 z-50 shadow-md ${
        isOpen ? "block" : "bg-white/30 text-black backdrop-blur"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center">
        <a
          href="#introduction"
          className="text-xl leading-8 font-bold tracking-wider cursor-pointer"
          onClick={(e)=>{
            e.preventDefault();
            gsap.to(window,{
              duration:1,
              scrollTo:"#introduction",
              ease:'power.inOut',
              
            })
          }}
        >
          Aashish.<span className="text-[#ff220C] font-bold">Dev</span>
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)
            }
            className="text-xl focus:outline-none scale-120 curson-pointer"
          >
            ☰
          </button>
        </div>

        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#about" className="hover:text-gray-500"
                      onClick={(e)=>{
            e.preventDefault();
            gsap.to(window,{
              duration:1,
              scrollTo:"#about",
              ease:'power.inOut',
              
            })
          }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-500"
                      onClick={(e)=>{
            e.preventDefault();
            gsap.to(window,{
              duration:1,
              scrollTo:"#projects",
              ease:'power.inOut',
              
            })
          }}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-500"
                      onClick={(e)=>{
            e.preventDefault();
            gsap.to(window,{
              duration:1,
              scrollTo:"#contact",
              ease:'power.inOut',
              
            })
          }}
          >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white/10 backdrop-blur-[6px] z-50 flex flex-col items-center justify-center text-center"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-3xl font-bold"
          >
            ×
          </button>
          <ul className="flex flex-col gap-10 text-xl mt-20">
            <li>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
