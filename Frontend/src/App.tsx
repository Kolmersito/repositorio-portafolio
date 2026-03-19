import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [perfil, setPerfil] = useState<any>(null);
  const [habilidades, setHabilidades] = useState<any>(null);

  // Petición para los datos del Perfil
  useEffect(() => {
    fetch('http://localhost:3000/perfil')
      .then(res => res.json())
      .then(data => setPerfil(data))
      .catch(err => console.error("Error en perfil:", err));
  }, []);

  // Petición para los datos de Habilidades
  useEffect(() => {
    fetch('http://localhost:3000/habilidades')
      .then(res => res.json())
      .then(data => setHabilidades(data))
      .catch(err => console.error("Error en habilidades:", err));
  }, []);

  return (
    <div className="min-h-screen bg-stone-200 text-stone-800 font-sans selection:bg-stone-400 selection:text-stone-100">
      <Navbar />
      
      <main className="px-8 md:px-16 py-12 max-w-6xl mx-auto">
        
        {/* SECCIÓN HERO (Presentación) */}
        <section className="mt-12 mb-24 lg:w-3/4">
          {perfil ? (
            <>
              <h1 className="text-6xl md:text-8xl font-black text-stone-700 mb-6 tracking-tighter leading-none">
                {perfil.nombre}
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 mb-10 leading-relaxed font-medium">
                {perfil.resumen}
              </p>
              <button className="bg-stone-600 text-stone-100 px-10 py-4 rounded-lg font-bold hover:bg-stone-700 transition-all shadow-lg active:scale-95">
                Contact Me
              </button>
            </>
          ) : (
            <div className="h-64 flex items-center">
              <p className="text-2xl animate-pulse text-stone-400">Cargando perfil profesional...</p>
            </div>
          )}
        </section>

        {/* SECCIÓN TECNOLOGÍAS */}
        {habilidades && (
          <section id="tecnologias" className="mt-20">
            <h2 className="text-4xl font-bold text-stone-600 mb-12 flex items-center">
              Technologies
              <span className="ml-4 h-[2px] bg-stone-300 flex-grow"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {Object.entries(habilidades).map(([categoria, lista]: any) => (
                <div key={categoria} className="group">
                  <h3 className="capitalize text-lg font-bold text-stone-500 mb-5 tracking-widest uppercase flex items-center">
                    <span className="w-2 h-2 bg-stone-400 rounded-full mr-3 group-hover:bg-stone-600 transition-colors"></span>
                    {categoria.replace(/([A-Z])/g, ' $1')}
                  </h3>
                  <ul className="space-y-3">
                    {lista.map((item: string) => (
                      <li key={item} className="text-stone-600 text-lg flex items-center hover:translate-x-2 transition-transform duration-300">
                        <span className="mr-3 text-stone-300 font-light">/</span> 
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

      {/* Footer sencillo */}
      <footer className="py-12 text-center text-stone-400 text-sm mt-20">
        © {new Date().getFullYear()} — Built with NestJS & React
      </footer>
    </div>
  );
}

export default App;