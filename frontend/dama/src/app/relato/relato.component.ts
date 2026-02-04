import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RelatoService, Relato } from '../services/relato.service';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-relato',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, EditorComponent],
  templateUrl: './relato.component.html',
  styleUrls: ['./relato.component.css'],
})
export class RelatoComponent implements OnInit {
  private relatoService = inject(RelatoService);
  private router = inject(Router);

  // Constants to avoid string duplication
  private readonly RESPONSABILIDADE_MSG =
    'As informações escritas são de sua inteira responsabilidade vindo a ser monitorada em eventuais denúncias feitas por usuários. Comprovada alguma irregularidade, seu relato será excluído.';
  private readonly CONTEUDO_VAZIO_MSG =
    'O conteúdo do relato não pode estar vazio.';
  private readonly SUCESSO_MSG = 'O relato foi registrado com sucesso!';
  private readonly FALHA_MSG = 'O relato não foi registrado!';
  private readonly ERRO_MSG = 'Ocorreu um erro ao enviar o relato.';
  private readonly CONFIRMAR_BTN = 'Entendo e desejo publicar';
  private readonly VOLTAR_BTN = 'Voltar e editar';

  relato: Relato = {
    conteudo: '',
    publicador: '',
  };

  mostraConfirmacao = false;
  mostraResposta = false;
  mensagem = this.RESPONSABILIDADE_MSG;
  textoBotao = this.CONFIRMAR_BTN;

  ngOnInit() {
    this.relato.publicador = localStorage.getItem('username') || '';
  }

  relatoConfirmacao(): void {
    // Verifica se há conteúdo real, não apenas espaços em branco ou tags HTML vazias
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.relato.conteudo || '', 'text/html');
    const textContent = doc.body.textContent?.trim() || '';

    if (!textContent) {
      this.mensagem = this.CONTEUDO_VAZIO_MSG;
      this.mostraConfirmacao = true;
      this.textoBotao = this.VOLTAR_BTN;
      this.eventoBotao = () => (this.mostraConfirmacao = false);
    } else {
      this.mostraConfirmacao = true;
      this.mensagem = this.RESPONSABILIDADE_MSG;
      this.textoBotao = this.CONFIRMAR_BTN;
      this.eventoBotao = () => this.enviaRelato();
    }
  }

  updateRelatoContent(content: string) {
    this.relato.conteudo = content;
    // conteúdo atualizado (sem logs de depuração)
  }

  enviaRelato(): void {
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.relato.conteudo || '', 'text/html');
    const textContent = doc.body.textContent?.trim() || '';

    if (!textContent) {
      this.mensagem = this.CONTEUDO_VAZIO_MSG;
      return;
    }

    this.relatoService.registerRelato(this.relato).subscribe({
      next: (response) => {
        if (response.status === 200 || response.status === 201) {
          this.mensagem = this.SUCESSO_MSG;
          setTimeout(() => {
            this.router.navigate(['/muraldeforca']);
          }, 1500);
        } else {
          this.mensagem = this.FALHA_MSG;
        }
      },
      error: (error) => {
        console.error('Erro ao enviar relato:', error);
        this.mensagem = this.ERRO_MSG;
      },
    });
  }

  eventoBotao: () => void = () => this.enviaRelato();
}
