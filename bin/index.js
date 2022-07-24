#! /usr/bin/env node

const fs = require("fs/promises");

let readmeFileContent = `# NAME OF THE PROJECT

## ✉ About

A brief description of the project.

## 🌆 Images

Add your images here.

## ⚠ Requirements

In order to run the project, you will need:

- Node
- A web browser (Chrome, Firefox, Edge, etc...)

## 💻 Technologies Used

### FRONTEND

- HTML
- CSS
- JavaScript

### BACKEND

- Node.js
- Express

### EDITOR

- Visual Studio Code

## ⬇ How to download the project

\`\`\`bash

git clone https://github.com/example.git

cd example

npm install

npm run dev

\`\`\`

## 🔗 How to use the app

If you wish to test the application, click the link below:

[app](https://link-to-your-app.com)`;

fs.writeFile("./README.md", readmeFileContent)
  .then(() => {
    console.log("Ok");
  })
  .catch((err) => {
    console.log(err);
  });
