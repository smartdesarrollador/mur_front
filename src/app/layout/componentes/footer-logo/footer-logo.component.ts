import { Component } from '@angular/core';
/* 16.- TRANSLATE-V1:importar */
import { TranslateModule } from '@ngx-translate/core';
/* /16.- TRANSLATE-V1 */

@Component({
  selector: 'app-footer-logo',
  standalone: true,
  imports: [
    /* 17.- TRANSLATE-V1 */
    TranslateModule,
    /* /17.- TRANSLATE-V1 */
  ],
  templateUrl: './footer-logo.component.html',
  styleUrl: './footer-logo.component.css',
})
export class FooterLogoComponent {
  correo1: string = 'administracion@evv.pe';
  correo2: string = 'marketing@evv.pe';
}
