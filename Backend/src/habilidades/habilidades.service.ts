import { Injectable } from '@nestjs/common';

@Injectable()
export class HabilidadesService {
  private misHabilidades = {
    lenguajes: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    frameworksYBibliotecas: ['React', 'NestJS', 'React Native'],
    basesDeDatos: ['PostgreSQL', 'MySQL'],
    herramientas: ['Git', 'GitHub', 'VS Code', 'Figma']
  };

  create(createHabilidadeDto: any) {
    return 'This action adds a new habilidade';
  }

  findAll() {
    return this.misHabilidades;
  }

  findOne(id: number) {
    return `This action returns a #${id} habilidade`;
  }

  update(id: number, updateHabilidadeDto: any) {
    return `This action updates a #${id} habilidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} habilidade`;
  }
}