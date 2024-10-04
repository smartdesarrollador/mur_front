import { Component, OnInit } from '@angular/core';
import { BannerFirma } from 'src/app/models/banner_firma.model';
import { BannerFirmaService } from 'src/app/services/banner-firma.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-contenido-4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-contenido-4.component.html',
  styleUrl: './banner-contenido-4.component.css',
})
export class BannerContenido4Component implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerFirmaService) {}

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
