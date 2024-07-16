import { Component } from '@angular/core';
import { Banner2Component } from 'src/app/layout/componentes/banner-2/banner-2.component';
import { SubtituloParrafo4Component } from 'src/app/layout/componentes/subtitulo-parrafo-4/subtitulo-parrafo-4.component';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [Banner2Component, SubtituloParrafo4Component],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css',
})
export class ServicioComponent {}
