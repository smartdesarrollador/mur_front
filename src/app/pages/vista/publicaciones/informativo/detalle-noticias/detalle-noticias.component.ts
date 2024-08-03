import { Component, OnInit } from '@angular/core';
import { Banner3Component } from 'src/app/layout/componentes/banner-3/banner-3.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Informativo } from 'src/app/models/informativo.model';
import { InformativoService } from 'src/app/services/informativo.service';
import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse,
  HttpClientModule,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { MasNoticiasComponent } from '../mas-noticias/mas-noticias.component';

@Component({
  selector: 'app-detalle-noticias',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    QuillModule,
    Banner3Component,
    MasNoticiasComponent,
  ],
  templateUrl: './detalle-noticias.component.html',
  styleUrl: './detalle-noticias.component.css',
})
export class DetalleNoticiasComponent implements OnInit {
  safeHtml: SafeHtml | null = null;
  listInformativos: any = [];
  valor_id_producto: any;
  urlRaiz = environment.urlRaiz + '/';

  constructor(
    private dataService: InformativoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
    /* this.listInformativos = this.dataService.selectCategory; */
  }

  ngOnInit(): void {
    /*  this.loadCategories(); */

    this.route.queryParams.subscribe((params) => {
      const categoryId = params['Id'];

      console.log(categoryId);
      this.loadCategories(categoryId);
    });
  }

  loadCategories(categoryId: any) {
    return this.dataService
      .getInformativoById(categoryId)
      .subscribe((data: {}) => {
        console.log(data);
        this.listInformativos = data;
        this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
          this.listInformativos.descripcion
        );
      });
  }
}
