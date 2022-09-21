

class calculadora{

    operacion(){
        /* let labe1 = document.getElementById("label1")
        let labe2 = document.getElementById("label2") */

        let operacion= document.getElementById("operacion").value
        
        switch (operacion) {
            
            case "suma" || "Suma":
                /* labe1.textContent = "ingrese el primer sumando"
                labe2.textContent = "ingrese el segundo sumando"
                this.mostrarcontenido() */
                num1= parseFloat( prompt("ingrese el primer sumando"))
                num2= parseFloat( prompt("ingrese el segundo sumando"))
                this.suma()
                break;
    
            case "resta" || "Resta":
                /* labe1.textContent = "ingrese el minuendo"
                labe2.textContent = "ingrese el sustraendo"
                this.mostrarcontenido() */
                num1= parseFloat( prompt("ingrese el minuendo"))
                num2= parseFloat( prompt("ingrese el sustraendo"))
                this.resta()
                break;
    
            case "multiplicacion" || "multiplicación" || "Multiplicación" || "Multiplicacion":
                /* labe1.textContent = "ingrese el multiplicando"
                labe2.textContent = "ingrese el multiplicador"
                this.mostrarcontenido() */
                num1= parseFloat( prompt("ingrese el multiplicando"))
                num2= parseFloat (prompt("ingrese el multiplicador"))
                this.multiplicacion()

                break;
    
            case "division"|| "división" || "Division" || "División": 
                /* labe1.textContent = "ingrese el dividendo"
                labe2.textContent = "ingrese el divisor"
                this.mostrarcontenido() */
                num1= parseFloat( prompt("ingrese el dividendo"))
                num2= parseFloat( prompt("ingrese el divisor"))
                this.division()

                break;
    
            default:
                alert("No se ha seleccionado ninguna operación valida")
                break;
        }
        
    } 
        
    
    suma(num1,num2){
        let resp= num1+num2
    }
    resta(num1,num2){

        let resp = num1-num2
    }
    multiplicacion(num1,num2){
        let respone = num1*num2
    }
    division(num1,num2){
        let resp = num1/num2
    }


    
    
}
let calc = new calculadora()