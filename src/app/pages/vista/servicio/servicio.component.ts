import { Component, OnInit } from '@angular/core';
import { Banner2Component } from 'src/app/layout/componentes/banner-2/banner-2.component';
import { SubtituloParrafo4Component } from 'src/app/layout/componentes/subtitulo-parrafo-4/subtitulo-parrafo-4.component';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { Testimonio } from 'src/app/models/testimonio.model';
import { TestimonioService } from 'src/app/services/testimonio.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { myFunctions } from 'src/app/utils/myFunctions';
import { Location } from '@angular/common';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [CommonModule, Banner2Component, SubtituloParrafo4Component],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css',
})
export class ServicioComponent implements OnInit {
  listServicios: any = [];
  valor_id_producto: any;
  urlRaiz = environment.urlRaiz + '/';
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: TestimonioService,
    private myFunctions: myFunctions,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id'); // Obtener el parámetro 'id'

      console.log(this.id);
      this.loadCategories(this.id);
    });

    this.myFunctions.scrollToTop();
  }

  loadCategories(Id: any) {
    return this.dataService.getServicioById(Id).subscribe((data: {}) => {
      console.log(data);
      this.listServicios = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
