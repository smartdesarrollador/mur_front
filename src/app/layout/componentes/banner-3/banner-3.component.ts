import { Component, OnInit } from '@angular/core';
import { BannerPublicacionService } from 'src/app/services/banner-publicacion.service';
import { BannerPublicacion } from 'src/app/models/banner_publicacion.model';

import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-3.component.html',
  styleUrl: './banner-3.component.css',
})
export class Banner3Component implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerPublicacionService) {}

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
