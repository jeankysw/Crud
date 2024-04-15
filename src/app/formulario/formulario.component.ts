import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HijoformComponent } from '../hijoform/hijoform.component';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, HijoformComponent, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'

})
export class FormularioComponent {

  ngOnInit(): void {

  }
  nuevoUsuario = { nombre: '', email: '' };
  usuarios: any = [];
  nombre = ""
  email = ""
  guardarnombre = ""
  guardaremail = ""
  error: boolean = false;
  error2: boolean = false;
  exito = false

  recibirDatos(datos: any) {
    this.nombre = datos.usuarios
    this.email = datos.email
  }
  submitForm() {
    if (this.nombre.length == 0 && this.email.length == 0) {
      this.error = true
      this.error2 = true
      this.exito = false
    }
    if (this.nombre.length == 0 && this.email.length >= 1) {
      this.error = true
      this.error2 = false
      this.exito = false
    }
    if (this.email.length == 0 && this.nombre.length >= 1) {
      this.error = false
      this.error2 = true
      this.exito = false
    }
    if (this.nombre.length >= 1 && this.email.length >= 1) {
      this.guardarnombre = this.nombre
      this.guardaremail = this.email
      this.exito = true
      this.error = false
      this.error2 = false
      this.nombre = ""
      this.email = ""
    }
  }




}
