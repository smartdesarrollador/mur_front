import {
  Component,
  AfterViewInit,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
/* import 'slick-carousel'; */
import { Router, RouterLink } from '@angular/router';
import { SliderComentarioService } from 'src/app/services/slider-comentario.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, RouterLink, QuillModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css',
})
export class ComentariosComponent implements OnInit, AfterViewInit {
  safeHtmlList: SafeHtml[] = [];
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = []; // Initialize as empty array

  constructor(
    private dataService: SliderComentarioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private el: ElementRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadTestimonios();
  }

  loadTestimonios() {
    this.dataService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.listTestimonios = data;
      this.safeHtmlList = this.listTestimonios.map((item: any) =>
        this.sanitizer.bypassSecurityTrustHtml(item.descripcion)
      );

      this.cdr.detectChanges(); // Forcing change detection might not be strictly necessary here

      // Initialize Slick only after data is available
      this.initializeSlick();
    });
  }

  ngAfterViewInit(): void {
    // No need to call initializeSlick here (handled in loadTestimonios)
  }

  private initializeSlick() {
    if (this.listTestimonios.length > 0) {
      setTimeout(() => {
        const $ = (window as any).$;
        if ($) {
          $('.multiple-items')
            .not('.slick-initialized')
            .slick({
              dots: true,
              infinite: true,
              speed: 300,
              slidesToShow: 4,
              slidesToScroll: 1,
              adaptiveHeight: true,
              arrows: true, // Asegúrate de que esto esté en true
              prevArrow:
                '<button  type="button" class="slick-prev text-red-500"><</button>',
              nextArrow:
                '<button  type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
              autoplay: true,
              autoplaySpeed: 1000,
              responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  },
                },
              ],
            });
        } else {
          console.error('jQuery no está disponible');
        }
      });
    }
  }
}
