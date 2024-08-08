import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
/* 11.- TRANSLATE-V1  */
import { TranslateModule, TranslateService } from '@ngx-translate/core';
/* /11.- TRANSLATE-V1  */

@Component({
  selector: 'app-navbar-dropdown',
  standalone: true,
  imports: [
    RouterLink,
    /* 12.- TRANSLATE-V1  */
    TranslateModule,
    /* /12.- TRANSLATE-V1  */
  ],
  templateUrl: './navbar-dropdown.component.html',
  styleUrl: './navbar-dropdown.component.css',
})
export class NavbarDropdownComponent implements OnInit {
  constructor(
    /* 13.- TRANSLATE-V1  */ private translate: TranslateService /* /13.- TRANSLATE-V1  */
  ) {}

  /* 14.- TRANSLATE-V1  */
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  /* /14.- TRANSLATE-V1  */

  ngOnInit(): void {
    initFlowbite();
  }
}
