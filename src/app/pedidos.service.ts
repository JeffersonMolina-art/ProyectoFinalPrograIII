import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidos } from './pedidos';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private baseUrlPedidos = "http://localhost:8080/pedidos";

  constructor(private httpClient : HttpClient) { }
  //Listar pedidos
  obtenerListaDePedidos():Observable<Pedidos[]>{
    return this.httpClient.get<Pedidos[]>(`${this.baseUrlPedidos}`);
  }
  //añadir pedidos
  registrarPedido(pedidos:Pedidos):Observable<Object>{
    return this.httpClient.post(`${this.baseUrlPedidos}`, pedidos);
  }
  //obtener proveedor id
  obtenerPedidosId(id:number):Observable<Pedidos>{
    return this.httpClient.get<Pedidos>(`${this.baseUrlPedidos}/{id}?id=${id}`);
  }
  //eliminar pedido
  eliminarPedidos(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrlPedidos}/${id}`);
  }
  //Modificar pedidos
  actualizarPedidos(id:number,pedido:Pedidos) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrlPedidos}/${id}`,pedido);
  }
}
