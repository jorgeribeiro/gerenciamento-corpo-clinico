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

2. Credenciamento
    - Formulário com menos campos (remover ano de formatura e titulação, resumir campos de endereço, remover campo de telefone residencial)
    - Sem necessidade de código de cadastro (pois o cadastro terá de ser aprovado pela Gerência)

3. Envio de documentos
    - Após finalizar o credenciamento inicial, enviar e-mail para o médico confirmando os dados
    - Médico realiza login no sistema (com funções limitadas a finalizar o credenciamento)
    - Se estiver no PC, é possível realizar upload normalmente
    - Informar ao médico que é possível abrir o sistema pelo telefone e enviar os documentos necessários tirando foto dos mesmos

4. Análise de credenciamento e documentos
    - Utilizar algoritmos de OCR para realizar a validação automática dos documentos e validar os dados do formulário em bases disponíveis no mercado, excluindo a necessidade de verificação humana, dando agilidade ao processo (semelhante a como o [Nubank](https://nubank.com.br/analise/) valida os dados dos clientes) 
    - O robô marca possíveis pendências e as informa por e-mail ao médico

5. Correção de pendências
    - Médico corrige pendências realizando login no sistema
    - Enquanto existir pendências, repetir passos 4 e 5, senão ir para passo 6

6. Envio de carta de aprovação
    - Caso o algoritmo de análise não encontre demais pendências, a carta de atuação é gerada e enviada automaticamente
    - Médico recebe notificação em seu e-mail
    - Médico entra no sistema, faz o download da carta, assina e realiza upload no sistema
    - Também é possível tirar foto da carta assinada acessando o sistema pelo telefone
    - Alternativa aos pontos acima: o médico credenciado pode receber um termo de comprometimento no sistema e concordar com o mesmo virtualmente, sem necessidade de imprimir/assinar a carta de atuação

## Diferenças

- Utilização de novas tecnologias para melhorar a experiência do usuário (acesso facilitado pelo telefone)
- Envio de documentos facilitado
- Com o upload de documentos, algumas informações do formulário original podem ser suprimidas e preenchidas pelo robô
- Sem necessidade de obter código de cadastro para realizar credenciamento
- O fluxo é único, não havendo pendências nos dados e documentos o credenciamento pode ser feito de uma única vez
- Utilização de algoritmos de validação de dados e documentos para automatizar o processo de análise
