import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private baseUrlProducto = "http://localhost:8080/productos";

  constructor(private httpClient : HttpClient) { }
  //Listar productos
  obtenerListaDeProducto():Observable<Productos[]>{
    return this.httpClient.get<Productos[]>(`${this.baseUrlProducto}`);
  }
  //Registrar producto
  registrarProducto(producto:Productos):Observable<Object>{
    return this.httpClient.post(`${this.baseUrlProducto}`, producto);
  }
  //Obtener por id y por nombre
  obtenerProductoId(id:number):Observable<Productos>{
    return this.httpClient.get<Productos>(`${this.baseUrlProducto}/{id}?id=${id}`);
  }
  buscarName(name: string): Observable<any> {
    const url = `${this.baseUrlProducto}/{name}?name=${name}`;
    return this.httpClient.get(url);
  }
  buscarCategoria(category:string):Observable<any>{
    const url = `${this.baseUrlProducto}/{categoria}?category=${category}`;
    return this.httpClient.get(url);
  }
  //Modificar producto
  actualizarProducto(id:number,productos:Productos) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrlProducto}/${id}`,productos);
  }

  //eliminar producto
  eliminarProducto(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrlProducto}/${id}`);
  }


}
