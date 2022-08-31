class ejercicios{
    ventas(){   
        let costo = document.getElementById("costo").value
        costo = parseFloat(costo)
        let des = document.getElementById("descuento").value
        des = parseFloat(des)
        let resp = document.getElementById("resp")
        let iva = document.getElementById("iva").checked
        let valorIva = 0,sub=0,tot=0,valordes=0
        const iva12 = 0.12
        valordes = costo*(des/100)
        sub = costo-valordes
        if (iva==true){
            valorIva=sub*iva12
            valorIva=valorIva.toFixed(2)    
        }
        tot=parseFloat(sub)+parseFloat(valorIva)
        console.log(valordes,sub,valorIva,tot)
    
        resp.textContent=`Costo:${costo.toString()}\nDescuento:${valordes.toString()}\nSubtotal:${sub.toString()}\nIva:${valorIva.toString()}\nTotal:${tot.toString()}` 
    }



    mayor(){
        let num1= document.getElementById("num1").value
        num1=parseFloat(num1)
        let num2= document.getElementById("num2").value
        num2=parseFloat(num2)
        console.log(num1, num2)
        let resp = document.getElementById("resp")
        if (num1==num2){
            resp.textContent="Ambos numeros son iguales"
        }
        else if (num1>num2){
            resp.textContent=`el mayor valor ingresado es: ${num1}`
        }
        else if (num2>num1){
            resp.textContent=`el mayor valor ingresado es: ${num2}`
        }
    
    }

    semana(){
        let dia= document.getElementById("dia").value
        dia=parseInt(dia)
        let resp = document.getElementById("resp")
        switch (dia){
        case 1:
            resp.textContent="Lunes"
            break
        case 2:
            resp.textContent="Martes"
            break
        case 3:
            resp.textContent="Miercoles"
            break
        case 4:
            resp.textContent="Jueves"
            break
        case 5:
            resp.textContent="Viernes"
            break
        case 6:
            resp.textContent="Sabado"
            break
        case 7:
            resp.textContent="Domingo"
            break
        default:
            resp.textContent="Dia no valido"
            break

        }


    }

    presentar(){
    
        let inicio= document.getElementById("inicio").value
        inicio=parseInt(inicio)
        let fin= document.getElementById("fin").value
        fin=parseInt(fin)
        let resp = document.getElementById("resp")
        console.log(inicio, fin)
        if (inicio<fin){
            resp.textContent=`los números entre ${inicio} y ${fin} son:\n`
            while (inicio<fin){

                resp.textContent+=inicio+" \n"
                inicio++
            }
        }
        else if (inicio>fin){
            resp.textContent=`los números entre ${inicio} y ${fin} son:\n`
            while (inicio>fin){
                inicio--
               resp.textContent+=inicio+" \n"

            }
        }
    

    }

    sumar_y_contar(){
        let inicio = document.getElementById("inicio").value
        inicio = parseFloat(inicio)
        let fin = document.getElementById("fin").value
        fin = parseFloat(fin)
        let resp = document.getElementById("resp")
        let suma=0
        let cont=0 
        let remplazo = inicio
        while (inicio<fin){
        suma=suma+inicio
        cont++
        inicio++
        }
        resp.textContent=`La suma de los números entre ${remplazo} y ${fin} es: ${suma} y cantidad entre dichos números es: ${cont}`
        console.log(resp.textContent)
    }

    sumarpares(){
        let limite = document.getElementById("limite").value
        limite=parseFloat(limite)
        let resp = document.getElementById("resp")
        let suma=0
        for (let i=1;i<=limite;i++){
            if (i%2==0){
                suma=suma+i
            }
        }
        console.log(suma)
        resp.textContent=`La suma de los números pares entre 1 y ${limite} es: ${suma}`
    }
    





    divisores(){
        let num= document.getElementById("numero").value
        num=parseInt(num)
        let resp = document.getElementById("resp")
        let i=0
        resp.textContent=`los divisores de ${num} son:\n`
        while (i<num){
            if (num%i==0){
                resp.textContent+=i+"\n"
            }
            i++
        }
    }

    añobisiesto(){
        let año= document.getElementById("año").value
        año=parseInt(año)
        let resp = document.getElementById("resp")
        if (año%4==0 && año%100!=0 || año%400==0){
            resp.textContent=`${año} es un año bisiesto`
        }
        else{
            resp.textContent=`${año} no es un año bisiesto`
        }
    }
    numeroperfecto(){
        let num= document.getElementById("numero").value
        num=parseInt(num)
        let resp = document.getElementById("resp")
        let i=1
        let suma=0
        while (i<num){
            if (num%i==0){
                suma+=i
            }
            i++
        }
        if (suma==num){
            resp.textContent=`${num} es un número perfecto`
        }
        else{
            resp.textContent=`${num} no es un número perfecto`
        }
    }
    compra(){
        alert("su compra ha sido realizada con exito")
    }










}
let ejer = new ejercicios()
