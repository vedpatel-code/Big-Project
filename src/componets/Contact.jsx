import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbw9Sl0lBd-xQVNjBA3UW5DD032ctrHa05jO2wRBR9eLpkJJSxDuVObWKqLxJy4rd7fLFQ/exec"; // Replace with your actual Google Script or API endpoint

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center 
      bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gradientBackground.png')]
      bg-no-repeat bg-cover bg-center 
      bg-gradient-to-br from-indigo-100 via-white to-indigo-50 
      px-4 text-sm"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-slate-800 
        bg-white/90 backdrop-blur-md shadow-2xl 
        rounded-2xl p-8 w-full max-w-md border border-slate-200"
      >
        <p className="text-xs bg-indigo-200 text-indigo-600 font-medium px-3 py-1 rounded-full">
          Contact Us
        </p>
        <h1 className="text-4xl font-bold py-4 text-center">
          Let’s Get In Touch.
        </h1>
        <p className="max-md:text-sm text-gray-500 pb-10 text-center">
          Or just reach out manually to us at{" "}
          <a
            href="mailto:vedpatel2009d@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            vedpatel2009d@gmail.com
          </a>
        </p>

        <div className="w-full">
          <label className="font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-10 w-full px-3 border border-slate-300 rounded-full outline-none mt-2 mb-4 focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your full name"
            required
          />

          <label className="font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-10 w-full px-3 border border-slate-300 rounded-full outline-none mt-2 mb-4 focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your email"
            required
          />

          <label className="font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-slate-300 rounded-lg resize-none outline-none mt-2 focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your message"
            required
          />

          <button
            type="submit"
            className="mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition"
          >
            Submit Form
          </button>
        </div>

        {/* ✅ Back to Home Button */}
        <Link
          to="/"
          className="mt-6 text-indigo-600 hover:text-indigo-800 text-sm font-medium underline transition"
        >
          ← Back to Home
        </Link>
      </form>
    </div>
  );
};

export default Contect;
