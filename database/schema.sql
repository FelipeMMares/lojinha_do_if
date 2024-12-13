-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS loja;
USE loja;

-- Tabela de clientes
CREATE TABLE IF NOT EXISTS cliente (
    id_client INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(60) UNIQUE,
    bornDate DATE NOT NULL,
    status VARCHAR(8) NOT NULL CHECK (status IN ('ativo', 'inativo'))
);

-- Tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
    id_product INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(50) NOT NULL,
    brand VARCHAR(30),
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL,
    status VARCHAR(8) NOT NULL CHECK (status IN ('ativo', 'inativo'))
);

-- Tabela de compras
CREATE TABLE IF NOT EXISTS compra (
    id_conmpra INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    status VARCHAR(8) NOT NULL CHECK (status IN ('cancelado', 'finalizado')),
    id_cliente INT NOT NULL,
    id_produto INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente (id_client),
    FOREIGN KEY (id_produto) REFERENCES produtos (id_product)
);

-- Inserts para teste
INSERT INTO cliente (name, email, bornDate, status)
VALUES ('João Silva', 'joao@gmail.com', '1990-05-15', 'ativo');

INSERT INTO produtos (name, brand, price, quantity, status)
VALUES ('Notebook', 'Dell', 3500.00, 10, 'ativo');

INSERT INTO compra (total, status, id_cliente, id_produto)
VALUES (3500.00, 'finalizado', 1, 1);
