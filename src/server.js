const cookieParser = require('cookie-parser');
const express = require("express");
const app = require("express")();

// routes
const usersRoutes = require("../routes/users");
const productsRoutes = require("../routes/products");
const authRoutes = require("../routes/auth");

// middlewares
const { authenticate } = require("../middlewares/auth");
const logRequests = require('../middlewares/logs');

// variáveis de ambiente
require('dotenv').config();

// express configs
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes no authenticate
// -> /auth/register
// -> /auth/login
// -> /products [getAll]
// -> /products [downloadImage]

app.use(logRequests); // Request Logs Middleware

app.use('/auth', authRoutes);

app.use('/users', authenticate, usersRoutes);
app.use('/products', authenticate, productsRoutes);

app.listen(process.env.PORT_SERVER ?? 3000, (error) => {
  !error
    ? console.log(`Server rodando na porta http://localhost:${process.env.PORT_SERVER ?? 3000}/`)
    : console.log("Erro ao iniciar o servidor: ", error);
});
