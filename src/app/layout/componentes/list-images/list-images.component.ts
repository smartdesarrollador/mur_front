import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { IndustriaService } from '../../../services/industria.service';
import { Industrias } from '../../../models/industrias.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-images',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './list-images.component.html',
  styleUrl: './list-images.component.css',
})
export class ListImagesComponent implements OnInit {
  industrias: Industrias[] = [];
  urlRaiz = environment.urlRaiz + '/';

  constructor(private industriaService: IndustriaService) {}

  ngOnInit(): void {
    this.cargarIndustrias();
  }

  cargarIndustrias(): void {
    this.industriaService.getCategories().subscribe({
      next: (data: any) => {
        this.industrias = data;
      },
      error: (error) => {
        console.error('Error al cargar industrias:', error);
      },
    });
  }
}
