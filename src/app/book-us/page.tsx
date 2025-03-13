"use client";
import { useState } from "react";

export default function BookUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Booking request sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send booking request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-2xl font-bold text-yellow-400 mb-2 text-center">Book The Parkways</h1>
        
        <p className="text-center text-sm mb-4">Check out our Electronic Press Kit for more details.</p>
        <a
          href="/EPK"
          className="w-full text-center py-2 px-4 rounded-lg bg-green text-black font-bold text-md shadow-md hover:bg-yellow-300 transition"
        >
          View Our EPK
        </a>

        <p className="text-center text-sm mt-4 mb-2">Fill out the form below to send us a message!</p>

        <form onSubmit={handleSubmit} className="w-full space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green hover:bg-green-400 rounded text-black font-bold transition"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
