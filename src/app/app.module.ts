import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { ListaProveedoresComponent } from './lista-proveedores/lista-proveedores.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { SearchNameProductoComponent } from './search-name-producto/search-name-producto.component';
import { FormsModule } from '@angular/forms';
import { AddPedidosComponent } from './add-pedidos/add-pedidos.component';
import { AddProveedoresComponent } from './add-proveedores/add-proveedores.component';
import { ActualizarProductoComponent } from './actualizar-producto/actualizar-producto.component';
import { ActualizarPedidoComponent } from './actualizar-pedido/actualizar-pedido.component';
import { ActualizarProveedoresComponent } from './actualizar-proveedores/actualizar-proveedores.component';
import { SearchCategoryProductComponent } from './search-category-product/search-category-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ListaPedidosComponent,
    ListaProveedoresComponent,
    AddProductoComponent,
    SearchNameProductoComponent,
    AddPedidosComponent,
    AddProveedoresComponent,
    ActualizarProductoComponent,
    ActualizarPedidoComponent,
    ActualizarProveedoresComponent,
    SearchCategoryProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
