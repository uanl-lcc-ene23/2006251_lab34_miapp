import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';

const routes: Routes = [
  {
    path:"inicio",
    component:ProductosComponent
  },
  {
    
    path: '', 
    redirectTo: '/inicio', 
    pathMatch: 'full'
  },
  {
    path:"buscar",
    component:BusquedaComponent
  },
  {
    path:"vistaProducto/:id",
    component:VistaProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
