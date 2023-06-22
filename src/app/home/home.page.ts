import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  textBoxVisible: boolean = false;
  contenido: string = '';
  resultado: string = '';
  showMultimedia: boolean = false;


  toggleTextBox() {
    this.textBoxVisible = !this.textBoxVisible;
  }

  appendNumber(number: string) {
    this.resultado += number;
  }

  setOperator(operator: string) {
    this.resultado += operator;
  }

  calculate() {
    this.resultado = eval(this.resultado);
  }

  clearCalculator() {
    this.contenido = '';
    this.resultado = '';
  }
  toggleMultimedia() {
    this.showMultimedia = !this.showMultimedia;
  }

}
