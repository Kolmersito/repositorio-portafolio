import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000';

// ─────────────────────────────────────────────────────────
// ORNAMENTOS SVG
// ─────────────────────────────────────────────────────────
const Flourish = ({ width = 320 }: { width?: number }) => (
  <svg width={width} height="24" viewBox="0 0 320 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 12 Q40 4 80 12 Q120 20 160 12 Q200 4 240 12 Q280 20 320 12" stroke="#b8964a" strokeWidth="0.7" fill="none" opacity="0.4"/>
    <path d="M140 12 L160 4 L180 12" stroke="#b8964a" strokeWidth="0.7" fill="none" opacity="0.5"/>
    <circle cx="160" cy="12" r="1.8" fill="#b8964a" opacity="0.5"/>
    <circle cx="80" cy="12" r="1" fill="#b8964a" opacity="0.35"/>
    <circle cx="240" cy="12" r="1" fill="#b8964a" opacity="0.35"/>
  </svg>
);

const DividerOrnament = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 0', gap: '1rem' }}>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(184,150,74,0.18))' }} />
    <svg width="50" height="18" viewBox="0 0 60 20" fill="none">
      <path d="M0 10 Q15 3 30 10 Q45 17 60 10" stroke="#b8964a" strokeWidth="0.7" fill="none" opacity="0.4"/>
      <circle cx="30" cy="10" r="2" fill="none" stroke="#b8964a" strokeWidth="0.7" opacity="0.5"/>
      <circle cx="30" cy="10" r="0.8" fill="#b8964a" opacity="0.5"/>
    </svg>
    <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(184,150,74,0.18))' }} />
  </div>
);

// ─────────────────────────────────────────────────────────
// ICON HELPERS
// ─────────────────────────────────────────────────────────
const getIcon = (texto: string) => {
  const t = texto.toLowerCase();
  const props = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (t.includes('javascript') || t.includes('typescript') || t.includes('python') || t.includes('kotlin') || t.includes('go') || t.includes('c#') || t.includes('dart'))
    return <svg {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
  if (t.includes('bash') || t.includes('linux') || t.includes('terminal'))
    return <svg {...props}><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>;
  if (t.includes('react') || t.includes('tailwind') || t.includes('redux') || t.includes('native') || t.includes('jetpack') || t.includes('flutter') || t.includes('visual'))
    return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
  if (t.includes('postgres') || t.includes('mysql') || t.includes('sql') || t.includes('mongo'))
    return <svg {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
  if (t.includes('supabase') || t.includes('cloud') || t.includes('aws') || t.includes('docker'))
    return <svg {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
  if (t.includes('scikit') || t.includes('pandas') || t.includes('data') || t.includes('pruebas') || t.includes('documentaci') || t.includes('defecto'))
    return <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
  return <svg {...props}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
};

const getHabIcon = (titulo: string) => {
  const t = titulo.toLowerCase();
  const base = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '1.2', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (t.includes('comunicaci') || t.includes('asertiv'))
    return <svg {...base}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
  if (t.includes('equipo') || t.includes('colabor'))
    return <svg {...base}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
  if (t.includes('creat') || t.includes('innova') || t.includes('pens'))
    return <svg {...base}><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>;
  if (t.includes('rápido') || t.includes('rapido') || t.includes('veloz') || t.includes('aprendiz'))
    return <svg {...base}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  if (t.includes('problem') || t.includes('soluci') || t.includes('resoluc'))
    return <svg {...base}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
  if (t.includes('evolucion') || t.includes('siempre') || t.includes('mejora'))
    return <svg {...base}><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>;
  return <svg {...base}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
};

// ─────────────────────────────────────────────────────────
// TIPOS
// ─────────────────────────────────────────────────────────
interface Perfil { nombre: string; titulo?: string; resumen?: string; email?: string; linkedin?: string; github?: string; }
interface Habilidad { titulo: string; descripcion: string; }

// ─────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────
function Navbar({ scrolled }: { scrolled: boolean }) {
  const irA = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 3.5rem', height: '58px',
      // MODIFICADO: Fondo claro translúcido
      background: 'rgba(253, 252, 245, 0.94)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(184,150,74,0.2)',
      transition: 'box-shadow 0.4s',
      boxShadow: scrolled ? '0 4px 30px rgba(184,150,74,0.08)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <span style={{ width: 18, height: 1, background: 'rgba(184,150,74,0.5)', display: 'inline-block' }} />
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontStyle: 'italic', fontSize: '1rem', color: '#b8964a', cursor: 'pointer', letterSpacing: '0.04em' }}
        >
          Jade Alejandro
        </span>
        <span style={{ width: 18, height: 1, background: 'rgba(184,150,74,0.5)', display: 'inline-block' }} />
      </div>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {([
          ['Tecnologías', 'tecnologias'],
          ['Sobre mí',    'sobre-mi'],
          ['Habilidades', 'habilidades'],
          ['Perfil',      'perfil'],
        ] as [string, string][]).map(([label, id]) => (
          <li key={id}>
            <button
              onClick={() => irA(id)}
              // MODIFICADO: Texto oscuro por defecto, dorado al hover
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', fontWeight: 400, color: 'rgba(44, 27, 24, 0.7)', letterSpacing: '0.06em', transition: 'color 0.3s', fontStyle: 'italic' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#b8964a')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(44, 27, 24, 0.7)')}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─────────────────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────────────────
export default function App() {
  const [perfil,      setPerfil]      = useState<Perfil | null>(null);
  const [tecnologias, setTecnologias] = useState<any>(null);
  const [habilidades, setHabilidades] = useState<Habilidad[]>([]);
  const [educacion,   setEducacion]   = useState<any[]>([]);
  const [scrolled,    setScrolled]    = useState(false);
  const [visibles,    setVisibles]    = useState<Set<string>>(new Set());

  useEffect(() => {
    fetch(`${API_URL}/perfil`).then(r => r.json()).then(setPerfil).catch(() => {});
    fetch(`${API_URL}/habilidades`).then(r => r.json()).then(setTecnologias).catch(() => {});
    fetch(`${API_URL}/habilidades/soft`).then(r => r.json()).then(setHabilidades).catch(() => {});
    fetch(`${API_URL}/educacion`).then(r => r.json()).then(setEducacion).catch(() => {});
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting && e.target.id)
          setVisibles(prev => new Set([...prev, e.target.id]));
      }),
      { threshold: 0.08 }
    );
    ['tecnologias', 'sobre-mi', 'habilidades', 'perfil'].forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [perfil]);

  const esVisible = (id: string) => visibles.has(id);
  const fade = (id: string): React.CSSProperties => ({
    opacity:    esVisible(id) ? 1 : 0,
    transform:  esVisible(id) ? 'translateY(0)' : 'translateY(40px)',
    transition: 'opacity 1s ease, transform 1s ease',
  });

  const tecFallback = [
    { cat: 'Lenguajes',              items: ['C#', 'Dart'] },
    { cat: 'Frameworks y Librerías', items: ['Flutter', 'Visual Forms'] },
    { cat: 'Calidad y Pruebas',      items: ['Pruebas de software', 'Gestión de defectos', 'Documentación'] },
  ];
  const habFallback: Habilidad[] = [
    { titulo: 'Comunicación Asertiva',   descripcion: 'Comunicación clara, actualizaciones constantes y propósito compartido.' },
    { titulo: 'Trabajo en Equipo',       descripcion: 'Me integro fácilmente en dinámicas grupales para asegurar el cumplimiento de objetivos.' },
    { titulo: 'Pensamiento Creativo',    descripcion: 'Combino lógica con creatividad, proponiendo soluciones innovadoras.' },
    { titulo: 'Aprendizaje Rápido',      descripcion: 'Me adapto rápidamente a nuevas tecnologías y flujos de trabajo.' },
    { titulo: 'Resolución de Problemas', descripcion: 'Abordo cada reto con pensamiento estructurado, de la abstracción a la solución.' },
    { titulo: 'Siempre Evolucionando',   descripcion: 'En constante mejora para aportar valor en cada proyecto que asumo.' },
  ];

  const tecData = tecnologias
    ? Object.entries(tecnologias).map(([cat, items]: any) => ({ cat: cat.replace(/([A-Z])/g, ' $1').trim(), items }))
    : tecFallback;
  const habData = habilidades.length > 0 ? habilidades : habFallback;

  const tituloSeccion: React.CSSProperties = {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
    fontWeight: 400,
    fontStyle: 'italic',
    // MODIFICADO: Dorado ligeramente más intenso para contraste
    color: '#b8964a',
    textAlign: 'center',
    letterSpacing: '0.02em',
    lineHeight: 1.3,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          // MODIFICADO: Fondo crema claro editorial
          background: #fdfcf5;
          font-family: 'Montserrat', sans-serif;
          overflow-x: hidden;
          // MODIFICADO: Texto marrón oscuro sepia
          color: #2c1b18;
        }
        ::selection { background: #e8d5b0; color: #2c1b18; }

        // MODIFICADO: Grano sutil adaptado a fondo claro
        body::before {
          content: '';
          position: fixed; inset: 0; z-index: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.02;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .hero-pretitulo {
          animation: fadeUp 1s ease 0.1s both;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem; font-style: italic;
          color: rgba(184,150,74,0.7);
          letter-spacing: 0.3em; text-transform: uppercase;
          margin-bottom: 1.2rem;
        }
        .hero-nombre {
          animation: fadeUp 1.1s ease 0.25s both;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(3rem, 6.5vw, 5.2rem);
          font-weight: 400; font-style: italic;
          // MODIFICADO: Título oscuro
          color: #2c1b18;
          line-height: 1.1; letter-spacing: -0.01em;
        }
        .hero-linea {
          animation: fadeIn 1s ease 0.5s both;
          width: 80px; height: 1px;
          background: linear-gradient(to right, #b8964a, transparent);
          margin: 1.8rem 0;
        }
        .hero-sub {
          animation: fadeUp 1s ease 0.55s both;
          font-size: 1.1rem; font-weight: 300; font-style: italic;
          // MODIFICADO: Subtítulo oscuro translúcido
          color: rgba(44, 27, 24, 0.8);
          line-height: 1.8; max-width: 420px;
        }
        .hero-btn {
          animation: fadeUp 1s ease 0.75s both;
          display: inline-block; margin-top: 2.5rem;
          padding: 0.75rem 2.4rem;
          border: 1px solid rgba(184,150,74,0.5);
          color: #b8964a; background: transparent;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem; font-style: italic;
          letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none;
          cursor: pointer;
          transition: background 0.4s, border-color 0.4s, color 0.4s;
          position: relative;
        }
        .hero-btn::before, .hero-btn::after {
          content: '✦'; position: absolute; top: 50%; transform: translateY(-50%);
          color: rgba(184,150,74,0.4); font-size: 0.5rem; font-style: normal;
          transition: color 0.4s;
        }
        .hero-btn::before { left: 0.7rem; }
        .hero-btn::after  { right: 0.7rem; }
        .hero-btn:hover {
          // MODIFICADO: Fondo claro al hover
          background: rgba(184,150,74,0.06);
          border-color: rgba(184,150,74,0.8);
          color: #b8964a;
        }
        .hero-btn:hover::before, .hero-btn:hover::after { color: rgba(184,150,74,0.8); }

        .hero-arte {
          animation: fadeIn 2s ease 0.4s both;
          position: absolute; right: 0; top: 0; bottom: 0; width: 50%;
          pointer-events: none; overflow: hidden;
        }

        .tech-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 3rem 4rem; max-width: 840px; margin: 0 auto;
        }
        .tech-cat {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.78rem; font-style: italic;
          letter-spacing: 0.1em; color: #b8964a;
          margin-bottom: 1.2rem; padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(184,150,74,0.2);
        }
        .tech-item {
          display: flex; align-items: center; gap: 0.7rem;
          font-size: 0.95rem; font-weight: 300; font-style: italic;
          // MODIFICADO: Items oscuros
          color: rgba(44, 27, 24, 0.8); margin-bottom: 0.7rem;
        }
        .tech-item svg { color: rgba(184,150,74,0.5); flex-shrink: 0; }

        .hab-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 3rem 2.5rem; max-width: 1000px; margin: 0 auto;
        }
        .hab-card {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          padding: 2.5rem 1.5rem;
          // MODIFICADO: Borde más visible en fondo claro
          border: 1px solid rgba(184,150,74,0.18);
          // MODIFICADO: Fondo blanco puro para tarjetas
          background: #ffffff;
          position: relative;
          transition: border-color 0.4s, transform 0.4s, box-shadow 0.4s;
          border-radius: 2px;
        }
        .hab-card::before, .hab-card::after,
        .hab-card > .corner-tl, .hab-card > .corner-br {
          content: ''; position: absolute;
          width: 8px; height: 8px;
          border-color: rgba(184,150,74,0.5);
          border-style: solid;
        }
        .hab-card::before  { top: -1px; left: -1px; border-width: 1px 0 0 1px; }
        .hab-card::after   { bottom: -1px; right: -1px; border-width: 0 1px 1px 0; }
        .hab-card:hover    {
          border-color: rgba(184,150,74,0.4);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(184,150,74,0.05);
        }
        .hab-icono         { color: rgba(184,150,74,0.6); margin-bottom: 0.5rem; }
        .hab-titulo {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem; font-style: italic; font-weight: 400;
          color: #b8964a; margin: 0.6rem 0 0.5rem; letter-spacing: 0.02em;
        }
        .hab-desc {
          font-size: 0.88rem; font-weight: 300; font-style: italic;
          // MODIFICADO: Descripción oscura
          color: rgba(44, 27, 24, 0.75); line-height: 1.75;
        }

        .enlace-perfil {
          display: inline-block; padding: 0.65rem 2rem;
          border: 1px solid rgba(184,150,74,0.4); color: #b8964a;
          font-family: 'Montserrat', sans-serif; font-size: 0.88rem;
          font-style: italic; letter-spacing: 0.15em;
          background: transparent; border-radius: 0;
          text-decoration: none;
          transition: background 0.3s, border-color 0.3s, color 0.3s; cursor: pointer;
        }
        .enlace-perfil:hover {
          background: rgba(184,150,74,0.06);
          border-color: rgba(184,150,74,0.7);
          color: #b8964a;
        }

        @media (max-width: 900px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem 3rem; }
          .hab-grid  { grid-template-columns: repeat(2, 1fr); }
          .hero-arte { opacity: 0.5; }
        }
        @media (max-width: 600px) {
          .tech-grid { grid-template-columns: 1fr; }
          .hab-grid  { grid-template-columns: 1fr; }
          .hero-arte { display: none; }
        }
      `}</style>

      <Navbar scrolled={scrolled} />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '58px',
        // MODIFICADO: Gradientes sutiles adaptados a fondo claro
        background: 'radial-gradient(ellipse at 30% 60%, rgba(184,150,74,0.04) 0%, transparent 60%), radial-gradient(ellipse at 70% 40%, rgba(232, 213, 176, 0.03) 0%, transparent 50%)',
      }}>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 6rem', maxWidth: '54%' }}>
          <p className="hero-pretitulo">Portafolio</p>
          <h1 className="hero-nombre">
            {perfil?.nombre ?? 'Jade Alejandro\nMorales Millán'}
          </h1>
          <div className="hero-linea" />
          <p className="hero-sub">
            {perfil?.titulo ?? 'Estudiante de Ingeniería en TI, apasionado por aprender nuevas tecnologías y desarrollar soluciones eficientes e innovadoras.'}
          </p>
          <button
            className="hero-btn"
            onClick={() => document.getElementById('perfil')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contáctame
          </button>
        </div>

        <div className="hero-arte" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <img
            src="https://images.seeklogo.com/logo-png/17/2/g-clef-clave-de-sol-logo-png_seeklogo-178799.png"
            alt="Clave de Sol"
            style={{
              width: '85%', height: '90%', objectFit: 'contain',
              objectPosition: 'right center', opacity: 0.12, // MODIFICADO: Ligeramente más opaco
              filter: 'sepia(1) saturate(0.5)', // MODIFICADO: Ajuste de tono
              transform: 'translateX(8%)',
              maskImage: 'radial-gradient(ellipse 70% 80% at 60% 50%, black 20%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 60% 50%, black 20%, transparent 80%)',
            }}
          />
        </div>

        {/* MODIFICADO: Viñeta periférica adaptada a fondo claro */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 60%, #fdfcf5 100%)', pointerEvents: 'none', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to top, #fdfcf5, transparent)', zIndex: 1 }} />
      </section>

      <DividerOrnament />

      {/* ══════════════════════════════════════
          TECNOLOGÍAS
      ══════════════════════════════════════ */}
      <section id="tecnologias" style={{ padding: '6rem 5rem 7rem', ...fade('tecnologias') }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontStyle: 'italic', color: 'rgba(184,150,74,0.6)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            — Arte del oficio —
          </p>
          <h2 style={tituloSeccion}>Tecnologías con las que he trabajado</h2>
          <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center' }}>
            <Flourish width={260} />
          </div>
        </div>

        <div className="tech-grid">
          {tecData.map(({ cat, items }) => (
            <div key={cat}>
              <p className="tech-cat">{cat}</p>
              {(items as string[]).map((item: string) => (
                <div className="tech-item" key={item}>
                  {getIcon(item)}{item}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '4rem', fontSize: '0.95rem', fontWeight: 300, fontStyle: 'italic', color: 'rgba(184,150,74,0.5)', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', lineHeight: 2 }}>
          « Aunque tengo experiencia sólida con estas tecnologías, siempre estoy abierto a aprender nuevas herramientas y adaptarme a las necesidades de cada proyecto. »
        </p>
      </section>

      <DividerOrnament />

      {/* ══════════════════════════════════════
          SOBRE MÍ
      ══════════════════════════════════════ */}
      <section
        id="sobre-mi"
        style={{ display: 'flex', alignItems: 'center', gap: '6rem', padding: '6rem 7rem', minHeight: '80vh', ...fade('sobre-mi') }}
      >
        <div style={{ flex: '0 0 280px', position: 'relative' }}>
          <div style={{
            width: '100%',
            maskImage: 'radial-gradient(ellipse 78% 82% at 50% 46%, black 25%, rgba(0,0,0,0.6) 55%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 78% 82% at 50% 46%, black 25%, rgba(0,0,0,0.6) 55%, transparent 78%)',
          }}>
            <img
              src="https://www.nodulo.org/ec/2022/img/n199p02.png"
              alt="Retrato"
              style={{
                width: '100%', height: 'auto',
                display: 'block',
                // MODIFICADO: Ajuste de filtros para fondo claro
                filter: 'sepia(0.2) contrast(1) brightness(0.9)',
              }}
            />
          </div>
          <p style={{ textAlign: 'center', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', fontStyle: 'italic', color: 'rgba(184,150,74,0.4)', marginTop: '0.4rem', letterSpacing: '0.1em' }}>
            — in memoriam philosophiae —
          </p>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontStyle: 'italic', color: 'rgba(184,150,74,0.6)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            — sobre mi —
          </p>
          <h2 style={{ ...tituloSeccion, textAlign: 'left', marginBottom: '0.6rem' }}>
            Acerca de {perfil?.nombre?.split(' ')[0] ?? 'Jade'}
          </h2>
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, #b8964a, transparent)', marginBottom: '2rem' }} />

          {[
            perfil?.resumen ?? 'Soy un estudiante de Ingeniería en Tecnologías de la Información en la Universidad Tecnológica de Cancún.',
            'Poseo una sólida formación técnica en soporte informático y desarrollo de reportes. Me gusta aprender nuevas tecnologías y aplicarlas en proyectos prácticos, buscando siempre la mejor manera de resolver los retos de desarrollo.',
            'Además de la tecnología, algunas de mis pasiones más profundas son el piano y la música clásica. Disfruto trabajar en proyectos significativos que conecten la lógica del software con la creatividad.',
          ].map((texto, i) => (
            <p key={i} style={{ fontSize: '1rem', fontWeight: 300, fontStyle: 'italic', color: 'rgba(44, 27, 24, 0.85)', lineHeight: 2, marginBottom: '1.2rem' }}>
              {texto}
            </p>
          ))}

          {educacion.length > 0 && (
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {educacion.map(edu => (
                <span key={edu.id} style={{ fontSize: '0.78rem', fontStyle: 'italic', color: '#b8964a', border: '1px solid rgba(184,150,74,0.3)', padding: '0.3rem 0.9rem', letterSpacing: '0.06em' }}>
                  {edu.grado}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <DividerOrnament />

      {/* ══════════════════════════════════════
          HABILIDADES
      ══════════════════════════════════════ */}
      <section id="habilidades" style={{ padding: '6rem 5rem 7rem', ...fade('habilidades') }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontStyle: 'italic', color: 'rgba(184,150,74,0.6)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            — virtudes —
          </p>
          <h2 style={tituloSeccion}>¿Por qué elegir a {perfil?.nombre?.split(' ')[0] ?? 'Jade'}?</h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic', fontSize: '0.95rem', color: 'rgba(184,150,74,0.5)', marginTop: '0.8rem' }}>
            Descubre las razones clave para trabajar conmigo.
          </p>
          <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'center' }}>
            <Flourish width={200} />
          </div>
        </div>

        <div className="hab-grid">
          {habData.map((h, i) => (
            <div
              key={h.titulo}
              className="hab-card"
              style={{
                opacity:    esVisible('habilidades') ? 1 : 0,
                transform:  esVisible('habilidades') ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.8s ease ${i * 90}ms, transform 0.8s ease ${i * 90}ms, border-color 0.4s, transform 0.4s, box-shadow 0.4s`, // Manteniendo transiciones
              }}
            >
              <div className="hab-icono">{getHabIcon(h.titulo)}</div>
              <p className="hab-titulo">{h.titulo}</p>
              <p className="hab-desc">{h.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <DividerOrnament />

      {/* ══════════════════════════════════════
          PERFIL PROFESIONAL
      ══════════════════════════════════════ */}
      <section
        id="perfil"
        style={{ padding: '6rem 5rem 7rem', textAlign: 'center', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', ...fade('perfil') }}
      >
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontStyle: 'italic', color: 'rgba(184,150,74,0.6)', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          — correspondencia —
        </p>
        <h2 style={{ ...tituloSeccion, marginBottom: '1rem' }}>Perfil Profesional</h2>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <Flourish width={180} />
        </div>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 300, color: 'rgba(44, 27, 24, 0.8)', lineHeight: 2, maxWidth: 560, margin: '0 auto 3rem' }}>
          Estudiante de TI enfocado en el desarrollo de software y la resolución efectiva de problemas. Apasionado por construir productos significativos con código limpio y diseño cuidadoso.{' '}
          <em style={{ color: '#b8964a', fontWeight: 400 }}>Siempre aprendiendo, siempre evolucionando.</em>
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a className="enlace-perfil" href={perfil?.email ? `mailto:${perfil.email}` : 'mailto:alejandro.morales.millan@gmail.com'}>
            Escríbeme
          </a>
          <a className="enlace-perfil" href={perfil?.linkedin ?? 'https://linkedin.com'} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="enlace-perfil" href={perfil?.github ?? 'https://github.com/Kolmersito'} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        textAlign: 'center', padding: '2.5rem',
        borderTop: '1px solid rgba(184,150,74,0.12)',
        // MODIFICADO: Fondo sutil claro
        background: 'rgba(184,150,74,0.03)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <Flourish width={140} />
        </div>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic', fontSize: '0.78rem', color: 'rgba(184,150,74,0.5)', letterSpacing: '0.12em' }}>
          Jade Alejandro Morales Millán · {new Date().getFullYear()}
        </p>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: 'italic', fontSize: '0.68rem', color: 'rgba(184,150,74,0.3)', letterSpacing: '0.08em', marginTop: '0.4rem' }}>
          Desarrollado con NestJS & React
        </p>
      </footer>
    </>
  );
}