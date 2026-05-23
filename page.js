"use client";

import { useState } from "react";

export default function PortfolioWebsite() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("sending");

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {

        setStatus("sent");

        setForm({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 3000);

      } else {

        setStatus("idle");
        alert("Failed to send message.");

      }

    } catch (error) {

      console.log(error);

      setStatus("idle");

      alert("Something went wrong.");

    }

  };

  return (

    <div className="min-h-screen bg-[#f5efe7] text-[#1d1d1d]">

      {/* HERO SECTION */}

      <section className="px-6 md:px-16 pt-16 pb-20">

        <div className="max-w-5xl">

          <p className="text-[#8f6548] uppercase tracking-[0.28em] text-sm font-semibold mb-4">
            Civil Engineer
          </p>

          <h1 className="text-5xl md:text-7xl leading-[1] font-serif font-medium tracking-[-0.04em] text-[#2b1408] mb-6">
            Hi, I’m Sumeet
          </h1>

          <p className="text-[#5f544c] text-[20px] leading-[1.8] max-w-4xl mb-12">

            I’m Sumeet Hole, pursuing bachelor's degree in Civil Engineering from Government College
            of Engineering, Nagpur. I’m passionate about sustainability,
            AI automation, innovation and solving real-world problems through
            creative ideas.

          </p>

          <div className="flex flex-wrap items-center gap-8">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sumeethole1@gmail.com"
              target="_blank"
              className="bg-[#3a1d0d] text-white px-9 py-4 rounded-2xl text-lg font-medium shadow-lg hover:opacity-90 transition"
            >
              Contact Me
            </a>

            <div className="flex flex-col text-[17px] text-[#544941] leading-relaxed">

              <p>
                +91 8459956368
              </p>

              <p>
                sumeethole1@gmail.com
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section className="px-6 md:px-16 py-20 border-t border-[#e7ddd1]">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-serif text-[#2b1408] mb-14">
            About Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#f8f3ec] border border-[#e8ddd0] rounded-[2rem] p-10 hover:shadow-lg transition duration-300">

              <div className="w-16 h-16 rounded-full bg-[#efe3d6] flex items-center justify-center mb-8 text-3xl">
                🎓
              </div>

              <h3 className="text-3xl font-serif text-[#8f6548] mb-5">
                Education
              </h3>

              <p className="text-[#5f544c] text-lg leading-relaxed">
                Civil Engineering student at Government College of Engineering,
                Nagpur.
              </p>

            </div>

            <div className="bg-[#f8f3ec] border border-[#e8ddd0] rounded-[2rem] p-10 hover:shadow-lg transition duration-300">

              <div className="w-16 h-16 rounded-full bg-[#efe3d6] flex items-center justify-center mb-8 text-3xl">
                💼
              </div>

              <h3 className="text-3xl font-serif text-[#8f6548] mb-5">
                Skills
              </h3>

              <p className="text-[#5f544c] text-lg leading-relaxed">
                Strategy, Research, Communication and Critical Thinking.
              </p>

            </div>

            <div className="bg-[#f8f3ec] border border-[#e8ddd0] rounded-[2rem] p-10 hover:shadow-lg transition duration-300">

              <div className="w-16 h-16 rounded-full bg-[#efe3d6] flex items-center justify-center mb-8 text-3xl">
                ⭐
              </div>

              <h3 className="text-3xl font-serif text-[#8f6548] mb-5">
                Interests
              </h3>

              <p className="text-[#5f544c] text-lg leading-relaxed">
                AI, Sustainability, Geopolitics and Startups.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section className="px-6 md:px-16 py-24 border-t border-[#e7ddd1]">

        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-5xl font-serif text-[#2b1408] mb-5">
            Get In Touch
          </h2>

          <p className="text-[#6d635c] text-xl mb-12">
            Feel free to connect with me.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="bg-[#f8f3ec] border border-[#ddd2c4] rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#8f6548]"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="bg-[#f8f3ec] border border-[#ddd2c4] rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#8f6548]"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="bg-[#f8f3ec] border border-[#ddd2c4] rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#8f6548]"
              required
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#3a1d0d] text-white px-10 py-5 rounded-2xl text-lg font-medium hover:opacity-90 transition w-fit mx-auto disabled:opacity-70"
            >

              {
                status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Sent ✓"
                  : "Send Message"
              }

            </button>

          </form>

        </div>

      </section>

    </div>

  );
}