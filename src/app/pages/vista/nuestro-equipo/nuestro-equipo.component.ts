import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { BannerContenido3Component } from 'src/app/layout/componentes/banner-contenido-3/banner-contenido-3.component';

@Component({
  selector: 'app-nuestro-equipo',
  standalone: true,
  imports: [BannerContenido3Component],
  templateUrl: './nuestro-equipo.component.html',
  styleUrl: './nuestro-equipo.component.css',
})
export class NuestroEquipoComponent implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
