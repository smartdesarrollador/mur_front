import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  description: string;
  enlace: string;
}

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-lateral.component.html',
  styleUrl: './menu-lateral.component.css',
})
export class MenuLateralComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Legal Compliance',
      description:
        'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.',
      enlace: 'Ver mas',
    },
    {
      title: 'Corporativo',
      description: 'Descripción de Corporativo...',
      enlace: 'Ver mas',
    },
    {
      title: 'Fusiones y Adquisiciones',
      description: 'Descripción de Fusiones y Adquisiciones...',
      enlace: 'Ver mas',
    },

    // Add more menu items as needed
  ];

  selectedItem: MenuItem | null = null;
  selectedIndex: number = 0;

  ngOnInit() {
    this.selectItem(0); // Select the first item by default
  }

  selectItem(index: number) {
    this.selectedItem = this.menuItems[index];
    this.selectedIndex = index;
  }
}
