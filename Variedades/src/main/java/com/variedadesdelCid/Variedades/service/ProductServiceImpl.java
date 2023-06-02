package com.variedadesdelCid.Variedades.service;

import com.variedadesdelCid.Variedades.dao.ProductDao;
import com.variedadesdelCid.Variedades.entity.Product;
import com.variedadesdelCid.Variedades.execption.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductDao productDao;

    @Override
    public List<Product> findAll() {
        return (List<Product>)productDao.findAll() ;
    }

    @Override
    public List<Product> findByName(String name) {
        return productDao.findByName(name);
    }

    @Override
    public List<Product> findByCategory(String category) {
        return productDao.findByCategory(category);
    }

    @Override
    public Product findById(Long id) {
        Optional<Product> optionalProduct = productDao.findById(id);
        if (optionalProduct.isPresent()){
            return optionalProduct.get();
        }else {
            throw new NotFoundException("No se pudo encontrar la id: " +id);
        }

    }

    @Override
    public void createProducto(Product product) {
        productDao.save(product);
    }

    @Override
    public void modifyProducto(Long id, Product product) {
        if(productDao.existsById(id)){
            product.setId(id);
            productDao.save(product);
        }else{
            throw new NotFoundException("No se pudo modificar el producto");
        }
    }

    @Override
    public void deleteProducto(Long id) {
        if (productDao.existsById(id)){
            productDao.deleteById(id);
        }else{
            throw new NotFoundException("No se pudo borrar la id: "+id);
        }
    }
}
