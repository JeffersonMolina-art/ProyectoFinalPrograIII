import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proveedores } from './proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private baseUrlProveedores = "http://localhost:8080/proveedores";

  constructor(private httpClient : HttpClient) { }
  //Listar proveedores
  obtenerListaDeProveedores():Observable<Proveedores[]>{
    return this.httpClient.get<Proveedores[]>(`${this.baseUrlProveedores}`);
  }
  //Añadir Proveedores
  registrarProveedores(proveedores: Proveedores):Observable<Object>{
    return this.httpClient.post(`${this.baseUrlProveedores}`, proveedores);
  }

  //obtener proveedor id
  obtenerProveedoresId(id:number):Observable<Proveedores>{
    return this.httpClient.get<Proveedores>(`${this.baseUrlProveedores}/{id}?id=${id}`);
  }
  //eliminar producto
  eliminarProveedores(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrlProveedores}/${id}`);
  }
  //Modificar proveedor
  actualizarProveedor(id:number,proveedor:Proveedores) : Observable<Object>{
    return this.httpClient.put(`${this.baseUrlProveedores}/${id}`,proveedor);
  }
 
}
