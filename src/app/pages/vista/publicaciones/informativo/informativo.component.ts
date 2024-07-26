import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner3Component } from 'src/app/layout/componentes/banner-3/banner-3.component';

@Component({
  selector: 'app-informativo',
  standalone: true,
  imports: [RouterLink, Banner3Component],
  templateUrl: './informativo.component.html',
  styleUrl: './informativo.component.css',
})
export class InformativoComponent {}
