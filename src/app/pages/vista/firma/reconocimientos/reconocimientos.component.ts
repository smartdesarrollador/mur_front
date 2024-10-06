import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SliderReconocimientoService } from 'src/app/services/slider-reconocimiento.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { QuillModule } from 'ngx-quill';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-reconocimientos',
  standalone: true,
  imports: [CommonModule, RouterLink, QuillModule, SlickCarouselModule],
  templateUrl: './reconocimientos.component.html',
  styleUrls: ['./reconocimientos.component.css'],
})
export class ReconocimientosComponent implements OnInit {
  safeHtmlList: SafeHtml[] = [];
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = []; // Initialize as empty array

  slideConfig = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor(
    private dataService: SliderReconocimientoService,
    private router: Router,
    private cdr: ChangeDetectorRef,
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
}
