import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  res= 0 ;
  res2="0"
  suma(num1:string, num2:string){
    this.res =  parseFloat(num1)+parseFloat(num2);
    this.res2 = this.res.toString()
    if(num1.length<1 || num2.length<1){
      this.res2 = "Ingrese los datos."
    }
  }

  resta(num1:string, num2:string){
    this.res =  parseFloat(num1)-parseFloat(num2);
    this.res2 = this.res.toString()
    if(num1.length<1 || num2.length<1){
      this.res2 = "Ingrese los datos."
    }
  }

  multi(num1:string, num2:string){
    this.res =  parseFloat(num1)*parseFloat(num2);
    this.res2 = this.res.toString()
    if(num1.length<1 || num2.length<1){
      this.res2 = "Ingrese los datos."
    }
  }

  divi(num1:string, num2:string){
    let n1 = parseFloat(num1)
    let n2 = parseFloat(num2)
    this.res =  n1/n2;
    this.res2 = this.res.toString()
    if(num1.length<1 || num2.length<1){
      this.res2 = "Ingrese los datos."
    } else if(n1==0 && n2==0){
      this.res2 = "Infinito?"
    }
  }

}
