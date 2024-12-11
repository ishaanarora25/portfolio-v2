import * as React from "react"
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";

export const Head = () => {
  return (
    <>
      <title>Home</title>
    </>
  )
}

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}