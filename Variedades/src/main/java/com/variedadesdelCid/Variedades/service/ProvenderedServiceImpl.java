package com.variedadesdelCid.Variedades.service;

import com.variedadesdelCid.Variedades.dao.ProveedoresDao;
import com.variedadesdelCid.Variedades.entity.Proveedores;
import com.variedadesdelCid.Variedades.execption.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProvenderedServiceImpl implements ProveedoresService {
   @Autowired
    private ProveedoresDao proveedoresDao;

    @Override
    public List<Proveedores> findAll() {
        return (List<Proveedores>) proveedoresDao.findAll();
    }

    @Override
    public List<Proveedores> findByName(String name) {
        return proveedoresDao.findByNameProveedores(name);
    }

    @Override
    public List<Proveedores> findByEmpresa(String empresa) {
        return proveedoresDao.findByEmpresa(empresa);
    }

    @Override
    public Proveedores findById(Long id) {
        Optional<Proveedores> optionalProveedores = proveedoresDao.findById(id);
        if (optionalProveedores.isPresent()){
            return optionalProveedores.get();
        }else {
            throw new NotFoundException("No se pudo encontar la id: "+id);
        }
    }

    @Override
    public void createProveedor(Proveedores proveedores) {
        proveedoresDao.save(proveedores);
    }

    @Override
    public void modifyProveedor(Long id, Proveedores proveedores) {
        if(proveedoresDao.existsById(id)){
            proveedores.setIdProveedores(id);
            proveedoresDao.save(proveedores);
        }else {
            throw new NotFoundException("No se pudo modificar el proveedor con la id: " +id);
        }
    }

    @Override
    public void deleteProveedor(Long id) {
        if(proveedoresDao.existsById(id)){
            proveedoresDao.deleteById(id);
        }else {
            throw new NotFoundException("No se pudo eliminar la id: "+id);
        }
    }
}
