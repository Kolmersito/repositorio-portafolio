import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('perfil')
  getPerfil() {
    return {
      nombre: "Jade Alejandro Morales Millán",
      titulo: "Estudiante de Ingeniería en TI",
      resumen: "Me caracterizo por mi capacidad para trabajar en equipo y mi comunicación asertiva. Actualmente busco mi primera oportunidad profesional para aplicar mis habilidades técnicas y contribuir al crecimiento del departamento de tecnología.",
      contacto: "alejandro.morales.millan@gmail.com | +52 9841536196"
    };
  }

  @Get('habilidades')
  getHabilidades() {
    return {
      habilidadesBlandas: [
        "Comunicación asertiva",
        "Trabajo en equipo"
      ],
      calidadYPruebas: [
        "Pruebas de software",
        "Gestión de defectos",
        "Documentación"
      ],
      desarrollo: [
        "C#",
        "Visual Forms",
        "Flutter",
        "Dart"
      ]
    };
  }

  @Get('proyectos')
  getProyectos() {
    return [
      {
        id: 1,
        nombre: "MY UT",
        descripcion: "Desarrollo de un sistema integrado para estudiantes utilizando Visual Forms y C#.",
        tipo: "Aplicación de Escritorio"
      },
      {
        id: 2,
        nombre: "QPON",
        descripcion: "Desarrollo de la lógica de negocios y gestión de persistencia de datos utilizando Flutter y Dart.",
        tipo: "Aplicación Móvil"
      },
      {
        id: 3,
        nombre: "CoffeeLine",
        descripcion: "Plataforma digital enfocada en la optimización de servicios y gestión eficiente de pedidos.",
        tipo: "Aplicación Web / Móvil"
      },
      {
        id: 4,
        nombre: "Timeboxing",
        descripcion: "Herramienta de productividad diseñada para la gestión del tiempo mediante la técnica de bloques (timeboxing).",
        tipo: "Aplicación de Productividad"
      }
    ];
  }

  @Get('educacion')
  getEducacion() {
    return [
      {
        id: 1,
        grado: "Ingeniería en Tecnologías de la Información",
        institucion: "Universidad Tecnológica de Cancún",
        estatus: "En curso",
        area: "Desarrollo de Software"
      },
      {
        id: 2,
        grado: "Bachillerato Tecnológico",
        institucion: "CBTIS No. 56",
        estatus: "Graduado (2023-2024)",
        area: "Programación y Soporte"
      }
    ];
  }
}