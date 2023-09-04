import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErfassenComponent } from './erfassen/erfassen.component';
import { TrainierenComponent } from './trainieren/trainieren.component';
import { PruefungComponent } from './pruefung/pruefung.component';

const routes: Routes = [
  { path: 'erfassen', component: ErfassenComponent },
  { path: 'trainieren', component: TrainierenComponent },
  { path: 'pruefung', component: PruefungComponent },
  { path: '', redirectTo: '/erfassen', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
