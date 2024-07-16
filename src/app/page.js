"use client";

import Popup from "./components/Popup";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/courses/page";
import Program from "./components/Program/page";
// import Chatbot from "./components/chatbot";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Courses />
      <Program />
      <Popup />
    </main>
  );
}
