package com.variedadesdelCid.Variedades.service;

import com.variedadesdelCid.Variedades.entity.Product;
import com.variedadesdelCid.Variedades.entity.Proveedores;

import java.util.List;

public interface ProveedoresService {
    public List<Proveedores> findAll();
    public List<Proveedores> findByName(String name);
    public List<Proveedores> findByEmpresa(String empresa);
    public Proveedores findById(Long id);
    public void createProveedor(Proveedores proveedores);
    public void modifyProveedor(Long id, Proveedores proveedores);
    public void deleteProveedor(Long id);
}
