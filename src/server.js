const express = require("express");
const app = require("express")()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const users = require("../routes/usuarios")
app.use('/usuarios', users)

const PORT = 3000
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log(`Server running at http://localhost:${PORT}/`) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 