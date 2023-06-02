import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosService } from '../productos.service';
import { Productos } from '../productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-name-producto',
  templateUrl: './search-name-producto.component.html',
  styleUrls: ['./search-name-producto.component.css']
})
export class SearchNameProductoComponent implements OnInit {
  searchResults: string;
  resultados: Productos[];

  constructor(private http: HttpClient, private productosService: ProductosService,private router:Router) {}

  ngOnInit(): void {}

  searchName() {
    this.productosService.buscarName(this.searchResults).subscribe(
      (datos: Productos[]) => {
        this.resultados = datos;
      },
      (error) => {
        console.error('Error al realizar la búsqueda:', error);
      }
    );
  }
  irListarProductos(){
    this.router.navigate(['productos']);
  }
}
