/*EJERCICIO 1*/

drop TABLE Materiales
drop TABLE Proveedores
drop TABLE Proyectos
drop TABLE Entregan

/*Tabla de Materiales*/
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

/*Tabla de Proveedores*/
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')

CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

/*Tabla de Proyectos*/
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

/*Tabla de Entregan*/
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)

BULK INSERT a1274913.a1274913.[Materiales]
  FROM 'e:\wwroot\a1274913\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

BULK INSERT a1274913.a1274913.[Proyectos]
  FROM 'e:\wwroot\a1274913\proyectos.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

BULK INSERT a1274913.a1274913.[Proveedores]
  FROM 'e:\wwroot\a1274913\proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1274913.a1274913.[Entregan]
  FROM 'e:\wwroot\a1274913\entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = ' '
  )

/*EJERCICIO 2*/

INSERT INTO Materiales values(1000, 'xxx', 1000)

Delete from Materiales where Clave = 1000 and Costo = 1000

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)
ALTER TABLE Proveedores add constraint llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Entregan add constraint llaveEntregan PRIMARY KEY (Clave,RFC,Numero,Fecha)

/*EJERCICIO 3*/

SELECT * from Materiales;
SELECT * from Proveedores;
SELECT * from Proyectos;
SELECT * from Entregan;

INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0);

Delete from Entregan where Clave = 0

ALTER TABLE Entregan add constraint cfentreganclave
foreign key (Clave) references Materiales(Clave);
ALTER TABLE Entregan add constraint cfentreganclave
foreign key (RFC) references Materiales(RFC);
ALTER TABLE Entregan add constraint cfentreganclave
foreign key (Numero) references Materiales(Numero);

/*EJERCICIO 4*/

INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);

Delete from Entregan where Cantidad = 0

ALTER TABLE Entregan add constraint Cantidad check (cantidad > 0) ;