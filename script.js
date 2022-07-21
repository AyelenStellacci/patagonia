/* Inicio */ 
let edad;

do{
  edad = parseFloat(prompt('Ingresa tu edad'))

  if(edad<18){
    alert('Tenes que ser mayor de edad para poder ingresar.')
  }

}while(edad<18)
alert('Bienvenido a la pagina oficial de Patagonia:D')


/* Compra */ 
class bebida{
    constructor(nombre, ml, precio, variedad, id){
        this.nombre= nombre;
        this.ml= ml;
        this.precio= precio;
        this.variedad= variedad;
        this.id= id;
    }
    asignarid(array){
        this.id = array.length
    }
}

const bebidas= [
    new bebida("Vera Ipa Lata", 410, 276, "Fija", 1), 
    new bebida("Weisse Lata", 410, 276, "Fija", 2),
    new bebida("Weisse Botella", 730, 396, "Fija", 3),
    new bebida("Amber Lager Lata", 410, 276, "Fija", 4),
    new bebida("Amber Lager Botella", 730, 396, "Fija", 5),
    new bebida("Bohemian Pilsener Lata", 410, 276, "Fija", 6),
    new bebida("Bohemian Pilsener Botella", 730, 396, "Fija", 7),
    new bebida("Hoppy Lager Lata", 410, 276, "Fija", 8),
    new bebida("Hoppy Lager Botella", 730, 396, "Fija", 9),
    new bebida("Kilmetro 24.7 Lata", 410, 276, "Fija", 10),
    new bebida("Kilmetro 24.7 Botella", 730, 396, "Fija", 11),
    new bebida("Kune Lata", 410, 276, "Fija", 12),
    new bebida("Kune Botella", 730, 396, "Fija", 13),
    new bebida("Fernandez IPA Lata", 410, 276, "Estacionales", 14),
    new bebida("Porter Botella", 730, 396, "Estacionales", 15),
    new bebida("Octubrefest Lata", 410, 276, "Estacionales", 16),
    new bebida("Octubrefest Botella", 730, 396, "Estacionales", 17),
    new bebida("Abrazo De Oso Lata", 410, 276, "Edicion Especial", 18),
    new bebida("Sendero Sur Lata", 410, 276, "Edicion Especial", 19),
    new bebida("Solcitra Lata", 410, 276, "Edicion Especial", 20)
]
console.log(bebidas);

let continuar = true;

function mostrar(array){
    let info= "";

    array.forEach(elemento=>{
        info += elemento.id + "." + "Nombre:" + elemento.nombre + "\nCantidad:" + elemento.ml + "ml" + "\nPrecio:" + "$" + elemento.precio + "\nVariedad:" + elemento.variedad + "\n\n"
    });

    return info;
}
alert(mostrar(bebidas)); 

while(continuar){
    let opcion= prompt("Elegi la opcion que mas te guste: \n 1.Lata Vera Ipa \n 2.Lata Weisse \n 3.Botella Weisse \n 4.Lata Amber Lager \n 5.Botella Amber Lager \n 6.Lata Bohemian Pilsener \n 7.Botella Bohemian Pilsener \n 8. Lata Hoppy Lager \n 9. Botella Hoppy Lager \n 10. Lata Kilometro 24.7 \n 11. Botella Kilometro 24.7 \n 12. Lata Kuné \n 13. Botella Kuné \n 14. Lata Fernández IPA \n 15. Botella Porter \n 16. Lata Octubrefest \n 17. Botella Octubrefest \n 18. Lata Abrazo De Oso \n 19. Lata Sendero Sur \n 20.Lata Solcitra");
    let valorlata= 276;
    let valorbotella= 396;

    while(opcion<21){
        function multiplicar(numeroA, numeroB){
            let total= numeroA*numeroB;
            return total;
        }
        switch (opcion){
            case "1":
                cantidad= parseInt(prompt("Ingresa la cantidad de unidades que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
                break;
            case "2":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
                break;
            case "3":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "4":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "5":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "6":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "7":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "8":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "9":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "10":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "11":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "12":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "13":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "14":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "15":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "16":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "17":
                cantidad= parseInt(prompt("Ingresa la cantidad de botellas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorbotella));
            break;
            case "18":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "19":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;
            case "20":
                cantidad= parseInt(prompt("Ingresa la cantidad de latas que queres"));
                alert("El total a abonar es de " +multiplicar(cantidad, valorlata));
            break;

        default:
            alert("Elegiste una opcion invalida. Por favor, introduce un numero del 1 al 20 para continuar");
            break;
        }
        opcion= prompt("Elegi la opcion que mas te guste: \n 1.Lata Vera Ipa \n 2.Lata Weisse \n 3.Botella Weisse \n 4.Lata Amber Lager \n 5.Botella Amber Lager \n 6.Lata Bohemian Pilsener \n 7.Botella Bohemian Pilsener \n 8. Lata Hoppy Lager \n 9. Botella Hoppy Lager \n 10. Lata Kilometro 24.7 \n 11. Botella Kilometro 24.7 \n 12. Lata Kuné \n 13. Botella Kuné \n 14. Lata Fernández IPA \n 15. Botella Porter \n 16. Lata Octubrefest \n 17. Botella Octubrefest \n 18. Lata Abrazo De Oso \n 19. Lata Sendero Sur \n 20.Lata Solcitra.");
    }
}


/* if(total>6000){
    const descuento10 = bebidas.map((precio)=>{return{total,*0.90}})
}
return total;
*/ 
