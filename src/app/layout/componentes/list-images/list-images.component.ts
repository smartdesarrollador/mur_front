import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-list-images',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './list-images.component.html',
  styleUrl: './list-images.component.css',
})
export class ListImagesComponent {}
