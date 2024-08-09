import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css',
})
export class CardInfoComponent {}
