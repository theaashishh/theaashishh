import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
  })



  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({name:"",email:"",message:""})
      })
      .catch(() => alert("Oops! something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center bg-[#ffff00] text-gray-800 px-6 py-12"
    >
      <div className="max-w-xl w-full text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name..."
            value={formData.name}
            className="bg-white/5 border border-black/60 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black-100 focus:bg-blue-500/10"
            onChange={(e)=> setFormData({...formData, name:e.target.value})}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            className="bg-white/5 border border-black/60 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black-100 focus:bg-blue-500/10"
            onChange={(e)=> setFormData({...formData, email:e.target.value})}

          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={(e)=> setFormData({...formData, message:e.target.value})}
            className="bg-white/5 border border-black/60 rounded px-4 py-3 text-black transition focus:outline-none focus:border-black-100 focus:bg-blue-500/10"
          ></textarea>
          <button className="bg-[#000000] backdrop-blur text-white border border-black/90 focus:outline-none shadow-xl focus:ring-4 focus:ring-white/20 font-medium rounded-sm text-sm px-5 py-2.5 transition hover:translate-y-2 duration-200 hover:bg-white/30 hover:text-black/30 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
