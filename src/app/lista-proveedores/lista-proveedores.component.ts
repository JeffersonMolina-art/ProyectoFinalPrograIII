import { Component, OnInit } from '@angular/core';
import { Proveedores } from '../proveedores';
import { ProveedoresService } from '../proveedores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proveedores',
  templateUrl: './lista-proveedores.component.html',
  styleUrls: ['./lista-proveedores.component.css']
})
export class ListaProveedoresComponent implements OnInit {
  proveedores: Proveedores[];

  constructor(private proveedoresService: ProveedoresService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  eliminarProveedores(id:number){
    this.proveedoresService.eliminarProveedores(id).subscribe(dato => {
      console.log(dato);
      this.obtenerProductos();
    })
  }

  private obtenerProductos(){
    this.proveedoresService.obtenerListaDeProveedores().subscribe(datoProveedores => {
      this.proveedores = datoProveedores;
    })
  }

  actualizarProveedores(id:number){
    this.router.navigate(['actualizar-proveedores',id]);
  }
  irAddProveedores(){
    this.router.navigate(['add-proveedores']);
  }

}
