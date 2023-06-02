import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Productos } from '../productos';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  id: number;
  productos: Productos = new Productos();

  constructor(private productosService:ProductosService,private router:Router, private route:ActivatedRoute) { }

  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productosService.obtenerProductoId(this.id).subscribe(dato => {
      this.productos = dato;
    }, error => console.log(error));
  }

  irALaListaDeProductos() {
    this.router.navigate(['/productos']);
  }

  onSubmit() {
    this.productosService.actualizarProducto(this.id, this.productos).subscribe(dato => {
      this.irALaListaDeProductos();
    }, error => console.log(error));
  }

}
