import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Informativo } from 'src/app/models/informativo.model';
import { InformativoService } from 'src/app/services/informativo.service';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mas-noticias',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './mas-noticias.component.html',
  styleUrl: './mas-noticias.component.css',
})
export class MasNoticiasComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  listInformativos: any = [];
  constructor(
    private dataService: InformativoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadInformativos();
  }

  loadInformativos() {
    return this.dataService.getInformativos().subscribe((data: {}) => {
      console.log(data);
      this.listInformativos = data;
    });
  }

  onDetail(dataInformativo: Informativo) {
    console.log(dataInformativo);
    this.dataService.selectCategory = Object.assign({}, dataInformativo);
    this.router.navigate(['/publicaciones/informativo/detalle'], {
      queryParams: { Id: dataInformativo.id_informativo },
    });
  }
}
