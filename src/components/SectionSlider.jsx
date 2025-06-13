'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'dream', label: 'Dream' },
  { id: 'prepare', label: 'Prepare' },
  { id: 'process', label: 'Process' },
  { id: 'fly', label: 'Fly' },
  { id: 'success', label: 'Success' },
];

export default function SectionSlider() {
  const [activeSection, setActiveSection] = useState(null); // removed string typing

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // update state with visible section's id
          }
        });
      },
      { threshold: 0.6 } // triggers when 60% of section is visible
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el); // start watching this section
    });

    return () => observer.disconnect(); // cleanup on unmount
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // smooth scroll to section
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
      {sections.map((sec) => (
        <button
          key={sec.id}
          onClick={() => handleClick(sec.id)}
          className={`w-4 h-4 rounded-full border-2 transition duration-300 ${
            activeSection === sec.id
              ? 'bg-green-600 border-blue-600 scale-125' // active dot
              : 'bg-white border-white hover:bg-blue-500' // inactive dot
          }`}
          title={sec.label}
        ></button>
      ))}
    </div>
  );
}
