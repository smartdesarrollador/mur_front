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
  selector: 'app-services-2',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services-2.component.html',
  styleUrl: './services-2.component.css',
})
export class Services2Component implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = []; // Initialize as empty array

  constructor(
    private dataService: TestimonioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.loadTestimonios();
  }

  loadTestimonios() {
    this.dataService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.listTestimonios = data;
      this.cdr.detectChanges(); // Forcing change detection might not be strictly necessary here
    });
  }

  goToDetail(id: string): void {
    this.router.navigate(['/areas/servicio', id]); // Navegar a la ruta con el parámetro 'id'
  }
}
