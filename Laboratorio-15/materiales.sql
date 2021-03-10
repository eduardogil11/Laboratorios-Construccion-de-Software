/*Tabla de Materiales*/
BULK INSERT a1274913.a1274913.[Materiales]
   FROM 'e:\wwwroot\a1274913\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

/*Tabla de Proveedores*/
BULK INSERT a1274913.a1274913.[Proveedores]
   FROM 'e:\wwwroot\a1274913\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

/*Tabla de Proyectos*/
BULK INSERT a1274913.a1274913.[Proyectos]
   FROM 'e:\wwwroot\a1274913\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

/*Tabla de Entregan*/
SET DATEFORMAT dmy
BULK INSERT a1274913.a1274913.[Entregan]
   FROM 'e:\wwwroot\a1274913\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )