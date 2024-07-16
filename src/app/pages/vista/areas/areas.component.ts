import { Component } from '@angular/core';
import { Banner1Component } from 'src/app/layout/componentes/banner-1/banner-1.component';
import { ListImagesComponent } from 'src/app/layout/componentes/list-images/list-images.component';
import { MenuLateralComponent } from 'src/app/layout/componentes/menu-lateral/menu-lateral.component';
import { SubtituloParrafo3Component } from 'src/app/layout/componentes/subtitulo-parrafo-3/subtitulo-parrafo-3.component';

@Component({
  selector: 'app-areas',
  standalone: true,
  imports: [
    Banner1Component,
    ListImagesComponent,
    SubtituloParrafo3Component,
    MenuLateralComponent,
  ],
  templateUrl: './areas.component.html',
  styleUrl: './areas.component.css',
})
export class AreasComponent {}
