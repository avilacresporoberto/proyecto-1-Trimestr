/* COCHES CON MAS DE 250cv Y QUE NO SEAN AUDI.
> db.concesionario.find( { $and: [ { marca: { $ne: "audi" } }, { cv: { $gt: 250 } } ] } )
*/

/*COCHES QUE PUEDEN  COMPRARSE EN DOS TIPOS DE CV SOLO
>  db.concesionario.find({cv :{$size:2}})      
*/

/*COCHE QUE NO SEA OPEL, SEA TIPO BERLINA Y ADEMÁS TENGA BOLA
db.concesionario.find( { $and: [ { modelo: { $ne: "opel" } }, { tipo: { $eq: "berlina" } }, { bola: true } ] } )
*/

/*COCHE QUE ES BMW PERO NO ESTA DENTRO DE LOS DISTINTOS MODELOS X
db.concesionario.find( { $and: [ { marca: { $eq: "bmw" } }, { modelo: {$not: { $regex:"^x.*"} } } ] } )
*/

/* COCHES QUE PUEDEN TENER CABALLOS DE ENTRE 200 Y 230
db.concesionario.find ( { cv: { $elemMatch: { $gt:200, $lt:230}}})
*/

