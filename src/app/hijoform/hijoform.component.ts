import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-hijoform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijoform.component.html',
  styleUrl: './hijoform.component.css'
})
export class HijoformComponent {

  constructor() { }

  @Output() datosEnviados = new EventEmitter<{ usuarios: string, email: string }>();
  @Input() usuario: string = "";
  @Input() email: string = "";

  actaulizarNombre: String = ""
  actualizarEmail: String = ""
  index2: number = 1
  arrayusuarios: any[] = [];
  id: number = 0;
  mostrarusuarios: string = "";
  mostraremail: string = "";
  actua = false

  ngOnInit() {
    const intervalId = setInterval(() => {

      if (this.usuario == '' && this.email == '') {
      }
      else {
        this.arrayusuarios.push({
          id: this.id++,
          mostrarusuarios: this.usuario,
          mostraremail: this.email
        })
        this.usuario = '';
        this.email = ''
      }
    }, 100);
  }


  mostrarAlert = false
  eliminardato = 0
  EliminarAdvertencia(index: number) {
    this.mostrarAlert = true
    this.eliminardato = index
  }
  eliminar() {
    this.arrayusuarios.splice(this.eliminardato, 1);
    this.mostrarAlert = false
  }
  cancelar() {
    this.mostrarAlert = false
  }
  indiceactualizar: any = 1
  actualizardatos(index: number) {
    this.actaulizarNombre = this.arrayusuarios[index].mostrarusuarios
    this.actualizarEmail = this.arrayusuarios[index].mostraremail
    for (let i = 0; i < this.arrayusuarios.length; i++) {
      if (index === i) {
        this.indiceactualizar = i
      }
    }
    this.actua = true
  }
  Actulizaarray() {
    this.datosEnviados.emit({ usuarios: this.mostrarusuarios, email: this.mostraremail });
    this.arrayusuarios[this.indiceactualizar].mostrarusuarios = this.actaulizarNombre;
    this.arrayusuarios[this.indiceactualizar].mostraremail = this.actualizarEmail;
    this.actua = false
  }

  
}
