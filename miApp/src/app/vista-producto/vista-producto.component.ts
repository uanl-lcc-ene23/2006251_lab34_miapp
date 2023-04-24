import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent {
  constructor(private productosConsulta: ProductosService, private rutaActiva: ActivatedRoute){

  }
  producto: any={};
  
  
  ngOnInit(): void{
    this.productosConsulta.getProducto(this.rutaActiva.snapshot.params['id']).subscribe(res =>{
      this.producto=res;
      console.log(res)
    }) 

  }
  
  
 
}

