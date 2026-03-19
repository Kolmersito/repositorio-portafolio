import { useEffect, useState } from 'react';

function App() {
  // Aquí guardaremos los datos que lleguen del backend
  const [perfil, setPerfil] = useState<any>(null);

  useEffect(() => {
    // Hacemos la llamada a tu API de NestJS
    fetch('http://localhost:3000/perfil')
      .then(respuesta => respuesta.json())
      .then(datos => setPerfil(datos))
      .catch(error => console.error("Error conectando al backend:", error));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Prueba de Conexión</h1>
      
      {perfil ? (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h2>{perfil.nombre}</h2>
          <h3>{perfil.titulo}</h3>
          <p>{perfil.resumen}</p>
          <p><strong>Contacto:</strong> {perfil.contacto}</p>
        </div>
      ) : (
        <p>Cargando datos desde el servidor NestJS...</p>
      )}
    </div>
  );
}

export default App;