import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { BannerContenido3Component } from 'src/app/layout/componentes/banner-contenido-3/banner-contenido-3.component';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuestro-equipo',
  standalone: true,
  imports: [RouterLink, CommonModule, BannerContenido3Component],
  templateUrl: './nuestro-equipo.component.html',
  styleUrl: './nuestro-equipo.component.css',
})
export class NuestroEquipoComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];

  id_producto: number[] = [];
  nombre: string[] = [];
  resumen: string[] = [];
  descripcion: string[] = [];
  correo: string[] = [];
  telefono: string[] = [];
  imagen: string[] = [];
  ruta_imagen: string[] = [];
  categoria_producto_id: number[] = [];

  constructor(private dataService: ProductoService, private router: Router) {}

  ngOnInit(): void {
    this.loadBanners();
    initFlowbite();
  }

  loadBanners() {
    return this.dataService.getCursos().subscribe((data: {}) => {
      console.log(data);
      this.listBanners = data;
      this.populateBannerData();
    });
  }

  populateBannerData() {
    this.listBanners.forEach((banner: any) => {
      this.nombre.push(banner.nombre);
      this.resumen.push(banner.resumen);
      this.descripcion.push(banner.descripcion);
      this.correo.push(banner.correo);
      this.telefono.push(banner.telefono);
      this.imagen.push(banner.imagen);
      this.ruta_imagen.push(banner.ruta_imagen);
    });
  }

  onDetail(dataProducto: Producto) {
    console.log(dataProducto);
    this.dataService.selectCategory = Object.assign({}, dataProducto);
    this.router.navigate(['/detalle'], {
      queryParams: { Id: dataProducto.id_producto },
    });
  }
}
