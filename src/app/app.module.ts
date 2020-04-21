import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route,  } from '@angular/router';

import { AppComponent } from './app.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { ContainerComponent } from './container/container.component';

const rutas: Route[] = [
];

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
