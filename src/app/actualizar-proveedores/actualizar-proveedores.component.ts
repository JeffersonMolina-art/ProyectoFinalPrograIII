import { Component, OnInit } from '@angular/core';
import { Proveedores } from '../proveedores';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-actualizar-proveedores',
  templateUrl: './actualizar-proveedores.component.html',
  styleUrls: ['./actualizar-proveedores.component.css']
})
export class ActualizarProveedoresComponent implements OnInit {
  id: number;
  proveedores: Proveedores = new Proveedores();

  constructor(private proveedoresService:ProveedoresService,private router:Router,private route:ActivatedRoute) { }

  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.proveedoresService.obtenerProveedoresId(this.id).subscribe(dato => {
      this.proveedores = dato;
    }, error => console.log(error));
  }

  irALaListaDeProveedores() {
    this.router.navigate(['/proveedores']);
  }

  onSubmit() {
    this.proveedoresService.actualizarProveedor(this.id, this.proveedores).subscribe(dato => {
      this.irALaListaDeProveedores();
    }, error => console.log(error));
  }

}
