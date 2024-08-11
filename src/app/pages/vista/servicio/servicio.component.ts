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
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    Banner2Component,
    SubtituloParrafo4Component,
    QuillModule,
  ],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css',
})
export class ServicioComponent implements OnInit {
  safeHtml: SafeHtml | null = null;
  listServicios: any = [];
  valor_id_producto: any;
  urlRaiz = environment.urlRaiz + '/';
  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private dataService: TestimonioService,
    private myFunctions: myFunctions,
    private location: Location,
    private sanitizer: DomSanitizer
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
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
        this.listServicios.descripcion
      );
    });
  }

  goBack(): void {
    this.location.back();
  }
}
