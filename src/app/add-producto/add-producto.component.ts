import { Component, OnInit } from '@angular/core';
import { Productos } from '../productos';
import { ProductosService } from '../productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  producto: Productos = new Productos();

  constructor(private productoService: ProductosService,private router: Router) { }

  ngOnInit(): void {
    
  }

  guardarProducto(){
    this.productoService.registrarProducto(this.producto).subscribe(dato => {
      console.log(dato);
      this.irListaProducto();
    }, error => console.log(error));
  }
  irListaProducto(){
    this.router.navigate(['/productos']);
  }
  onSubmit(){
    this.guardarProducto();
  }

}
