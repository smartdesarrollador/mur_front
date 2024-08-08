import { Component } from '@angular/core';
/* 7.- TRANSLATE-V1:importar */
import { TranslateModule, TranslateService } from '@ngx-translate/core';
/* /7.- TRANSLATE-V1 */

@Component({
  selector: 'app-footer-logo',
  standalone: true,
  imports: [
    /* 8.- TRANSLATE-V1 */
    TranslateModule,
    /* /8.- TRANSLATE-V1 */
  ],
  templateUrl: './footer-logo.component.html',
  styleUrl: './footer-logo.component.css',
})
export class FooterLogoComponent {
  correo1: string = 'administracion@evv.pe';
  correo2: string = 'marketing@evv.pe';

  /* 9.- TRANSLATE-V1 */
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  /* /9.- TRANSLATE-V1 */
}
