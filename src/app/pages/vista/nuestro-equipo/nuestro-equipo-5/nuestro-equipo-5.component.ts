import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { BannerContenido3Component } from 'src/app/layout/componentes/banner-contenido-3/banner-contenido-3.component';

@Component({
  selector: 'app-nuestro-equipo-5',
  standalone: true,
  imports: [RouterLink, BannerContenido3Component],
  templateUrl: './nuestro-equipo-5.component.html',
  styleUrl: './nuestro-equipo-5.component.css',
})
export class NuestroEquipo5Component implements OnInit {
  ngOnInit(): void {
    initFlowbite();
  }
}
