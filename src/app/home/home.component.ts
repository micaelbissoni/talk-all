import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import FakeApi from '../../assets/fakeapi.json';

export interface Section {
  message: string;
  updated: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  atendimentos = [];
  messages: Section[] = [
    {
      message: 'Bom dia gostaria de falar sobre um problema de faturamento',
      updated: new Date('1/1/2019'),
    },
    {
      message: 'Bom dia o senhor já abriu um novo atendimento pelo central de assinante?',
      updated: new Date('1/17/2019'),
    },
    {
      message: 'Sim ontem o número do protocolo é 123456',
      updated: new Date('1/28/2019'),
    }
  ];
  
  atendimentoTipos = [
    {
      value: 0,
      label: "Faturamento"
    },
    {
      value: 1,
      label: "Técnico"
    },
    {
      value: 2,
      label: "Financeiro"
    }        
  ];
  selected = new FormControl(0);
  
  constructor() { }

  ngOnInit() {
    this.atendimentos = FakeApi.clientes;
  }

  addAtendimento() {
    this.atendimentos.push({
      name: "Novo Cliente"
    });
    this.selected.setValue(this.atendimentos.length - 1);
  }

  identifyAtendimento() {
  }

  removeAtendimento(index: number) {
    this.atendimentos.splice(index, 1);
  }

}
