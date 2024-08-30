/* 6.- CRUD-BASICO-V1-P3 */
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { BannerContenido3Component } from 'src/app/layout/componentes/banner-contenido-3/banner-contenido-3.component';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-nuestro-equipo',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    TranslateModule,
    BannerContenido3Component,
    NgxPaginationModule,
  ],
  templateUrl: './nuestro-equipo.component.html',
  styleUrl: './nuestro-equipo.component.css',
})
export class NuestroEquipoComponent implements OnInit {
  p: number = 1;
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];

  id_producto: number[] = [];
  nombre: string[] = [];
  cargo: string[] = [];
  resumen: string[] = [];
  descripcion: string[] = [];
  correo: string[] = [];
  telefono: string[] = [];
  imagen: string[] = [];
  ruta_imagen: string[] = [];
  pdf: string[] = [];
  ruta_pdf: string[] = [];
  categoria_producto_id: number[] = [];

  selectedModalIndex: number | null = null;
  activeIndex: number | null = null;
  activeIndex2: number | null = null;

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

  openModal(index: number) {
    this.selectedModalIndex = index;
  }

  closeModal() {
    this.selectedModalIndex = null;
  }

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  toggleAccordion2(index: number): void {
    this.activeIndex2 = this.activeIndex2 === index ? null : index;
  }

  populateBannerData() {
    this.listBanners.forEach((banner: any) => {
      this.nombre.push(banner.nombre);
      this.cargo.push(banner.cargo);
      this.resumen.push(banner.resumen);
      this.descripcion.push(banner.descripcion);
      this.correo.push(banner.correo);
      this.telefono.push(banner.telefono);
      this.imagen.push(banner.imagen);
      this.ruta_imagen.push(banner.ruta_imagen);
      this.pdf.push(banner.pdf);
      this.ruta_pdf.push(banner.ruta_pdf);
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
/* /6.- CRUD-BASICO-V1-P3 */
