import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MisionService } from 'src/app/services/mision.service';
import { Mision } from 'src/app/models/mision';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-2',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './feature-2.component.html',
  styleUrl: './feature-2.component.css',
})
export class Feature2Component implements OnInit {
  datos_mision: any = [];

  constructor(private misionService: MisionService) {}

  ngOnInit(): void {
    this.cargarMisiones();
  }

  cargarMisiones() {
    this.misionService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.datos_mision = data;
    });
  }
}
