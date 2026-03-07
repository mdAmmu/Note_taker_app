"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, NotebookPen, Cloud, ShieldCheck } from "lucide-react";
import Navbar from "../Navbar";
import Features from "./Features";
import Review from "./Review";
import Contact from "./Contact";

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 ">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center mt-40">
          <h1 className="text-5xl font-bold mb-6">
            Capture Your Ideas Instantly
          </h1>
          <p className="text-lg mb-8 text-indigo-100">
            A simple, powerful note-taking app to organize your thoughts,
            tasks, and ideas anytime, anywhere.
          </p>
          <button onClick={() => navigate("/dashboard")} className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold shadow hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* User Reviews */}
      <Review />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        © {new Date().getFullYear()} Note Taker App. All rights reserved.
      </footer>
    </div>
  );
}



