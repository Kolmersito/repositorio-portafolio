import { Injectable } from '@nestjs/common';

@Injectable()
export class PerfilService {
  private miPerfil = {
    nombre: 'Tu Nombre Completo',
    titulo: 'Desarrollador de Software',
    resumen: 'Estudiante de Ingeniería en Tecnologías de la Información apasionado por aprender. Siempre en busca de nuevos retos y oportunidades para crecer como desarrollador en proyectos móviles y web.',
    contacto: 'tu-correo@ejemplo.com'
  };

  create(createPerfilDto: any) {
    return 'This action adds a new perfil';
  }

  findAll() {
    return this.miPerfil;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfil`;
  }

  update(id: number, updatePerfilDto: any) {
    return `This action updates a #${id} perfil`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfil`;
  }
}