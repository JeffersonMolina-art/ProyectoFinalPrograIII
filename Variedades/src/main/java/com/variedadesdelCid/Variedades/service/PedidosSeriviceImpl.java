package com.variedadesdelCid.Variedades.service;

import com.variedadesdelCid.Variedades.dao.PedidoDao;
import com.variedadesdelCid.Variedades.entity.Pedidos;
import com.variedadesdelCid.Variedades.execption.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PedidosSeriviceImpl implements PedidosService{
    @Autowired
    private PedidoDao pedidoDao;
    @Override
    public List<Pedidos> findALl() {
        return (List<Pedidos>)pedidoDao.findAll() ;
    }

    @Override
    public Pedidos findById(Long id) {
        Optional<Pedidos> optionalPedidos = pedidoDao.findById(id);
        if (optionalPedidos.isPresent()){
            return optionalPedidos.get();
        }else{
            throw new NotFoundException("Pedido no encontrado la id: "+id);
        }
    }

    @Override
    public void createProductoPedido(Pedidos pedidos) {
        pedidoDao.save(pedidos);
    }

    @Override
    public void modifyProductoPedido(Long id, Pedidos pedidos) {
        if(pedidoDao.existsById(id)){
            pedidos.setId_Peido(id);
            pedidoDao.save(pedidos);
        }else{
            throw new NotFoundException("No se pudo modificar el pedido");
        }
    }

    @Override
    public void deleteProductoPedido(Long id) {
        if(pedidoDao.existsById(id)){
            pedidoDao.deleteById(id);
        }else {
            throw new NotFoundException("No se pudo borrar la id: "+id);
        }
    }

    @Override
    public void deletePedidosAll() {
        pedidoDao.deleteAll();
    }
}
