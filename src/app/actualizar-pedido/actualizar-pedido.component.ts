import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../pedidos';
import { PedidosService } from '../pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-pedido',
  templateUrl: './actualizar-pedido.component.html',
  styleUrls: ['./actualizar-pedido.component.css']
})
export class ActualizarPedidoComponent implements OnInit {
  id: number;
  pedidos: Pedidos = new Pedidos();
  
  constructor(
    private pedidosService: PedidosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pedidosService.obtenerPedidosId(this.id).subscribe(dato => {
      this.pedidos = dato;
    }, error => console.log(error));
  }

  irALaListaDePedidos() {
    this.router.navigate(['/pedidos']);
  }

  onSubmit() {
    this.pedidosService.actualizarPedidos(this.id, this.pedidos).subscribe(dato => {
      this.irALaListaDePedidos();
    }, error => console.log(error));
  }
}
