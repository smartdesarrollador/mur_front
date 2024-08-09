import { Component } from '@angular/core';
/* 17.- TRANSLATE-V1:importar */
import { TranslateModule } from '@ngx-translate/core';
/* /17.- TRANSLATE-V1 */

@Component({
  selector: 'app-subtitulo-parrafo-1',
  standalone: true,
  imports: [
    /* 18.- TRANSLATE-V1 */
    TranslateModule,
    /* /18.- TRANSLATE-V1 */
  ],
  templateUrl: './subtitulo-parrafo-1.component.html',
  styleUrl: './subtitulo-parrafo-1.component.css',
})
export class SubtituloParrafo1Component {}
