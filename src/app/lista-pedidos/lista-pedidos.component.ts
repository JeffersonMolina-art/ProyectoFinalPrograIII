import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../pedidos';
import { PedidosService } from '../pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {
  pedidos: Pedidos[];

  constructor(private pedidosService: PedidosService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerPedidos();
  }
  eliminarPedido(id:number){
    this.pedidosService.eliminarPedidos(id).subscribe(dato => {
      console.log(dato);
      this.obtenerPedidos();
    })  
  }

  private obtenerPedidos(){
    this.pedidosService.obtenerListaDePedidos().subscribe(datoPedidos => {
      this.pedidos = datoPedidos;
    })
  }

  actualizarPedido(id:number){
    this.router.navigate(['actualizarPedidos', id]);
  }
  irAddPedido(){
    this.router.navigate(['add-pedidos'])
  }
  
}
