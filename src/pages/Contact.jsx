import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ublcblp", "template_py40fjt", form.current, {
        publicKey: "RgjWQ4NbfCe0dxSOg",
      })
      .then(
        () => {
          Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out. I’ll get back to you soon.",
          confirmButtonColor: "#ebb66b",
        });
        form.current.reset();
      },
        (error) => {
           Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          confirmButtonColor: "#ebb66b",
        });
        console.log("FAILED...", error.text);
      }
    );
};

  return (
    <>
      <section className="bg-gradient-to-br from-[#1b1f1b] via-[#212722] to-[#1b1f1b] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto border border-[#ebb66b] rounded-2xl bg-[#2A2F2B]/40 backdrop-blur-lg shadow-xl p-10 md:p-14">
          <div className="text-center mb-12 animate-fadeSlideUp">
            <p className="text-[#ebb66b] text-sm font-semibold uppercase tracking-widest">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">Contact Me</h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              I’m open to freelance work or collaborative opportunities. Let's build something great together.
            </p>
          </div>

          {/* EmailJS Form */}
          <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeSlideUp">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-4 rounded-lg bg-[#2A2F2B] border border-[#ebb66b] text-white focus:outline-none focus:ring-2 focus:ring-[#ebb66b]/80 transition duration-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-4 rounded-lg bg-[#2A2F2B] border border-[#ebb66b] text-white focus:outline-none focus:ring-2 focus:ring-[#ebb66b]/80 transition duration-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="md:col-span-2 p-4 rounded-lg bg-[#2A2F2B] border border-[#ebb66b] text-white focus:outline-none focus:ring-2 focus:ring-[#ebb66b]/80 transition duration-300"
            />
            <select
              name="topic"
              className="md:col-span-2 p-4 rounded-lg bg-[#2A2F2B] border border-[#ebb66b] text-white focus:outline-none focus:ring-2 focus:ring-[#ebb66b]/80"
            >
              <option value="">Choose a topic...</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="design">UI/UX Design</option>
            </select>
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="md:col-span-2 p-4 rounded-lg bg-[#2A2F2B] border border-[#ebb66b] text-white focus:outline-none focus:ring-2 focus:ring-[#ebb66b]/80 resize-none"
            ></textarea>

            <div className="md:col-span-2 flex items-start gap-3">
              <input type="checkbox" id="terms" className="accent-[#ebb66b]" required />
              <label htmlFor="terms" className="text-sm text-gray-300">
                I accept the terms and conditions.
              </label>
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="bg-[#ebb66b] text-[#212722] px-10 py-3 rounded-full font-bold text-lg hover:bg-[#f6cd8b] transition-all duration-300 shadow-md hover:shadow-2xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Animation Styles */}
        <style>{`
          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeSlideUp {
            animation: fadeSlideUp 1.2s ease forwards;
          }
        `}</style>
      </section>
    </>
  );
};

export default Contact;
