package com.variedadesdelCid.Variedades.dao;

import com.variedadesdelCid.Variedades.entity.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductDao extends CrudRepository<Product, Long> {

    List<Product> findByName(String name);
    List<Product> findByCategory(String category);
}
