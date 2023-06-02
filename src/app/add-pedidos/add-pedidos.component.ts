import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../pedidos';
import { PedidosService } from '../pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pedidos',
  templateUrl: './add-pedidos.component.html',
  styleUrls: ['./add-pedidos.component.css']
})
export class AddPedidosComponent implements OnInit {
  pedidos: Pedidos = new Pedidos();
  constructor(private pedidosService: PedidosService,private router: Router) { }

  ngOnInit(): void {
  }

  guardarPedido(){
    this.pedidosService.registrarPedido(this.pedidos).subscribe(data => {
      console.log(data);
      this.irListaPedidos();
    }, error => console.log(error));
  }
  irListaPedidos(){
    this.router.navigate(['/pedidos']);
  }
  onSubmit(){
    this.guardarPedido();
  }

}
