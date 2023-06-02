package com.variedadesdelCid.Variedades.service;

import com.variedadesdelCid.Variedades.entity.Product;

import java.util.List;

public interface ProductService {
    public List<Product> findAll();
    public List<Product> findByName(String name);

    public List<Product> findByCategory(String category);
    public Product findById(Long id);
    public void createProducto(Product product);
    public void modifyProducto(Long id, Product product);
    public void deleteProducto(Long id);
}
