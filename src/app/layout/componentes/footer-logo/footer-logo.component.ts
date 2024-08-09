import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-logo',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer-logo.component.html',
  styleUrl: './footer-logo.component.css',
})
export class FooterLogoComponent {
  correo1: string = 'administracion@evv.pe';
  correo2: string = 'marketing@evv.pe';
}
