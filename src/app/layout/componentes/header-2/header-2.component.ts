import { Component } from '@angular/core';

@Component({
  selector: 'app-header-2',
  standalone: true,
  imports: [],
  templateUrl: './header-2.component.html',
  styleUrl: './header-2.component.css',
})
export class Header2Component {
  direccion: string =
    'Los Naranjos 283 San Isidro Municipalidad Metropolitana de Lima';
  telefono: string = '(01) 4219197';
  horario: string = 'Lunes - Viernes (06:00 hts - 20:00 hrs)';
}
