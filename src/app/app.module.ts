import { RouterModule, Routes,  } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContainerComponent } from './Components/container/container.component';
import { CharacterComponent } from './components/character/character.component';
import { FilmComponent } from './Components/film/film.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NavegadorComponent } from './Components/navegador/navegador.component';
import { PlanetComponent } from './Components/planet/planet.component';
import { SpaceshipComponent } from './Components/spaceship/spaceship.component';
import { SpecieComponent } from './Components/specie/specie.component';
import { VehicleComponent } from './Components/vehicle/vehicle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

//Enrutamiento a cada componente
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'film', component: FilmComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'spaceship', component: SpaceshipComponent },
  { path: 'specie', component: SpecieComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'planet', component: PlanetComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    ContainerComponent,
    FooterComponent,
    HomeComponent,
    FilmComponent,
    PlanetComponent,
    SpaceshipComponent,
    SpecieComponent,
    VehicleComponent,
    CharacterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FontAwesomeModule,
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: true
  })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
