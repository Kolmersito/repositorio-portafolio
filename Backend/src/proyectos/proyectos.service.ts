import { Injectable } from '@nestjs/common';

@Injectable()
export class ProyectosService {
  // Aquí estructuramos los proyectos de tu portafolio
  private misProyectos = [
    {
      id: 1,
      nombre: 'Qpon',
      tipo: 'Aplicación Móvil',
      descripcion: 'Desarrollo de aplicación móvil para gestión de cupones, trabajando en equipo para la implementación de sus características principales.',
      repositorio: 'https://github.com/tu-usuario/qpon'
    },
    {
      id: 2,
      nombre: 'Timeboxing',
      tipo: 'Aplicación Web',
      descripcion: 'Plataforma enfocada en la técnica de productividad de timeboxing para una mejor gestión del tiempo y tareas.',
      repositorio: 'https://github.com/tu-usuario/timeboxing'
    },
    {
      id: 3,
      nombre: 'CoffeeLine',
      tipo: 'Diseño e Interfaz',
      descripcion: 'Diseño de interfaz para un proyecto de gestión y pedidos de cafetería.',
      repositorio: 'https://github.com/tu-usuario/coffeeline'
    }
  ];

  create(createProyectoDto: any) {
    return 'This action adds a new proyecto';
  }

  findAll() {
    return this.misProyectos;
  }

  findOne(id: number) {
    return this.misProyectos.find(proyecto => proyecto.id === id);
  }

  update(id: number, updateProyectoDto: any) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
}