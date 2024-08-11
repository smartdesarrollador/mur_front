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
import { QuillModule } from 'ngx-quill';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, QuillModule],
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent implements OnInit {
  safeHtmlList: SafeHtml[] = [];
  urlRaiz = environment.urlRaiz + '/';
  listTestimonios: any[] = [];
  selectedItem: any = null;

  constructor(
    private dataService: TestimonioService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.loadTestimonios();
  }

  selectItem(item: any): void {
    this.selectedItem = item;
  }

  loadTestimonios(): void {
    this.dataService.getCategories().subscribe((data: any) => {
      console.log(data);
      this.listTestimonios = data;

      // Sanitizing the HTML descriptions
      this.safeHtmlList = this.listTestimonios.map((item: any) =>
        this.sanitizer.bypassSecurityTrustHtml(
          this.truncateHtml(item.descripcion, 1000)
        )
      );

      if (this.listTestimonios.length > 0) {
        this.selectedItem = this.listTestimonios[0]; // Select the first item by default
      }
      this.cdr.detectChanges();
    });
  }

  goToDetail(id: string): void {
    this.router.navigate(['/areas/servicio', id]); // Navegar a la ruta con el parámetro 'id'
  }

  truncateHtml(text: string, limit: number): string {
    let charCount = 0;
    let truncatedText = '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const traverseNodes = (node: Node): boolean => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (charCount + node.textContent!.length > limit) {
          truncatedText +=
            node.textContent!.substring(0, limit - charCount) + '...';
          charCount = limit;
          return false; // Stop traversal
        } else {
          truncatedText += node.textContent;
          charCount += node.textContent!.length;
        }
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        truncatedText += `<${(node as Element).tagName.toLowerCase()}`;
        const attributes = (node as Element).attributes;
        for (let i = 0; i < attributes.length; i++) {
          truncatedText += ` ${attributes[i].name}="${attributes[i].value}"`;
        }
        truncatedText += '>';
        const children = node.childNodes;
        for (let i = 0; i < children.length; i++) {
          if (!traverseNodes(children[i])) {
            return false; // Stop traversal
          }
        }
        truncatedText += `</${(node as Element).tagName.toLowerCase()}>`;
      }
      return true; // Continue traversal
    };

    traverseNodes(doc.body);
    return truncatedText;
  }
}
