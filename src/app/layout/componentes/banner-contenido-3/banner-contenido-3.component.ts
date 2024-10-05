import { Component, OnInit } from '@angular/core';
import { BannerEquipo } from 'src/app/models/banner_equipo.model';
import { BannerEquipoService } from 'src/app/services/banner-equipo.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-contenido-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-contenido-3.component.html',
  styleUrl: './banner-contenido-3.component.css',
})
export class BannerContenido3Component implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerEquipoService) {}

  ngOnInit(): void {
    this.loadBanners();
  }

  loadBanners() {
    return this.dataService.getCategories().subscribe((data: {}) => {
      console.log(data);
      this.listBanners = data;
    });
  }
}
