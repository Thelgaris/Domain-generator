Hola 4Geeks teacher!!

He creado este super cool generador de dominios y espero que te guste!!

Para dar todas las combinaciones posibles de los objets que hay en cada array (lista de objetos) se ha creado un loop del tipo "for" que recorre todos los items del primer array "pronoun", empezando desde la posición "0". Dentro de ese primer loop se ha creado otro loop del mismo tipo "for" que selecciona y recorre el segundo array "adj". De esta manera, ahora mismo lo que tenemos es que el primer loop selecciona el primer item del primer array "pronoun" y pasa al segundo loop seleccionando primero el primer item del segundo array y luego el segundo. Una vez hecho esto, volvería al primer loop y escogería el segundo item del primer array para volver a recorrer el segundo array y así darte todas las combinaciones posibles entre el primero y el segundo array. Sin embargo en el ejercicio se nos pide esto pero con tres arrays diferentes más una variable "extensions" más que nos da la extensión de la web. Se crea una última variable que nos da la suma de las cuatro para así poder imprimir todas las combinaciones.


# Hello World with Vanilla JS

Start coding in 30 seconds by opening this template in gitpod:
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/vanillajs-hello.git)

### Manual Installation

1) Remember to install the npm packages first:
```
$ npm install
```

2) Build and Start coding!

Build the application for the first time...

```
$ npm run start
```

And start coding your Vanilla.js application, update the `src/index.html`, `src/index.css` or `src/app.js` depending on your needs.

## FAQ

#### 1) How do I run my code?

- Type on the command line `$ npm run start` and type localhost on the browser.

#### 2) Where do I write my code?
It depends on the language, but you have `./src/js/app.js`, `./src/style/index.css` and `./isrc/index.html` respectively, you can add new `.html` as you please, just make sure to include import it on the index.js.

__Note:__ remember that the JS workflow starts inside `window.onload`.

#### 3) I don't see my changes.

Everytime you change any file inside the `./src` folder the website public URL will automatically refresh the changes (it's a process called hot deploy)
Remember also to refresh cleaning the cache (command+shift+r on mac, control+shift+r on pc & linux)

#### 4) How do I include more images on my project?
Add them inside the `./src/assets/img` folder and import them from any of your JS files. E.g: `import "../assets/img/rigo-baby.jpg";`

#### 5) How do I include more JS files?
Just add the files into the JS folder and import the file/variables into your index.js. E.g: `import myVar from "./file2.js"`

#### 6) How do I publish the website?

This boilerplate is 100% compatible with the free github pages hosting. Publish your website by running:
```sh
$ npm run deploy
```

Very easy and in just one step!  Push to your __master__ branch and use the free hosting that comes with [GitHub pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages), the project is ready to be published. Remember to choose to run the Github Page from your master branch.
