import { Component, OnInit } from '@angular/core';
import { BannerArea } from 'src/app/models/banner_area.model';
import { BannerAreaService } from 'src/app/services/banner-area.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-1.component.html',
  styleUrl: './banner-1.component.css',
})
export class Banner1Component implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listBanners: any = [];
  constructor(private dataService: BannerAreaService) {}

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
