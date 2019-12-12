import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import moment from 'moment'
import 'moment/locale/pt'
moment.locale('pt')

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  public diasArray = [];
  public mes = '';
  public ano = '';
  public manipularMes = 0;
  public compromissos = [];
  public dataMaisCompromissos = Date

  ngOnInit() {
    this.manipularCalendario();
  }

  public manipularCalendario() {

    this.diasArray = [];

    this.mes = moment().add(this.manipularMes, 'month').startOf('month').locale('pt').format('MMMM');
    this.ano = moment().add(this.manipularMes, 'month').startOf('month').locale('pt').format('YYYY');
    
    let diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');

    let diaDaSemana = diaInicial.format('dddd'); // recebe a que dia da semana se refere

    console.log(diaDaSemana)
    let qntdDiasMes = diaInicial.daysInMonth();

    if(diaDaSemana == 'Segunda-feira') {
      this.diasArray.push(diaInicial.subtract(1, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
    }

    if(diaDaSemana == 'Terça-feira') {
      this.diasArray.push(diaInicial.subtract(2, 'days'))
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(1, 'days'))
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
    }

    if(diaDaSemana == 'Quarta-feira') {
      this.diasArray.push(diaInicial.subtract(3, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(2, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(1, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
    }
    
    if(diaDaSemana == 'Quinta-feira') {
      this.diasArray.push(diaInicial.subtract(4, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(3, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(2, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(1, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
    }

    if(diaDaSemana == 'Sexta-feira') {
      this.diasArray.push(diaInicial.subtract(5, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(4, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(3, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(2, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(1, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
    }

    if(diaDaSemana == 'Sábado') {
      this.diasArray.push(diaInicial.subtract(6, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(5, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(4, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(3, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(2, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      this.diasArray.push(diaInicial.subtract(1, 'days'));
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
    }
    
    for(let i =0; i < qntdDiasMes; i++) {
      this.diasArray.push(diaInicial.add(i, 'days'))
      diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
    }

    if(
      (this.diasArray[5].format('DD') == '01' && diaInicial.daysInMonth() > 30) ||
      (this.diasArray[6].format('DD') == '01' && diaInicial.daysInMonth() > 30)
    ) {
      for(let i = this.diasArray.length; i < 42; i++) {
        this.diasArray.push(diaInicial.add(i-2, 'days'))
        diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
      }
    } else {
      if(this.diasArray.length < 35) {
        for(let i = this.diasArray.length; i < 35; i++) {
          this.diasArray.push(diaInicial.add(i, 'days'))
          diaInicial = moment().add(this.manipularMes, 'month').startOf('month').locale('pt');
        }
      }
    }

  }

  public avancarMes() {
    this.manipularMes++;
    this.manipularCalendario();
  }

  public voltarMes() {
    this.manipularMes--;
    this.manipularCalendario();
  }

  public mostrarMes(data): string {

    let dt1 = data.clone()
    let dt2 = data.clone().startOf('month')

    if(dt1.isSame(dt2)) return data.format('MMM')
    else ''
  }

  public diaAtual(data): boolean {
    if(data.format("DD-MMM-YYYY") == moment().locale('pt').format("DD-MMM-YYYY")) return true
    else false
  }

  
}
