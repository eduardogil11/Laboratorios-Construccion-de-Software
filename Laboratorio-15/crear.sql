/*Tabla de Materiales*/
CREATE TABLE Materiales
(
  Clave numeric(5),
  Descripcion varchar(50),
  Costo numeric(8,2)
)

/*Tabla de Proveedores*/
CREATE TABLE Proveedores
(
  RFC char(13),
  RazonSocial varchar(50),
)

/*Tabla de Proyectos*/
CREATE TABLE Proyectos
(
  Numero numeric(5),
  Denominacion varchar(50),
)


/*Tabla de Entregan*/
CREATE TABLE Entregan
(
  Clave numeric(5),
  RFC char(13),
  Numero numeric(5),
  Fecha datetime,
  Costo numeric(8,2)
)

/*Borrar tablas*/
drop table Materiales, Proveedores, Proyectos, Entregan

/*Consultar tablas existentes*/
select * from sysobjects where xtype='U'