

class Calculadora {
    sumar(num1, num2) {
     console.log(num1,num2);
     var suma = num1 + num2;
     localStorage.setItem, ('suma:',  suma);
        return suma;
    }

    restar(num1, num2) {
        console.log(num1,num2);
        var rest = num1 - num2;
        localStorage.setItem('resta:', rest);
        return rest;
    }

    dividir(num1, num2) {
        console.log(num1,num2);
        var divi = num1 / num2;
        localStorage.setItem('division:',divi )
        return divi;
    }

    multiplicar(num1, num2) {
      console.log(num1,num2);
      var multi = num1 * num2;
      localStorage.setItem('Multiplicacion:', multi )
    
        return multi;
    }
} 