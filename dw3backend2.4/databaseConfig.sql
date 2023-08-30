----- Cria um banco de dados
-- create database dw3;

create table IF NOT EXISTS clientes (
    clienteid bigserial constraint pk_clientes PRIMARY KEY,
    codigo varchar(50) UNIQUE,
    nome VARCHAR(60),
    endereco VARCHAR(50),
    ativo boolean,
    deleted boolean DEFAULT false
);

insert into clientes values 
    (default, 'CLI01', 'João da Silva', 'Rua A1', true),
    (default, 'CLI02', 'Marcia Almeida', 'Rua B2', true)
    ON CONFLICT DO NOTHING;

create table IF NOT EXISTS pedidos (
    pedidoid bigserial constraint pk_pedidos PRIMARY KEY,
    numero bigint UNIQUE,
    data DATE,
    valortotal numeric(9,2),
    clienteid bigint constraint fk_pedido_cliente REFERENCES clientes,    
    deleted boolean DEFAULT false
);

insert into pedidos values 
 (default, 234, '2020-01-31', 6891.60, (SELECT clienteid from CLIENTES where codigo = 'CLI01'))
 ON CONFLICT DO NOTHING;