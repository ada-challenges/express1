## Passo a passo:

1. Criei um repositório no github com gitignore para node
2. Clonei o repositório para minha maquina com:
```` 
git clone https://github.com/ada-challenges/express1.git
```` 

3. Instalei as dependencias com:
```` 
npm install express nodemon
npm init -y
````

4. Criei um boilerplate com:
````
dados.json
src\main.js  
routes\produtos.js  
routes\usuarios.js  
````

5. Modifiquei o ponto de entrada na aplicação e adicionei nodemon nos scripts:

````
   "version": "1.0.0",
=> "main": "./src/main.js",
   "scripts": {
=>   "dev": "nodemon ./main.js",
     "test": "echo \"Error: no test specified\" && exit 1"
   },
````

6. Subi as modificações para o github:
````
git add .
git commit -m "Boilerplate inicial"
git push
````