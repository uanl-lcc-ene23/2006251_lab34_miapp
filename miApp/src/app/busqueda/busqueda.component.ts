import { Component } from '@angular/core';
import { ProductosService } from '../productos.service';
import {Router} from '@angular/router';
import { VistaProductoComponent } from '../vista-producto/vista-producto.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  idProducto:number=0;
  product:any=[];

  constructor(private productosConsulta: ProductosService, private router: Router){

  }

  ngOnInit(): void{
    
  }

  navigateToVistaProducto() {
    this.router.navigateByUrl('/vistaProducto/'+this.idProducto.toString());
  }
  
}
