import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { ListaUsuarios } from './lista-usuarios/lista-usuarios';

export const routes: Routes = [
    {path: '', redirectTo: 'cadastro', pathMatch: 'full'},
    {path: 'cadastro', component: Cadastro},
    {path: 'lista-usuarios', component: ListaUsuarios},
    {path: '**', redirectTo: 'cadastro'}
];
