package com.variedadesdelCid.Variedades.service;

import com.variedadesdelCid.Variedades.entity.Pedidos;

import java.util.List;

public interface PedidosService {
    public List<Pedidos> findALl();
    public Pedidos findById(Long id);
    public void createProductoPedido(Pedidos pedidos);
    public void modifyProductoPedido(Long id, Pedidos pedidos);
    public void deleteProductoPedido(Long id);
    public void deletePedidosAll();
}
