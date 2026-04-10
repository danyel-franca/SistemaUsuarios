import { Component, inject, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../model/usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  imports: [CommonModule],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css',
})

export class ListaUsuarios implements OnInit {
  private service = inject(UsuarioService); // Injeção do serviço de usuários

  listaUsuarios: Usuario[] = []; // Array para armazenar os usuários

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(lista => {
      this.listaUsuarios = lista; // Atribui a lista de usuários obtida do serviço
    })
  }
}
