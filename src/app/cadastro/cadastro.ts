import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
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
