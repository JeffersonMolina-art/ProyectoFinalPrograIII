package com.variedadesdelCid.Variedades.entity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
@Table(name = "proveedores")
public class Proveedores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProveedores;
    @NotBlank(message = "El nombre no puede ser vacio")
    @Column(name = "name")
    private String nameProveedores;
    @NotBlank(message = "La empresa no puede ser vacia")
    private String empresa;
    private String mail;

    private Long phone;
    @Column(name = "create_At")
    @Temporal(TemporalType.DATE)
    private Date createAT;

    public Long getIdProveedores() {
        return idProveedores;
    }

    public void setIdProveedores(Long idProveedores) {
        this.idProveedores = idProveedores;
    }

    public String getNameProveedores() {
        return nameProveedores;
    }

    public void setNameProveedores(String nameProveedores) {
        this.nameProveedores = nameProveedores;
    }

    public String getEmpresa() {
        return empresa;
    }

    public void setEmpresa(String empresa) {
        this.empresa = empresa;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public Date getCreateAT() {
        return createAT;
    }

    public void setCreateAT(Date createAT) {
        this.createAT = createAT;
    }
}
