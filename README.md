# lojinha_do_if
trabalho em trio da disciplina de desenvolvimento para dispositivos móveis

*O projeto consiste em um sistema que registra clientes, produtos e compras, operando com back-end e front-end*

##Tecnologias Utilizadas
- node.js
- mysql2
- mysql3
- express
- nodemon
- cors

## Funcionalidades

  - CRUD de clientes, produtos e compras;
  - Registro de itens comprados e calculo total de compra;

## Clientes

  - GET /clients - Lista todos os clientes. (Chama o clienteController que utiliza o clienteModel para buscar os - dados)
  - POST /clients - Cria um novo cliente. (Utiliza o clienteController para criar e validar os dados antes de salvar - no banco)
  - PUT /clients/:id - Atualiza um cliente existente. (Chama o clienteController para fazer a atualização)
  - DELETE /clients/:id - Remove um cliente. (Chama o clienteController para deletar o cliente)

## Produtos

  - GET /products - Lista todos os produtos. (Chama o produtoController que utiliza o produtoModel)
  - POST /products - Cria um novo produto. (Chama o produtoController para validar e salvar o produto)
  - PUT /products/:id - Atualiza um produto existente. (Usa o produtoController para alterar dados)
  - DELETE /products/:id - Remove um produto. (Chama o produtoController para deletar um produto específico)

## compras

  - GET /purchases - Lista todas as compras. (Chama o compraController que chama o compraModel)
  - POST /purchases - Registra uma nova compra. (Utiliza o compraController para gerenciar o processo)
  - PUT /purchases/:id - Atualiza uma compra existente. (Usa o compraController para dados de uma compra específica)
  - DELETE /purchases/:id - Remove uma compra. (Chama o compraController para deletar uma compra)

## instalação e uso
  1. Clone o repositório.
  2. Navegue até a pasta do backend.
  3. Instale as dependências:
     <pre>npm install</pre>
  4. Configure as variáveis de ambiente no arquivo ```.env```.
  5. Rode as migrações no banco de dados:
     <pre>npx sequelize-cli db:migrate</pre>
  6. Inicie o servidor:
     <pre>npm start</pre>
## Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga as etapas abaixo:
  1. Fork o repositório.
  2. Crie uma nova branch para suas alterações:
<pre>git checkout -b feature/nome-da-sua-feature</pre>
  3. Faça suas alterações e commit:
<pre>git commit -m "Descrição da sua alteração"</pre>
  4. Envie suas alterações para o repositório remoto:
<pre>git push origin feature/nome-da-sua-feature</pre>
  5. Crie um pull request.

## Autor
Felipe Moreira Mares
