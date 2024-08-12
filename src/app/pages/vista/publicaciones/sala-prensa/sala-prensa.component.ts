import {
  Component,
  AfterViewInit,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SalaService } from 'src/app/services/sala.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import {
  DomSanitizer,
  SafeHtml,
  SafeResourceUrl,
} from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { Banner3Component } from 'src/app/layout/componentes/banner-3/banner-3.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-sala-prensa',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    QuillModule,
    TranslateModule,
    NgxPaginationModule,
    Banner3Component,
  ],
  templateUrl: './sala-prensa.component.html',
  styleUrl: './sala-prensa.component.css',
})
export class SalaPrensaComponent implements OnInit, AfterViewInit {
  p: number = 1;
  safeHtmlList: SafeHtml[] = [];
  urlRaiz = environment.urlRaiz + '/';
  listSalas: any[] = []; // Initialize as empty array

  constructor(
    private dataService: SalaService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadSalas();
  }

  loadSalas() {
    this.dataService.getSalas().subscribe((data: any) => {
      console.log(data);
      this.listSalas = data;
      this.safeHtmlList = this.listSalas.map((item: any) =>
        this.sanitizer.bypassSecurityTrustHtml(item.descripcion)
      );

      this.cdr.detectChanges(); // Forcing change detection might not be strictly necessary here
    });
  }

  ngAfterViewInit(): void {
    // No need to call initializeSlick here (handled in loadSalas)
  }

  getSanitizedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractVideoId(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  extractVideoId(url: string): string {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)|youtu\.be\/([^&]+)/
    );
    return videoIdMatch ? videoIdMatch[1] || videoIdMatch[2] : '';
  }
}
