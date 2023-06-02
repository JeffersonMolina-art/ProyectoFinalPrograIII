package com.variedadesdelCid.Variedades.controller;

import com.variedadesdelCid.Variedades.entity.Product;
import com.variedadesdelCid.Variedades.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "http://localhost:4200/")
public class ProductController {
    @Autowired
    ProductService productService;
    @GetMapping
    public List<Product> mostrarProductos(){
        return productService.findAll();
    }
    @GetMapping(value = "/{id}")
    public Product buscarId(@RequestParam Long id){
        return productService.findById(id);
    }

    @PostMapping()
    public void productAgregarProducto(@Validated @RequestBody Product product){
        productService.createProducto(product);
    }
    @PutMapping(value = "/{id}")
    public void productModificar(@PathVariable Long id, @RequestBody Product product){
        productService.modifyProducto(id,product);
    }
    @DeleteMapping(value = "/{id}")
    public void elimarProduct(@PathVariable Long id) {
        productService.deleteProducto(id);
    }
    @GetMapping(value = "/{name}")
    public List<Product> buscarPorNombre(@RequestParam String name){
        return productService.findByName(name);
    }
    @GetMapping(value = "/{categoria}")
    public List<Product> buscarPorCategory(@RequestParam String category){
        return productService.findByCategory(category);
    }
}
