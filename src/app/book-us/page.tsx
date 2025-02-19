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
    <main className="min-h-screen p-6 bg-black text-white flex justify-center items-center">
      <div className="max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Book The Parkways</h1>
        <p className="mb-4">Fill out the form below to send us a message!</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Your Name</label>
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
            <label className="block text-sm font-medium">Your Email</label>
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
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            />
          </div>

          <button type="submit" className="w-full p-2 border-2 border-white bg-green-600 hover:bg-green-500 rounded text-white font-bold">
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
