import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner3Component } from 'src/app/layout/componentes/banner-3/banner-3.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { MasNoticiasComponent } from './mas-noticias/mas-noticias.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-informativo',
  standalone: true,
  imports: [
    RouterLink,
    TranslateModule,
    Banner3Component,
    NoticiasComponent,
    MasNoticiasComponent,
  ],
  templateUrl: './informativo.component.html',
  styleUrl: './informativo.component.css',
})
export class InformativoComponent {}
