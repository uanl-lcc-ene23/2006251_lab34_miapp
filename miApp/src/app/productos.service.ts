import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private https: HttpClient) { }
  //METODOS GET 
  getProductos(){ //Todos los productos
    return this.https.get('https://fakestoreapi.com/products');
  }

  getCategorias(){ //Todas las categorias
    return this.https.get('https://fakestoreapi.com/products/categories');
  }
  getCategoria(parametro: string){ //Obtiene productos por ctaegoria
    return this.https.get('https://fakestoreapi.com/products/category/'+parametro);
  }
  getProducto(){//obtiene un producto en particular- lo va afiltrar por iD
    //https://fakestoreapi.com/products/1
  }
}
