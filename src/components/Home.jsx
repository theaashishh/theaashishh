import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useRef, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Introduction from "./Introduction";
import { ScrollSmoother } from 'gsap/all';

// Register plugin once
gsap.registerPlugin(ScrollToPlugin);


const Home = () => {

    const scrollPos = useRef(window.scrollY);

  useEffect(() => {
    const onWheel = (event) => {
      event.preventDefault();

      // Calculate new target scroll position
      let delta = event.deltaY;
      let target = scrollPos.current + delta;

      // Clamp the target scroll position between 0 and max scroll
      target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));

      // Animate scroll to target using GSAP
      gsap.to(window, {

        scrollTo: target,
        duration: 0.4,
        ease: "power3.out",
        onUpdate: () => {
          scrollPos.current = window.scrollY;
        }
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" >
      <Header />
      <main className="flex-grow">
        <Introduction />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
