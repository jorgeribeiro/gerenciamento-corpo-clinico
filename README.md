# Gerenciamento do Corpo Clínico

Projeto visa propor melhorias para um sistema existente de gerenciamento de corpo clínico, que inclui:
- Login
- Cadastro
- Envio de documentos
- Análise do cadastro
- Aprovação

## Melhorias propostas

### Tecnologias

- React
- Firebase/AWS

### Fluxo

1. Página inicial (autenticação ou cadastro)
    - Login
    - Esqueci minha senha
    - Cadastro

2. Credenciamento inicial
    - Formulário com menos campos (remover ano de formatura e titulação, resumir campos de endereço, remover campo de telefone residencial)
    - Sem necessidade de código de cadastro (pois o cadastro terá de ser aprovado pela Gerência)

3. Envio de documentos
    - Após finalizar o credenciamento inicial, enviar e-mail para o médico confirmando os dados
    - Médico realiza login no sistema (com funções limitadas a upload)
    - Se estiver no PC, é possível realizar upload
    - Informar ao médico que é possível abrir o sistema pelo telefone e enviar os documentos necessários tirando foto dos mesmos

4. Análise dos documentos
    - A Gerência do Corpo Clínico realiza a análise do credenciamento e documentos enviados
    - Marca possíveis pendências e retorna ao e-mail do médico

5. Correção de pendências
    - Médico corrige pendências recebidas realizando login no sistema
    - Enquanto existir pendências, repetir passo 4, senão ir para passo 6

6. Envio de carta de aprovação
    - A Gerência do Corpo Clínico disponibiliza a carta de atuação no sistema
    - Médico recebe notificação em seu e-mail
    - Médico entra no sistema, faz o download da carta, assina e realiza upload no sistema
    - Também é possível tirar foto da carta acessando o sistema pelo telefone