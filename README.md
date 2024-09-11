Projeto: Avaliação Técnica - Full Stack e Data Analysis -BERNARDO BARROS
# **Estrutura do Projeto**
## **1. Desenvolvimento Frontend (Angular)**
Diretório: testeBernardo/ (para visualização no JSONPlaceholder)/ Etapa\_1\_local/ (para visualização em backend local)


Descrição: Página web construída em Angular que se conecta ao backend e exibe uma lista de produtos, com funcionalidade de:
\- Listar, criar, editar e deletar produtos.
\- Buscar produtos pelo nome.
\- Autenticação via JWT.
### **Funcionalidades:**
\- Componente: product-list.component.ts
`  `Lista todos os produtos e permite operações CRUD.
\- Componente: login.component.ts
`  `Permite login e autenticação com a API via JWT.
### **Como Rodar:**
1\. Entre no diretório frontend e instale as dependências:
`   `npm install
2\. Rode o servidor de desenvolvimento:
`   `ng serve
## **2. Desenvolvimento Backend (Node.js + MySQL/SQL Server)**
Diretório: Etapa\_2/
Descrição: API construída em Node.js com rotas protegidas por JWT para realizar operações CRUD em uma tabela de produtos conectada a um banco de dados MySQL .
### **Funcionalidades:**
\- Arquivo: server.js
`  `Contém a lógica para as rotas de produtos (listar, criar, editar e deletar) e a rota de login.
\- Arquivo: authMiddleware.js
`  `Middleware de autenticação JWT para proteger rotas específicas (criação, edição e remoção de produtos).
### **Como Rodar:**
1\. Entre no diretório backend e instale as dependências:
`   `npm install
2\. Certifique-se de que o banco de dados está rodando e preencha o arquivo .env com as credenciais do banco de dados.
3\. Rode o servidor:
`   `node server.js
## **3. Análise de Dados (Python)**
Diretório: Etapa\_4/
Descrição: Scripts em Python que manipulam dados CSV para gerar estatísticas e um controle de estoque.
### **3.1 Controle de Estoque (Python)**
Arquivo: controle\_estoque.py
Descrição: Sistema simples de controle de estoque que permite:
\- Adicionar itens ao estoque.
\- Remover itens do estoque.
\- Atualizar a quantidade de itens.
\- Exibir a lista de itens no estoque.
### **3.2 Manipulação de Dados com CSV (Python)**
Arquivo: analise\_csv.py
Descrição: Script que faz a leitura de um arquivo CSV, limpa os dados (removendo duplicados e valores ausentes), e gera um relatório com as seguintes estatísticas de uma coluna escolhida:
\- Média
\- Mediana
\- Moda
### **Como Rodar:**
1\. Instale as dependências do Python:
`   `pip install pandas scipy
2\. Execute o script controle de estoque:
`   `python controle\_estoque.py
3\. Execute o script de manipulação de dados CSV:
`   `python analise\_csv.py
4\. Siga as instruções para fornecer o caminho do CSV e a coluna desejada.
# **Conclusão**
Este repositório contém um projeto completo que abrange:
\- Desenvolvimento Frontend em Angular com autenticação JWT e operações CRUD.
\- Desenvolvimento Backend em Node.js integrado com banco de dados MySQL.
\- Scripts em Python para controle de estoque e manipulação de dados CSV, incluindo análise estatística.

-Código VBA utilizado na automação situado no diretório: VBACode\_Etapa\_3.

-Planilha com o Código operando em anexo, assim como o arquivo de Power BI. 
