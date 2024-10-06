import {
  Component,
  AfterViewInit,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SliderComentarioService } from 'src/app/services/slider-comentario.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, RouterLink, QuillModule, SlickCarouselModule],
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit, AfterViewInit {
  safeHtmlList: SafeHtml[] = [];
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = []; // Initialize as empty array

  slideConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow:
      '<button  type="button" class="slick-prev text-red-500"><</button>',
    nextArrow:
      '<button  type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
    });
  }

  ngAfterViewInit(): void {
    // No need to call initializeSlick here (handled in loadTestimonios)
  }
}
