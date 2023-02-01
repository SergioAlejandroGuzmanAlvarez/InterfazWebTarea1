import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { PaneladminComponent } from './components/paneladmin/paneladmin.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'principal', component: LoginComponent},
  {path: 'paneladmin', component: PaneladminComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'error',component: ErrorComponent},
  {path: '**', redirectTo: 'principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
