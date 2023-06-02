package com.variedadesdelCid.Variedades.controller;

import com.variedadesdelCid.Variedades.entity.Pedidos;
import com.variedadesdelCid.Variedades.entity.Product;
import com.variedadesdelCid.Variedades.service.PedidosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@Validated
@RequestMapping("/pedidos")
@CrossOrigin(origins = "http://localhost:4200/")
public class PedidoController {
    @Autowired
    PedidosService pedidosService;

    @GetMapping
    public List<Pedidos> mostrarPedidos(){
        return pedidosService.findALl();
    }
    @GetMapping(value = "/{id}")
    public Pedidos buscarId(@RequestParam Long id){
        return pedidosService.findById(id);
    }
    @PostMapping()
    public void agregarPedido(@Validated @RequestBody Pedidos pedidos){
        pedidosService.createProductoPedido(pedidos);
    }
    @PutMapping(value = "/{id}")
    public void modificarPedido(@PathVariable Long id, @RequestBody Pedidos pedidos){
        pedidosService.modifyProductoPedido(id,pedidos);
    }
    @DeleteMapping(value = "/{id}")
    public void eliminarPedidosId(@PathVariable Long id){
        pedidosService.deleteProductoPedido(id);
    }
    @DeleteMapping()
    public void eliminarPedidos(){
        pedidosService.deletePedidosAll();
    }
}

