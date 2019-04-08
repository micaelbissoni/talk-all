import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import FakeApi from '../../assets/fakeapi.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  atendimentos = [];
  messages = [];
  public now: number = 0;

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

  identifyAtendimento(index) {
    this.selected.setValue(index);
  }

  removeAtendimento(index: number) {
    this.atendimentos.splice(index, 1);
  }

  sendMessage(message) {
    this.messages.push({
      message: message,
      updated: Date.now(),
    });
  }
}
