import React, { useEffect, useState } from "react";
import PortfolioCarousel from "./components/PortfolioCarousel"; // Updated path to ensure PortfolioCarousel exists in components folder

export default function FullLandingPage() {
  const [activeSection, setActiveSection] = useState("about");
  const [navSolid, setNavSolid] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const sections = [
    { id: "about", label: "About" },
    { id: "companies", label: "Companies" },
    { id: "case-studies", label: "Case Studies" },
    { id: "projects", label: "Projects" },
    { id: "leadership", label: "Leadership" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavSolid(scrollY > 80);
      setShowTop(scrollY > 300);

      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, offset: el ? el.offsetTop - 100 : 0 };
      });

      const current = offsets.reduce((acc, sec) => (scrollY >= sec.offset ? sec.id : acc), "about");
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const logos = [
    { name: 'Love Her', src: '/logos/loveher.png', href: 'https://example.com' },
    { name: 'Siboney Consultants', src: '/logos/siboney.png', href: '/about' },
    { name: 'Snowflake', src: '/logos/snowflake.png' },
    { name: 'Amazon', src: '/logos/amazon.png' }
  ];

  const caseStudies = [
    { title: "E-Commerce IT Roadmap (Love Her)", description: "Planned and implemented a technology roadmap for a women’s self-care startup, leading multiple cross-functional initiatives.", outcome: "Delivered a scalable platform with improved onboarding and reliability." },
    { title: "Siboney Consultants CIO Role", description: "As CIO and Program Manager, created business technology roadmaps, implemented GDPR and NIST-compliant strategies, and trained employees.", outcome: "Improved compliance, reduced risk, and strengthened technology leadership." },
    { title: "Snowflake Technical Writer Role", description: "Produced technical documentation and supported information architecture for enterprise cloud solutions.", outcome: "Enhanced clarity and accelerated onboarding for teams." }
  ];

  const gradProjects = [
    { title: "Information Architecture at Scale", description: "Designed ontologies, taxonomies, and metadata schemas for improved knowledge management." },
    { title: "AI-NLP Integration on Azure", description: "Built NLP solutions using Azure AI-Language for automated classification and entity recognition." },
    { title: "Bitcoin Startup Lab Capstone", description: "Co-led development of a blockchain-based event prediction platform with synthetic wallets and live score updates." }
  ];

  const leadershipHighlights = [
    "Founded Siboney Consultants, LLC, a woman-owned IT & IM consulting business.",
    "CIO and Program Manager with expertise in cybersecurity, GDPR compliance, and technology strategy.",
    "Led cross-functional teams integrating DevOps and project management practices.",
    "Mentored employees and vendors to improve technical adoption and governance." 
  ];

  const keySkills = [
    "Technical Writing", "Project & Program Management", "Information Architecture & Metadata Design", "Cloud Platforms (AWS, Azure)", "AI & NLP Integration", "Cybersecurity & NIST Compliance", "GDPR & Data Privacy Policies", "DevOps & Team Leadership"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navSolid ? "bg-white shadow" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold text-indigo-600">Dottie</div>
          <div className="hidden md:flex space-x-6">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollToSection(s.id)} className={`transition-colors ${activeSection === s.id ? "text-indigo-600 font-semibold" : "text-slate-600 hover:text-indigo-500"}`}>{s.label}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero / About */}
      <section id="about" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Dottie – Technical Writer, Project Manager & CIO</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Expertise in technical writing, program management, and IT strategy, spanning startups, cloud platforms, and consulting leadership.
        </p>
      </section>

      {/* Companies Carousel */}
      <section id="companies" className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">Companies I’ve Worked With</h2>
        <PortfolioCarousel logos={logos} visible={4} autoplayInterval={2500} height={84} />
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{cs.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">{cs.description}</p>
              <p className="text-sm font-medium text-indigo-600">Outcome: {cs.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grad School Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Graduate School Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {gradProjects.map((proj, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-sm text-slate-600 mb-4 flex-grow">{proj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-slate-100 py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Leadership Highlights</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-slate-700">
          {leadershipHighlights.map((point, idx) => <li key={idx}>{point}</li>)}
        </ul>
      </section>

      {/* Resume + Key Skills */}
      <section id="resume" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Resume & Key Skills</h2>
        <p className="mb-6 text-slate-600 max-w-xl mx-auto">Download my resume and view key technical and leadership skills.</p>
        <a href="/files/Dottie_Resume.pdf" download className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow text-lg font-medium mb-6 inline-block">Download Resume</a>
        <div className="max-w-4xl mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-700">
          {keySkills.map((skill, idx) => <span key={idx} className="bg-slate-200 rounded-lg px-4 py-2 text-sm font-medium">{skill}</span>)}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p className="max-w-xl mx-auto mb-8 text-slate-300">Interested in collaborating or learning more about my work? Reach out below.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="mailto:yourname@example.com" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow text-lg font-medium">Email Me</a>
          <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-xl shadow text-lg font-medium">LinkedIn</a>
        </div>
      </section>

      {/* Back to Top */}
      {showTop && (
        <button onClick={scrollToTop} className="fixed bottom-6 right-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg">Back to Top</button>
      )}
    </div>
  );
}
