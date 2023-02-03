var suma;
var rest;
var divi;
var multi;
class Calculadora {
    sumar(num1, num2) {
     console.log(num1,num2);
     localStorage.setItem('suma:', suma = num1 + num2);
        return suma;
    }

    restar(num1, num2) {
        console.log(num1,num2);
        localStorage.setItem('resta:', rest = num1 - num2);
        return rest;
    }

    dividir(num1, num2) {
        console.log(num1,num2);
        localStorage.setItem('division:',divi = num1 / num2)
        return divi;
    }

    multiplicar(num1, num2) {
      console.log(num1,num2);
      localStorage.setItem('Multiplicacion:', multi = num1 * num2)
    
        return multi;
    }
} 