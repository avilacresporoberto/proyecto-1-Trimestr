db.concesionario.insertMany([
   
    {  
        marca: "ford",
        modelo: "mondeo",
        cv: [110,140],
        tipo:  "berlina",
        combustible: "diesel",
        cambio: "manual",
        carroceria: "familiar",
        extras:  [{techo: "panoramico"},{altavoces: "orrad"}, {maletero:"automatico"}], 
        bola: true        
       
    },
    
    {
        marca: "opel",
        modelo: "astra",
        cv: [110, 160],
        tipo:  "berlina",
        combustible: "diesel",
        cambio: "manual",
        carroceria: "familiar",
        extras:  [{techo: "solar"},{altavoces: "orrad"}, {maletero:"automatico"}],
        bola: false

    },
    
    {
        marca: "mercedes",
        modelo: "gle",
        cv: [180, 250, 300],
        tipo:  "suv",
        combustible: ["diesel", "gasolina"],
        cambio: ["manual", "automatico"],
        carroceria: ["familiar", "sport"],
        extras:  [{techo: "panoramico"}, {altavoces: "samsung"}, {maletero:"automatico"}],
        bola: true      
    },
    
    {
        marca: "toyota",
        modelo: "auris",
        cv: [140, 180, 210],
        tipo:  "suv",
        combustible: ["diesel", "hibrido"],
        cambio: ["manual", "automatico"],
        carroceria: "familiar",
        extras:  [{techo: "panoramico"},{altavoces: "orrad"}, {llantas: "aleación"}],
        bola: true
    },

    {
        marca: "audi",
        modelo: "a4",
        cv: [140, 160, 200],
        tipo:  "suv",
        combustible: ["diesel", "gasolina"],   
        cambio: ["manual", "automatico"],
        carroceria: "familiar",
        extras: [{techo: "panoramico"}, {altavoces: "orrad"}, {maletero:"automatico"}],
        bola: true
    },

    {
        marca: "audi",
        modelo: "a5",
        cv: [160, 180, 230],
        tipo:  "suv",
        combustible: ["diesel", "gasolina"],
        cambio: ["manual", "automatico"],
        carroceria: "familiar",
        extras: [{techo: "solar"}, {altavoces: "orrad"}],
        bola: true  
    },

    {
        marca: "bmw",
        modelo: "x5",
        cv: [210, 280, 330],
        tipo:  "suv",
        combustible: ["diesel", "gasolina"],
        cambio: "manual",
        carroceria: ["familiar", "sport"],
        extras:  [{techo: "panoramico"},{altavoces: " sony"}, {maletero:"automatico"}],
        bola: true
    },

    {
        marca: "audi",
        modelo: "q5",
        cv: [180, 230, 280],
        tipo:  "suv",
        combustible: ["diesel", "gasolina"],
        cambio: "automatico",
        carroceria: ["familiar", "sport"],
        extras: [{ techo: "solar"},{altavoces: "orrad"}],
        bola: true
    },

    {
        marca: "bmw",
        modelo: "x3",
        cv: [180, 230, 320],
        tipo:  "suv",
        combustible: ["diesel", "gasolina", "hibrido"],
        cambio: ["manual", "automatico"],
        carroceria: ["familiar", "sport"],
        extras: [{techo: "panoramico"},{altavoces: "orrad"}, {maletero:"automatico"}],
        bola: true
    },

    {
        marca: "audi",
        modelo: "s5",
        cv: [ 280, 360, 400],
        tipo:  "berlina",
        combustible: ["diesel", "gasolina"],
        cambio: ["manual", "automatico"],
        carroceria:  "sport",
        extras:  [{techo: "panoramico"},{altavoces: "orrad"}, {maletero:"automatico"}],
        bola: false
    },

    {
        marca: "bmw",
        modelo: "i8",
        cv: [ 280, 360],
        tipo:  "deportivo",
        combustible: ["híbrido", "electrico"],
        cambio: ["manual", "automatico"],
        carroceria: ["sport", "biplaza"],
        extras:  [{techo: "solar"},{altavoces: "philips"}, {maletero:"automatico"}],
        bola: false
    },

    {
        marca: "hyundai",
        modelo: "i20",
        cv: [110, 160],
        tipo:  "berlina",
        combustible: ["hibrido", "electrico"],
        cambio: "manual",
        carroceria: "familiar",
        extras: [{ techo: "panoramico"}, {altavoces: "sony"}, {maletero:"automatico"}],
        bola: false
    }

])