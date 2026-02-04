# Issue: Corrigir Code Smells no Projeto

## Descrição
Identificar e corrigir code smells no projeto DAMA (frontend e backend) para melhorar a qualidade do código e manutenibilidade.

## Objetivo
- Instalar ferramenta de detecção de code smells
- Identificar pelo menos 3 tipos diferentes de code smells
- Corrigir os smells encontrados
- Integrar a ferramenta no pipeline CI/CD
- Garantir que a pipeline execute com sucesso

## Critério de Aceitação
- [ ] Ferramenta de code smell detection instalada
- [ ] Pelo menos 3 tipos diferentes de code smells corrigidos
- [ ] Ferramenta integrada na pipeline do GitHub Actions
- [ ] Pipeline passa com sucesso
- [ ] PR criado e mergeado

## Definição de Code Smell
Code smells são indicadores de problemas potenciais no código que não são bugs, mas podem causar problemas de manutenção:
- Long methods (métodos muito longos)
- Duplicate code (código duplicado)
- Long parameter lists (listas de parâmetros longas)
- Long classes (classes muito grandes)
- Dead code (código morto)
- Magic numbers/strings (números/strings mágicos)
- Too many responsibilities (muitas responsabilidades)

## Tecnologias
- Frontend: Angular 20, TypeScript
- Backend: Django/Python
- Ferramenta a ser instalada: ESLint (rules adicionais) + possíveis ferramentas complementares
