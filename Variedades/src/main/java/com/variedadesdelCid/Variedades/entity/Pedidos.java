package com.variedadesdelCid.Variedades.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "pedidos")
public class Pedidos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_Peido;
    @NotBlank(message = "El nombre no puede ser vacio")
    private String name_Pedido;
    private String description_Pedido;
    private String marca_Pedido;
    @NotBlank(message = "La categoria no puede ser vacia")
    private String categoria;

    private double precio_Pedido;
    @Column(name = "createAt")
    @Temporal(TemporalType.DATE)
    private Date create_at;

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Long getId_Peido() {
        return id_Peido;
    }

    public void setId_Peido(Long id_Peido) {
        this.id_Peido = id_Peido;
    }

    public String getName_Pedido() {
        return name_Pedido;
    }

    public void setName_Pedido(String name_Pedido) {
        this.name_Pedido = name_Pedido;
    }

    public String getDescription_Pedido() {
        return description_Pedido;
    }

    public void setDescription_Pedido(String description_Pedido) {
        this.description_Pedido = description_Pedido;
    }

    public String getMarca_Pedido() {
        return marca_Pedido;
    }

    public void setMarca_Pedido(String marca_Pedido) {
        this.marca_Pedido = marca_Pedido;
    }

    public double getPrecio_Pedido() {
        return precio_Pedido;
    }

    public void setPrecio_Pedido(double precio_Pedido) {
        this.precio_Pedido = precio_Pedido;
    }

    public Date getCreate_at() {
        return create_at;
    }

    public void setCreate_at(Date create_at) {
        this.create_at = create_at;
    }
}
