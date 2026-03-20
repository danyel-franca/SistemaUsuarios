import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})

export class Cadastro {

passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

form = new FormGroup({
  nome : new FormControl('', [Validators.required]),
  email : new FormControl('', [Validators.required, Validators.email]),
  senha : new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)])
});

validatePassword() {
  const password = this.form.get('senha')?.value ?? '';
  const isValid = this.passwordRegex.test(password);
  return isValid;
}

onSubmit(){
  if(this.form.valid)
    console.log("Formulário válido:", this.form.value);
  else
    console.log("Formulário inválido:", this.form.value);
}

  regraMinimoCaractere: Boolean = false; // Começa com false, poque o campo de senha começa vazio
  regraMaximoCaractere: Boolean = false;
  regraLetraMaiuscula: Boolean = false;
  regraLetraMinuscula: Boolean = false;
  regraCaractereEspecial: Boolean = false;
  regraNumerosLetras: Boolean = false;

  validarSenha(senha: string): void {
    
    // Regex das regras
    const rxMin8 = /^.{8,}$/; // Mínimo de 8 caracteres
    const rxMax16 = /^.{0,16}$/; // Máximo de 16 caracteres
    const rxMaiuscula = /[A-Z]/; // Pelo menos uma letra maiúscula
    const rxEspecial = /[^A-Za-z0-9]/; // Pelo menos um caractere especial
    const rxNumero = /\d/; // Pelo menos um número
    const rxLetra = /[A-Za-z]/; // Pelo menos uma letra

    this.regraMinimoCaractere = rxMin8.test(senha);
    this.regraMaximoCaractere = rxMax16.test(senha);
    this.regraLetraMaiuscula = rxMaiuscula.test(senha);
    this.regraCaractereEspecial = rxEspecial.test(senha);
    this.regraNumerosLetras = rxNumero.test(senha) && rxLetra.test(senha);
  }
}
