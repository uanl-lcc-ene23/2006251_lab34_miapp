
import { Component, OnInit} from '@angular/core';
import { ProductosService } from '../productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private productosConsulta: ProductosService){

  }
  productos: any=[]; //variable para productos
  categorias: any=[];
  ngOnInit(): void{
    this.obtenerProductos();
    this.obtenerCategorias();
  }

  

  obtenerProductos(){
    this.productosConsulta.getProductos().subscribe(res => {
      this.productos=res;
      console.log(res)
    })
  }

  obtenerCategorias(){
    this.productosConsulta.getCategorias().subscribe(res => {
      this.categorias=res;
    })
  }
  
  filtrarProductosPorCategoria(e:Event){
    if((<HTMLTextAreaElement>e.target).value==null){
      this.obtenerProductos();
    }
    else{
    this.productosConsulta.getCategoria((<HTMLTextAreaElement>e.target).value).subscribe(res =>{
      this.productos=res;
      console.log(res)
    })
  }
  }
}
