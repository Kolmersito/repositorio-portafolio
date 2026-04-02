import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Technologies", "About Me", "Habilities", "Professional Profile"];

const TECHNOLOGIES = [
  {
    category: "Languages",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
      </svg>
    ),
    items: ["JavaScript / TypeScript", "Python / Go / C#", "Kotlin", "Bash"],
  },
  {
    category: "Frameworks & Libraries",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    items: ["React / Tailwind CSS", "React Native / Jetpack Compose", "Redux / RTK"],
  },
  {
    category: "Databases",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    items: ["PostgreSQL / MySQL / SQL Server"],
  },
  {
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    items: ["DotNet / Express / FastAPI", "REST APIs / Microservices"],
  },
  {
    category: "Cloud & DevOps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: ["Supabase", "Bash / Linux"],
  },
  {
    category: "Data Science",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    items: ["scikit-learn / pandas"],
  },
];

const HABILITIES = [
  {
    title: "Well-Rounded Expertise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    description: "You get a developer with solid technical skills across mobile, web, backend, and AI — always delivering with care and precision.",
  },
  {
    title: "Creative Thinking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M20 12V22H4V12" />
        <path d="M22 7H2v5h20V7z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </svg>
    ),
    description: "I combine logic with creativity, proposing solutions that are not only functional but also thoughtful and intuitive.",
  },
  {
    title: "Transparent Collaboration",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    description: "Clear communication, consistent updates, and a shared sense of purpose — I treat every project as a team effort.",
  },
  {
    title: "Always Evolving",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    description: "Whether it's learning a new framework or exploring better patterns, I'm constantly improving to give more value in every project.",
  },
  {
    title: "Cross-Platform Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    description: "I bring experience in building apps for Android, web, and even wearables — delivering consistent quality across devices.",
  },
  {
    title: "Strong Problem-Solving",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    description: "From abstraction to logic, I approach each challenge with structured thinking and creative reasoning.",
  },
  {
    title: "Quick Learner",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    description: "I adapt rapidly to new technologies, workflows, and environments.",
  },
  {
    title: "Flexible & Adaptive",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    description: "Every project is different — I adjust, improve, and evolve based on context and team dynamics.",
  },
];

// Gorilla SVG placeholder — replace with your actual images
function GorillaPlaceholder({ style = {}, className = "" }) {
  return (
    <div className={className} style={{ position: "relative", ...style }}>
      <svg
        viewBox="0 0 400 420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", opacity: 0.45, filter: "sepia(0.3)" }}
      >
        {/* Stylized gorilla sketch outline */}
        <ellipse cx="200" cy="170" rx="110" ry="130" fill="none" stroke="#7a5c6e" strokeWidth="1.2" strokeDasharray="4 2" />
        <ellipse cx="200" cy="140" rx="75" ry="85" fill="none" stroke="#7a5c6e" strokeWidth="1.5" />
        <ellipse cx="175" cy="120" rx="18" ry="22" fill="none" stroke="#7a5c6e" strokeWidth="1.2" />
        <ellipse cx="225" cy="120" rx="18" ry="22" fill="none" stroke="#7a5c6e" strokeWidth="1.2" />
        <ellipse cx="175" cy="125" rx="8" ry="10" fill="#c4b5a5" opacity="0.5" />
        <ellipse cx="225" cy="125" rx="8" ry="10" fill="#c4b5a5" opacity="0.5" />
        <circle cx="175" cy="126" r="4" fill="#7a5c6e" opacity="0.6" />
        <circle cx="225" cy="126" r="4" fill="#7a5c6e" opacity="0.6" />
        <path d="M185 155 Q200 170 215 155" fill="none" stroke="#7a5c6e" strokeWidth="1.5" />
        <ellipse cx="200" cy="175" rx="30" ry="18" fill="#b8a898" opacity="0.3" />
        <path d="M130 200 Q90 230 100 280 Q120 310 150 300" fill="none" stroke="#7a5c6e" strokeWidth="1.2" strokeDasharray="3 2" />
        <path d="M270 200 Q310 230 300 280 Q280 310 250 300" fill="none" stroke="#7a5c6e" strokeWidth="1.2" strokeDasharray="3 2" />
        <text x="200" y="380" textAnchor="middle" fill="#9a7a8a" fontSize="11" fontFamily="Georgia, serif" opacity="0.6">
          [ place your image here ]
        </text>
      </svg>
    </div>
  );
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setVisible((v) => ({ ...v, [e.target.id]: true }));
        });
      },
      { threshold: 0.12 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const registerRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300&family=Jost:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #d4c8bb;
          --bg-light: #ddd3c8;
          --plum: #6b4260;
          --plum-light: #8a6478;
          --plum-muted: #a08898;
          --text: #5a3a52;
          --text-light: #7a5a70;
          --border: rgba(107, 66, 96, 0.2);
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          font-family: 'Jost', sans-serif;
          color: var(--text);
          overflow-x: hidden;
        }

        /* ── NAVBAR ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 3rem;
          height: 58px;
          background: var(--bg);
          border-bottom: 1.5px solid var(--border);
          transition: box-shadow 0.3s;
        }
        .nav.scrolled { box-shadow: 0 2px 20px rgba(107,66,96,0.08); }
        .nav-brand {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--plum);
          letter-spacing: 0.02em;
          cursor: pointer;
        }
        .nav-links { display: flex; gap: 2.5rem; list-style: none; }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: var(--plum-muted);
          letter-spacing: 0.05em;
          transition: color 0.2s;
        }
        .nav-links button:hover { color: var(--plum); }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 80px 0 0;
        }
        .hero-content {
          flex: 0 0 55%;
          padding: 0 5rem 0 5rem;
          z-index: 2;
        }
        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 5vw, 4.5rem);
          font-weight: 700;
          line-height: 1.1;
          color: var(--plum);
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.9s ease 0.2s forwards;
        }
        .hero-sub {
          font-size: 0.95rem;
          font-weight: 300;
          color: var(--text-light);
          line-height: 1.7;
          max-width: 420px;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.45s forwards;
        }
        .btn-contact {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: var(--plum);
          color: #e8ddd5;
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none; cursor: pointer;
          border-radius: 2px;
          transition: background 0.25s, transform 0.2s;
          opacity: 0;
          animation: fadeUp 0.9s ease 0.65s forwards;
        }
        .btn-contact:hover { background: var(--plum-light); transform: translateY(-2px); }
        .hero-image {
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 55%;
          overflow: hidden;
          pointer-events: none;
        }
        .hero-image-inner {
          width: 100%; height: 100%;
          opacity: 0;
          animation: fadeIn 1.2s ease 0.3s forwards;
        }

        /* ── SECTION BASE ── */
        .section {
          padding: 8rem 5rem;
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--plum);
          text-align: center;
          margin-bottom: 4rem;
        }

        /* fade-in on scroll */
        .fade-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── TECHNOLOGIES ── */
        #technologies {
          background: var(--bg-light);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem 4rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .tech-group-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--plum);
          margin-bottom: 1.2rem;
        }
        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.85rem;
          font-weight: 300;
          color: var(--text-light);
          margin-bottom: 0.65rem;
        }
        .tech-item svg { color: var(--plum-muted); flex-shrink: 0; }
        .tech-footer {
          text-align: center;
          margin-top: 3.5rem;
          font-size: 0.82rem;
          font-weight: 300;
          color: var(--plum-muted);
          font-style: italic;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        /* ── ABOUT ── */
        #about {
          display: flex;
          align-items: center;
          gap: 5rem;
          padding: 8rem 7rem;
          flex-direction: row;
        }
        .about-image-wrap {
          flex: 0 0 320px;
          height: 320px;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(107,66,96,0.07);
          display: flex; align-items: center; justify-content: center;
        }
        .about-content { flex: 1; }
        .about-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.8rem, 2.5vw, 2.4rem);
          font-weight: 700;
          color: var(--plum);
          margin-bottom: 1.5rem;
        }
        .about-text {
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--text-light);
          line-height: 1.85;
          margin-bottom: 1.1rem;
        }

        /* ── HABILITIES ── */
        #habilities {
          background: var(--bg-light);
          border-top: 1px solid var(--border);
        }
        .hab-subtitle {
          text-align: center;
          font-size: 0.85rem;
          font-weight: 300;
          color: var(--plum-muted);
          margin-top: -3rem;
          margin-bottom: 4rem;
        }
        .hab-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.5rem 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .hab-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1rem 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .hab-card.visible { opacity: 1; transform: translateY(0); }
        .hab-icon {
          color: var(--plum-muted);
          margin-bottom: 1rem;
        }
        .hab-card-title {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--plum);
          margin-bottom: 0.7rem;
          letter-spacing: 0.02em;
        }
        .hab-card-desc {
          font-size: 0.78rem;
          font-weight: 300;
          color: var(--text-light);
          line-height: 1.7;
        }

        /* ── PROFESSIONAL PROFILE ── */
        #profile {
          text-align: center;
          padding: 8rem 5rem;
          border-top: 1px solid var(--border);
        }
        .profile-text {
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--text-light);
          line-height: 1.9;
          max-width: 650px;
          margin: 0 auto 2.5rem;
        }
        .profile-links {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .profile-link {
          padding: 0.6rem 1.8rem;
          border: 1.5px solid var(--plum);
          color: var(--plum);
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: none;
          cursor: pointer;
          border-radius: 2px;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
        }
        .profile-link:hover { background: var(--plum); color: #e8ddd5; }

        /* ── FOOTER ── */
        footer {
          text-align: center;
          padding: 2rem;
          font-size: 0.72rem;
          color: var(--plum-muted);
          border-top: 1px solid var(--border);
          letter-spacing: 0.05em;
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .nav { padding: 0 1.5rem; }
          .hero-content { padding: 0 2rem; flex: 0 0 60%; }
          .section { padding: 5rem 2rem; }
          .tech-grid { grid-template-columns: repeat(2, 1fr); }
          .hab-grid { grid-template-columns: repeat(2, 1fr); }
          #about { flex-direction: column; padding: 5rem 2rem; gap: 3rem; }
          .about-image-wrap { flex: none; width: 240px; height: 240px; }
        }
        @media (max-width: 600px) {
          .nav-links { display: none; }
          .hero-image { opacity: 0.3; }
          .tech-grid { grid-template-columns: 1fr; }
          .hab-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <span className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Fernando Villafaña Alfonseca
        </span>
        <ul className="nav-links">
          {[
            ["Technologies", "technologies"],
            ["About Me", "about"],
            ["Habilities", "habilities"],
            ["Professional Profile", "profile"],
          ].map(([label, id]) => (
            <li key={id}>
              <button onClick={() => scrollTo(id)}>{label}</button>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Fernando Villafaña
            <br />
            Alfonseca
          </h1>
          <p className="hero-sub">
            Software Developer that loves to learn, always looking for new challenges and opportunities to grow.
          </p>
          <button className="btn-contact" onClick={() => scrollTo("profile")}>
            Contact Me
          </button>
        </div>
        <div className="hero-image">
          <div className="hero-image-inner">
            {/* Replace GorillaPlaceholder with your actual <img> tag */}
            <GorillaPlaceholder style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section
        id="technologies"
        className={`section fade-section ${visible["technologies"] ? "visible" : ""}`}
        ref={registerRef("technologies")}
      >
        <h2 className="section-title">Technologies I've worked with</h2>
        <div className="tech-grid">
          {TECHNOLOGIES.map((group) => (
            <div key={group.category}>
              <p className="tech-group-title">{group.category}</p>
              {group.items.map((item) => (
                <div className="tech-item" key={item}>
                  {group.icon}
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="tech-footer">
          Although I've gained solid experience with these technologies, I'm always open to learning new tools and adapting to the needs of each project.
        </p>
      </section>

      {/* ABOUT ME */}
      <section
        id="about"
        className={`fade-section ${visible["about"] ? "visible" : ""}`}
        ref={registerRef("about")}
        style={{ display: "flex", alignItems: "center", gap: "5rem", padding: "8rem 7rem", minHeight: "80vh" }}
      >
        <div className="about-image-wrap">
          {/* Replace with your actual circular image */}
          <GorillaPlaceholder style={{ width: "320px", height: "320px" }} />
        </div>
        <div className="about-content">
          <h2 className="about-title">About Fernando Villafaña Alfonseca</h2>
          <p className="about-text">I am a person that describes himself as passionate about life...</p>
          <p className="about-text">
            I look to be more than a software developer. I have a strong interest in technology and innovation. He sees and enjoys working on projects that challenge him to be better. With a background in Multiplatform Software Development, he combines technical expertise with a deep appreciation for art and human-centered thinking.
          </p>
          <p className="about-text">
            Some of my more centered passions are about innovation, creativity, and the art of wisdom. He enjoys working on meaningful projects that challenge him to grow and connect technology with human experience.
          </p>
        </div>
      </section>

      {/* HABILITIES */}
      <section
        id="habilities"
        className={`section fade-section ${visible["habilities"] ? "visible" : ""}`}
        ref={registerRef("habilities")}
      >
        <h2 className="section-title">Why Choose Fernando Villafaña Alfonseca</h2>
        <p className="hab-subtitle">Discover the key reasons why to work with me.</p>
        <div className="hab-grid">
          {HABILITIES.map((h, i) => (
            <div
              key={h.title}
              className={`hab-card ${visible["habilities"] ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="hab-icon">{h.icon}</div>
              <p className="hab-card-title">{h.title}</p>
              <p className="hab-card-desc">{h.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL PROFILE */}
      <section
        id="profile"
        className={`fade-section ${visible["profile"] ? "visible" : ""}`}
        ref={registerRef("profile")}
        style={{ padding: "8rem 5rem", textAlign: "center", borderTop: "1px solid var(--border)", minHeight: "50vh", display: "flex", flexDirection: "column", justifyContent: "center" }}
      >
        <h2 className="section-title">Professional Profile</h2>
        <p className="profile-text">
          Multiplatform Software Developer with experience across web, mobile, backend, and data science. Passionate about building meaningful products with clean code and thoughtful design. Always learning, always evolving.
        </p>
        <div className="profile-links">
          <a className="profile-link" href="mailto:your@email.com">Email Me</a>
          <a className="profile-link" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="profile-link" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Fernando Villafaña Alfonseca · All rights reserved</footer>
    </>
  );
}
