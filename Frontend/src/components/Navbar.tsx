export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 px-8 md:px-16 bg-[#ded5ce]/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="text-xl font-black tracking-tighter text-[#5e4b46] uppercase cursor-default">
        Jade Alejandro
      </div>
      <div className="hidden md:flex space-x-10 text-xs font-bold tracking-widest uppercase">
        <a href="#tecnologias" className="text-[#5e4b46]/70 hover:text-[#5e4b46] transition-colors">Habilidades</a>
        <a href="#sobre-mi" className="text-[#5e4b46]/70 hover:text-[#5e4b46] transition-colors">Acerca de mi</a>
        <a href="#proyectos" className="text-[#5e4b46]/70 hover:text-[#5e4b46] transition-colors">Proyectos</a>
      </div>
    </nav>
  );
}