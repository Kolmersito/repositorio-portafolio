import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [perfil, setPerfil] = useState<any>(null);
  const [habilidades, setHabilidades] = useState<any>(null);
  const [proyectos, setProyectos] = useState<any[]>([]);
  const [educacion, setEducacion] = useState<any[]>([]);

  useEffect(() => {
    const API_URL = 'http://localhost:3000';
    
    // Llamadas simultáneas al backend
    fetch(`${API_URL}/perfil`).then(res => res.json()).then(setPerfil);
    fetch(`${API_URL}/habilidades`).then(res => res.json()).then(setHabilidades);
    fetch(`${API_URL}/proyectos`).then(res => res.json()).then(setProyectos);
    fetch(`${API_URL}/educacion`).then(res => res.json()).then(setEducacion);
  }, []);

  return (
    <div className="min-h-screen bg-stone-200 text-stone-800 font-sans selection:bg-stone-400 selection:text-stone-100">
      <Navbar />
      
      <main className="px-8 md:px-16 py-12 max-w-6xl mx-auto">
        
        {/* SECCIÓN HERO (Presentación) */}
        <section className="mt-12 mb-32 lg:w-3/4">
          {perfil && (
            <>
              <h1 className="text-6xl md:text-8xl font-black text-stone-700 mb-6 tracking-tighter leading-none italic">
                {perfil.nombre}
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 mb-10 leading-relaxed font-medium">
                {perfil.resumen}
              </p>
              <button className="border-2 border-stone-500 text-stone-600 px-10 py-4 rounded-full font-bold hover:bg-stone-500 hover:text-stone-100 transition-all active:scale-95 shadow-sm">
                Contact Me
              </button>
            </>
          )}
        </section>

        {/* SECCIÓN PROYECTOS */}
        <section id="proyectos" className="mb-32">
          <h2 className="text-4xl font-bold text-stone-600 mb-12 flex items-center italic">
            Featured Projects
            <span className="ml-4 h-[1px] bg-stone-400 flex-grow"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="group">
                <div className="aspect-video bg-stone-300 rounded-2xl mb-6 overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-bold uppercase tracking-widest text-xs">
                    {proyecto.nombre} Preview
                  </div>
                  <div className="absolute inset-0 bg-stone-800/0 group-hover:bg-stone-800/10 transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold text-stone-700 mb-2">{proyecto.nombre}</h3>
                <p className="text-stone-500 leading-relaxed mb-4">{proyecto.descripcion}</p>
                <span className="text-[10px] font-black px-3 py-1 bg-stone-300 rounded-full text-stone-600 uppercase tracking-tighter">
                  {proyecto.tipo}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN ACADEMIC BACKGROUND */}
        <section id="educacion" className="mb-32">
          <h2 className="text-4xl font-bold text-stone-600 mb-12 flex items-center italic">
            Academic Background
            <span className="ml-4 h-[1px] bg-stone-400 flex-grow"></span>
          </h2>
          <div className="space-y-12">
            {educacion.map((edu) => (
              <div key={edu.id} className="max-w-3xl group">
                <h3 className="text-2xl font-bold text-stone-700 group-hover:text-stone-900 transition-colors">
                  {edu.grado}
                </h3>
                <p className="text-lg text-stone-500 font-medium mb-3">{edu.institucion}</p>
                <div className="flex gap-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-500 bg-stone-300/60 px-3 py-1 rounded">
                    {edu.estatus}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 border border-stone-300 px-3 py-1 rounded">
                    {edu.area}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN TECNOLOGÍAS */}
        {habilidades && (
          <section id="tecnologias" className="pb-20">
            <h2 className="text-4xl font-bold text-stone-600 mb-12 flex items-center italic">
              Technologies
              <span className="ml-4 h-[1px] bg-stone-400 flex-grow"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {Object.entries(habilidades).map(([categoria, lista]: any) => (
                <div key={categoria}>
                  <h3 className="text-[11px] font-black text-stone-400 mb-6 tracking-[0.3em] uppercase border-b border-stone-300 pb-2">
                    {/* Aquí separamos CamelCase a palabras con espacios */}
                    {categoria.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <ul className="space-y-4">
                    {lista.map((item: string) => (
                      <li key={item} className="text-stone-600 text-lg hover:text-stone-900 hover:translate-x-2 transition-all flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full opacity-50"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="py-20 border-t border-stone-300 text-center text-stone-400 text-[10px] tracking-[0.3em] uppercase">
        Jade Portfolio — {new Date().getFullYear()} — Built with NestJS & React
      </footer>
    </div>
  );
}

export default App;