import { Component, OnInit } from '@angular/core';
import { Proveedores } from '../proveedores';
import { ProveedoresService } from '../proveedores.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-proveedores',
  templateUrl: './add-proveedores.component.html',
  styleUrls: ['./add-proveedores.component.css']
})
export class AddProveedoresComponent implements OnInit {
  proveedores: Proveedores = new Proveedores();
  constructor(private proveedoresService: ProveedoresService,private router: Router) { }

  ngOnInit(): void {
  }
  guardarProveedor(){
    this.proveedoresService.registrarProveedores(this.proveedores).subscribe(dato => {
      console.log(dato);
      this.irListaProveedores();
    }, error => console.log(error));
  }
  irListaProveedores(){
    this.router.navigate(['/proveedores']);
  }
  onSubmit(){
    this.guardarProveedor();
  }

}
