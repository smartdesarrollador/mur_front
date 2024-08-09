import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-2',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './header-2.component.html',
  styleUrl: './header-2.component.css',
})
export class Header2Component {
  direccion: string = 'Av. Victor Andrés Belaúnde 280 Of. 701-A, San Isidro';
  telefono: string = '(923)678-637 ';
  horario: string = 'Lunes - Viernes (06:00 hts - 20:00 hrs)';
}
