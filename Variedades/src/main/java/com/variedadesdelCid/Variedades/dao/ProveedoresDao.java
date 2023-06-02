package com.variedadesdelCid.Variedades.dao;

import com.variedadesdelCid.Variedades.entity.Proveedores;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProveedoresDao extends CrudRepository<Proveedores, Long> {
    List<Proveedores> findByNameProveedores(String nameProveedores);

    List<Proveedores> findByEmpresa(String empresa);
}
