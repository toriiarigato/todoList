import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
