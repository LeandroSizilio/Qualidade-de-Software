/**
 * Shared types and default object factories to reduce code duplication
 * across components
 */

import { Profissional, Ong } from '../services/cadastro.service';

/**
 * Factory function to create a default Profissional object
 */
export function createDefaultProfissional(): Profissional {
  return {
    nome_completo: '',
    cpf: '',
    conselho: '',
    contato: '',
    user: {
      password: '',
      username: '',
      email: '',
      perfil: 'pro',
    },
    bio: '',
  };
}

/**
 * Factory function to create a default Ong object
 */
export function createDefaultOng(): Ong {
  return {
    razao_social: '',
    cnpj: '',
    contato: '',
    user: {
      password: '',
      username: '',
      email: '',
      perfil: 'ong',
    },
    bio: '',
  };
}
