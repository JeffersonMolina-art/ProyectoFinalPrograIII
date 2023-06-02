import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { Productos } from '../productos';
import { ActivatedRoute, Router } from '@angular/router';
import { PedidosService } from '../pedidos.service';
import { Pedidos } from '../pedidos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Productos[];
  id:number;
  pedidos: Pedidos = new Pedidos();



  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
    
  }
  eliminarProducto(id:number){
    this.productosService.eliminarProducto(id).subscribe(dato => {
      console.log(dato);
      this.obtenerProductos();
    })
  }
  private obtenerProductos(){
    this.productosService.obtenerListaDeProducto().subscribe(dato => {
      this.productos = dato;
    })
  }
  
  actualizarProducto(id:number){
      this.router.navigate(['actualizar-producto', id]);
  }
  irSerachName(){
    this.router.navigate(['buscarName']);
  }
  irAddProducto(){
    this.router.navigate(['add-producto']);
  }
  irSearchCategory(){
    this.router.navigate(['buscarCategory']);
  }
  
}
