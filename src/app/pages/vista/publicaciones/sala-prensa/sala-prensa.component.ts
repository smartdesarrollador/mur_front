import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Banner3Component } from 'src/app/layout/componentes/banner-3/banner-3.component';

@Component({
  selector: 'app-sala-prensa',
  standalone: true,
  imports: [RouterLink, Banner3Component],
  templateUrl: './sala-prensa.component.html',
  styleUrl: './sala-prensa.component.css',
})
export class SalaPrensaComponent {}
