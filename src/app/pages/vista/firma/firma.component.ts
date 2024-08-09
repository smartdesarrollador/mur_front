import { Component } from '@angular/core';
import { BannerContenido4Component } from 'src/app/layout/componentes/banner-contenido-4/banner-contenido-4.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-firma',
  standalone: true,
  imports: [TranslateModule, BannerContenido4Component],
  templateUrl: './firma.component.html',
  styleUrl: './firma.component.css',
})
export class FirmaComponent {}
