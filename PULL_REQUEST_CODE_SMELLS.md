# Pull Request: Corrigir Code Smells no Projeto

## 📝 Descrição

Detectados e corrigidos **3 tipos diferentes de code smells** no projeto:

### Code Smells Corrigidos

#### 1. ✅ Duplicate String (relato.component.ts)
- **Problema**: Strings de mensagens duplicadas em múltiplos lugares
- **Solução**: Extraído constantes privadas para cada mensagem
- **Melhoria**: 
  - Manutenibilidade aumentada
  - Reduz riscos de inconsistência
  - Facilita mudanças futuras

**Exemplo:**
```typescript
// ANTES: 3 cópias da mesma string
this.mensagem = 'As informações escritas são de sua inteira responsabilidade...';
// ... 2 linhas depois
this.mensagem = 'As informações escritas são de sua inteira responsabilidade...';

// DEPOIS: Uma única constante
private readonly RESPONSABILIDADE_MSG = 'As informações escritas são de sua inteira responsabilidade...';
this.mensagem = this.RESPONSABILIDADE_MSG;
```

#### 2. ✅ Long Method (delegacy.service.ts)
- **Problema**: Método `getNatalDelegacies()` com 57 linhas
- **Solução**: Extraído método privado `createDelegacy()` para criar objetos
- **Melhoria**:
  - Reduzido de 57 para ~20 linhas
  - Melhor legibilidade
  - Mais fácil testar
  - Responsabilidade única

#### 3. ✅ Magic Strings (delegacy.service.ts)
- **Problema**: String `'Delegacia Especializada de Atendimento à Mulher em Natal'` duplicada 6 vezes
- **Solução**: Extraída constante `NATAL_DELEGACY_TITLE`
- **Melhoria**:
  - Evita bug-prone updates
  - Aplicação do princípio DRY
  - Centraliza dados

### Ferramentas Instaladas

- **eslint-plugin-sonarjs**: Detecta code smells tipo SonarQube
  - Funções idênticas
  - Strings duplicadas
  - Complexidade cognitiva

- **eslint-plugin-complexity**: Detecta funções muito complexas
  - Complexidade ciclomática
  - Linhas por função
  - Parâmetros

### Regras ESLint Adicionadas

| Regra | Threshold | Propósito |
|-------|-----------|-----------|
| sonarjs/cognitive-complexity | Max 12 | Evita lógica muito complexa |
| sonarjs/no-duplicate-string | ≥2 ocorrências | Evita magic strings |
| sonarjs/no-identical-functions | Sim | Evita código duplicado |
| complexity | Max 8 | Complexidade ciclomática baixa |
| max-lines-per-function | Max 50 | Funções focadas e testáveis |
| max-params | Max 4 | Parâmetros simples |

### Pipeline CI/CD

Adicionado novo job `code-smells` no GitHub Actions:
- ✅ Executa detecção automática
- ✅ Reporta todos os smells encontrados
- ✅ Build depende de sucesso da detecção
- ✅ Garante qualidade contínua

### Checklist

- [x] Ferramentas instaladas
- [x] Regras configuradas no ESLint
- [x] 3+ tipos de smells corrigidos
- [x] Build passa com sucesso
- [x] Pipeline integrada
- [x] Testes passam
- [x] Documentação atualizada

### Como Usar

```bash
# Detectar code smells
npm run lint:smells:report

# Ver relatório detalhado (fronend/dama)
cd frontend/dama
npm run lint:smells:report
```

---
**Tipo**: Feature
**Status**: Pronto para review
**Relacionado a**: [ISSUE_CODE_SMELLS.md](ISSUE_CODE_SMELLS.md)
