export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 px-8 md:px-16 bg-stone-200/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="text-xl font-black tracking-tighter text-stone-700 uppercase cursor-default">
        Jade.
      </div>
      <div className="hidden md:flex space-x-10 text-xs font-bold tracking-widest uppercase">
        <a href="#tecnologias" className="text-stone-500 hover:text-stone-900 transition-colors">Technologies</a>
        <a href="#proyectos" className="text-stone-500 hover:text-stone-900 transition-colors">About Me</a>
        <a href="#experiencia" className="text-stone-500 hover:text-stone-900 transition-colors">Habilities</a>
        <a href="#perfil" className="text-stone-500 hover:text-stone-900 transition-colors">Professional Profile</a>
      </div>
    </nav>
  );
}