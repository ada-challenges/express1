## Passo a passo:

1. Criei um repositório no github com gitignore para node
2. Clonei o repositório para minha maquina com:
```` 
git clone https://github.com/ada-challenges/express1.git
```` 

3. Instalei as dependencias com:
```` 
npm install express yarn
npm install nodemon --save-dev
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
  "scripts": {
    "build": "yarn",
    "start": "node src/server.js",
    "dev": "nodemon src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
````

6. Subi as modificações para o github:
````
git add .
git commit -m "Boilerplate inicial"
git push
````

7. Fiz o deploy no render:

Webapp
> Runtime: node  
> Build Command: yarn  
> Start Command: node /src/server.js