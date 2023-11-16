import { Routes, RouterModule } from "@angular/router"; 
import {ModuleWithProviders} from '@angular/core'; 
import { HomeComponent } from "./components/home/home.component";
import { NumdobleComponent } from "./components/numdoble/numdoble.component";
import { CollazComponent } from "./components/collaz/collaz.component";
import { ListaproductoComponent } from "./components/listaproducto/listaproducto.component";
import { DetalleproductoComponent } from "./components/detalleproducto/detalleproducto.component";
import { PadredeporteComponent } from "./components/padredeporte/padredeporte.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
const appRoutes: Routes = [
    { path: "", component: HomeComponent},
    { path: "doble/:numero", component: NumdobleComponent},
    { path: "collaz/:numero", component: CollazComponent},
    { path: "lista", component: ListaproductoComponent},
    { path: "detalle/:nombre/:imagen/:precio", component: DetalleproductoComponent},
    { path: "padredeporte", component: PadredeporteComponent},
    { path: "libreria", component: LibreriaComponent},
]

export const appRoutingProvider: any[] = []; 
export const routing: ModuleWithProviders<any> =  RouterModule.forRoot(appRoutes); 