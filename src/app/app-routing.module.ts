import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { Productos } from './productos';
import { SearchNameProductoComponent } from './search-name-producto/search-name-producto.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { AddPedidosComponent } from './add-pedidos/add-pedidos.component';
import { AddProveedoresComponent } from './add-proveedores/add-proveedores.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ActualizarPedidoComponent } from './actualizar-pedido/actualizar-pedido.component';
import { ActualizarProveedoresComponent } from './actualizar-proveedores/actualizar-proveedores.component';
import { SearchCategoryProductComponent } from './search-category-product/search-category-product.component';



const routes: Routes = [
  {path : 'productos', component : ListaProductosComponent},
  {path :'',redirectTo:'productos',pathMatch:'full'},
  {path : 'buscarName', component : SearchNameProductoComponent},
  {path :'',pathMatch:'full',redirectTo:'buscarName'},
  {path : 'buscarCategory', component : SearchCategoryProductComponent},
  {path :'',pathMatch:'full',redirectTo:'buscarCategory'},
  {path : 'proveedores', component : ListaProveedoresComponent},
  {path :'',redirectTo:'proveedores',pathMatch:'full'},
  {path : 'pedidos', component : ListaPedidosComponent},
  {path :'',redirectTo:'pedidos',pathMatch:'full'},
  {path : 'add-producto', component : AddProductoComponent},
  {path :'',redirectTo:'add-producto',pathMatch:'full'},
  {path : 'add-pedidos', component : AddPedidosComponent},
  {path :'',redirectTo:'add-pedidos',pathMatch:'full'},
  {path : 'add-proveedores', component : AddProveedoresComponent},
  {path :'',redirectTo:'add-proveedores',pathMatch:'full'},
  {path : 'actualizar-producto/:id', component : ActualizarProductoComponent},
  {path :'',redirectTo:'actualizar-producto/:id',pathMatch:'full'},
  {path : 'actualizarPedidos/:id', component : ActualizarPedidoComponent},
  {path :'',redirectTo:'actualizarPedidos/:id',pathMatch:'full'},
  {path : 'actualizar-proveedores/:id', component : ActualizarProveedoresComponent},
  {path :'',redirectTo:'add-proveedores/:id',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


