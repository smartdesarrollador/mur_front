import {
  Component,
  OnInit,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TestimonioService } from 'src/app/services/testimonio.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css',
})
export class MenuLateralComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = [];

  selectedItem: any = null;

  constructor(
    private dataService: TestimonioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.loadTestimonios();
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }

  /* verMas() {
    
    console.log('VER MAS clicked for:', this.selectedItem.title);
  } */

  loadTestimonios() {
    this.dataService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.listTestimonios = data;
      if (this.listTestimonios.length > 0) {
        this.selectedItem = this.listTestimonios[0]; // Select the first item by default
      }
      this.cdr.detectChanges();
    });
  }

  goToDetail(id: string): void {
    this.router.navigate(['/areas/servicio', id]); // Navegar a la ruta con el parámetro 'id'
  }

  truncateText(text: string, limit: number = 1000): string {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '.......';
  }
}
