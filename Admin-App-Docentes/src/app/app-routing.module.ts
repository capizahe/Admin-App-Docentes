import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ComunidadesComponent } from './components/comunidades/comunidades.component';
import { EmpleosComponent } from './components/empleos/empleos.component';
import { EventosComponent } from './components/eventos/eventos.component';


const routes: Routes = [
  {path: 'noticias', component: NoticiasComponent},
  {path: 'comunidades', component: ComunidadesComponent},
  {path: 'empleos', component: EmpleosComponent},
  {path: 'eventos', component: EventosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
