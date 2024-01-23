-- Arquivo: schema.sql

-- Criação da tabela "users"
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela "products"
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50),  -- Adicionado campo "category"
    photo_path VARCHAR(255),  -- Adicionado campo "photo_path"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Inserir registros fictícios na tabela "users"
INSERT INTO users (name, email, password) VALUES
    ('Eva', 'eva@example.com', 'hashed_password_4'),
    ('David', 'david@example.com', 'hashed_password_5'),
    ('Fiona', 'fiona@example.com', 'hashed_password_6'),
    ('Alice', 'alice@example.com', 'hashed_password_1'),
    ('Bob', 'bob@example.com', 'hashed_password_2'),
    ('Charlie', 'charlie@example.com', 'hashed_password_3');

-- Inserir registros fictícios na tabela "products"
INSERT INTO products (name, description, price, category, photo_path, user_id) VALUES
    ('Product 1', 'Description for Product 1', 19.99, 'Category 1', '/photos/product1.jpg', 1),
    ('Product 2', 'Description for Product 2', 29.99, 'Category 2', '/photos/product2.jpg', 2),
    ('Product 3', 'Description for Product 3', 39.99, 'Category 1', '/photos/product3.jpg', 3),
    ('Product 4', 'Description for Product 4', 49.99, 'Category 3', '/photos/product4.jpg', 1),
    ('Product 5', 'Description for Product 5', 59.99, 'Category 2', '/photos/product5.jpg', 2),
    ('Product 6', 'Description for Product 6', 69.99, 'Category 1', '/photos/product6.jpg', 3),
    ('Product 7', 'Description for Product 7', 79.99, 'Category 3', '/photos/product7.jpg', 1),
    ('Product 8', 'Description for Product 8', 89.99, 'Category 2', '/photos/product8.jpg', 2);
