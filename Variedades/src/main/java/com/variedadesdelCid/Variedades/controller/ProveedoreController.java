package com.variedadesdelCid.Variedades.controller;

import com.variedadesdelCid.Variedades.entity.Pedidos;
import com.variedadesdelCid.Variedades.entity.Product;
import com.variedadesdelCid.Variedades.entity.Proveedores;
import com.variedadesdelCid.Variedades.service.ProductService;
import com.variedadesdelCid.Variedades.service.ProveedoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/proveedores")
@CrossOrigin(origins = "http://localhost:4200/")

public class ProveedoreController {
    @Autowired
    ProveedoresService proveedoresService;
    @GetMapping
    public List<Proveedores> mostrarProveedores(){
        return proveedoresService.findAll();
    }
    @GetMapping(value = "/{empresa}")
    public List<Proveedores> buscarPorEmpresa(@RequestParam String empresa){
        return proveedoresService.findByEmpresa(empresa);
    }
    @GetMapping(value = "/{id}")
    public Proveedores buscarId(@RequestParam Long id){
        return proveedoresService.findById(id);
    }
    @GetMapping(value = "/{name}")
    public List<Proveedores> buscarPorNombre(@RequestParam String name){
        return proveedoresService.findByName(name);
    }
    @PostMapping()
    public void agregarProveedor(@Validated @RequestBody Proveedores proveedores){
        proveedoresService.createProveedor(proveedores);
    }
    @PutMapping(value = "/{id}")
    public void modificarProveedor(@PathVariable Long id, @RequestBody Proveedores proveedores){
        proveedoresService.modifyProveedor(id,proveedores);
    }
    @DeleteMapping(value = "/{id}")
    public void eliminarProveedorId(@PathVariable Long id){
        proveedoresService.deleteProveedor(id);
    }

}
