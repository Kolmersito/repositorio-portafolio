import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PerfilModule } from './perfil/perfil.module';
import { HabilidadesModule } from './habilidades/habilidades.module';
import { EducacionModule } from './educacion/educacion.module';
import { ProyectosModule } from './proyectos/proyectos.module';

@Module({
  imports: [PerfilModule, HabilidadesModule, EducacionModule, ProyectosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
