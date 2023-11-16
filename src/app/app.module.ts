import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { NumdobleComponent } from './components/numdoble/numdoble.component';
import { MenucollazComponent } from './components/menucollaz/menucollaz.component';
import { CollazComponent } from './components/collaz/collaz.component';
import { ListaproductoComponent } from './components/listaproducto/listaproducto.component';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';
import { PadredeporteComponent } from './components/padredeporte/padredeporte.component';
import { HijodeporteComponent } from './components/hijodeporte/hijodeporte.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NumdobleComponent,
    MenucollazComponent,
    CollazComponent,
    ListaproductoComponent,
    DetalleproductoComponent,
    PadredeporteComponent,
    HijodeporteComponent,
    ComicComponent,
    LibreriaComponent
  ],
  imports: [
    BrowserModule,routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
