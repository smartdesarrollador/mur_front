import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { VistaComponent } from './pages/vista/vista.component';
import { InicioComponent } from './pages/vista/inicio/inicio.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NuestroEquipoComponent } from './pages/vista/nuestro-equipo/nuestro-equipo.component';

import { AdminGuard } from './guards/admin.guard';
import { EmpleadorGuard } from './guards/empleador.guard';
import { TrabajadorGuard } from './guards/trabajador';
import { AuthGuard } from './guards/auth.guard';

import { PortalComponent } from './paginas/login/portal/portal.component';
import { LayoutUnoComponent } from './layout/layout-uno/layout-uno.component';
import { LayoutDosComponent } from './layout/layout-dos/layout-dos.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutTresComponent } from './layout/layout-tres/layout-tres.component';
import { FirmaComponent } from './pages/vista/firma/firma.component';
import { NuestroEquipo2Component } from './pages/vista/nuestro-equipo/nuestro-equipo-2/nuestro-equipo-2.component';
import { NuestroEquipo3Component } from './pages/vista/nuestro-equipo/nuestro-equipo-3/nuestro-equipo-3.component';
import { NuestroEquipo4Component } from './pages/vista/nuestro-equipo/nuestro-equipo-4/nuestro-equipo-4.component';
import { NuestroEquipo5Component } from './pages/vista/nuestro-equipo/nuestro-equipo-5/nuestro-equipo-5.component';
import { NuestroEquipo6Component } from './pages/vista/nuestro-equipo/nuestro-equipo-6/nuestro-equipo-6.component';

export const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: VistaComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'nuestro-equipo',
        component: NuestroEquipoComponent,
      },
      {
        path: 'nuestro-equipo-2',
        component: NuestroEquipo2Component,
      },
      {
        path: 'nuestro-equipo-3',
        component: NuestroEquipo3Component,
      },
      {
        path: 'nuestro-equipo-4',
        component: NuestroEquipo4Component,
      },
      {
        path: 'nuestro-equipo-5',
        component: NuestroEquipo5Component,
      },
      {
        path: 'nuestro-equipo-6',
        component: NuestroEquipo6Component,
      },
      {
        path: 'firma',
        component: FirmaComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
    ],
  },

  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'layout-uno',
        component: LayoutUnoComponent,
      },
      {
        path: 'layout-dos',
        component: LayoutDosComponent,
      },
      {
        path: 'layout-tres',
        component: LayoutTresComponent,
      },
    ],
  },
  {
    path: '',
    /* canActivate: [AuthGuard], */
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    /* canActivate: [AuthGuard], */ component: PageNotFoundComponent,
  },
];
