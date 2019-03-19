# Descripción Taller Vue.js

VUEnas a todos!

En este taller de iniciación a Vue.js veremos cómo construir en pocos pasos una interfaz web sencilla. Hablaremos también sobre la importancia de crear componentes customizables y reutilizables como paradigma a la hora de crear nuestra web.

Empezaremos super rápido gracias a Vue-CLI y veremos importantes aspectos de Vue, como las directivas, cómo se hace el rendering, variables computadas, routing, gestión de estado...

Pero lo importante es que vosotros os ensuciéis las manos creando un par de vistas, haciendo componentes, pasando datos, y que completéis al máximo un mini proyecto que os pueda servir en un futuro, ya sea para haceros VUEjstro propio portfolio o para cuando os tengáis que enfrentar a Vue en un trabajo.


click en >>>>

Partimos de: https://codesandbox.io/embed/2x73mm087n

>>>>>>>

## Step 0.0
En este paso podrás encontrar la aplicación sin VUE, observarás que hay tres archivos básicos: 

	1. index.html
	2. index.js
	3. styles.css
	
Ahora podrás comprobar lo fácil que es integrar VUE en esta aplicación, haz click en el siguiente enlace que te llevará al codesanbox:

Para añadir VUE, tenemos que importar la librería de vue en nuestro html, y además decirle a Vue dónde queremos que se instancie:

``` javascript
  <script src="https://unpkg.com/vue"></script>
```

index.js:

``` javascript
new Vue({
  el: '#app'
})
```

Con esto último, estamos instanciando Vue en el *el* (elemento) con id="app". Y ya estaría. Vamos a ver cómo pasar datos desde nuestra instancia de Vue para que se muestren en el html.



## Step 0.1

https://codesandbox.io/s/25j4kwrwr

Cuando instanciamos Vue, podemos indicarle así como indicamos el *el*emento donde se encuentra, los datos que tiene, en el elemento *data*.

``` javascript
new Vue({
  el: '#app',
  data: {
    logo: 'Mis Proyectos'
  }
})
```

Ahora en la variable "logo" tendremos esa cadena de texto que podemos referenciar desde el html, con la sintaxis del moustache {{ }}.

``` html
<h1>{{ logo }}</h1>
```

Para hacer lo mismo con el proyecto que vemos, vamos a crear además un array *projects*, donde cada uno tiene un *title* y un *description*. Y duplicaremos el código que renderiza un proyecto, para que ahora muestre *{{projects[0].title}}* y así.

## Step 0.2

Ok, ya tenemos visible nuestros dos proyectos. Ahora queremos meter un buscador para poder buscar por el título del proyecto, y que:
1. En el caso de que hay proyectos que contienen la cadena de texto que buscamos, mostrarlos.
2. Mostrar "No hay proyectos" si no encuentra ninguno.

Para esto haremos uso de dos conceptos, el de **variable computada** y el de **directiva**. En concreto, utilizaremos la directiva *v-if* que nos permite mostrar un trozo de html sólo si se cumple la condición. En cuanto a las variables computadas, no son más que funciones que se ejecutan y devuelven un valor, haciendo más fácil el renderizado de expresiones. Así, podemos meter en una función un filter según el input (vamos a llamarle *inputText* del usuario, y devolver el array de proyectos cuyo título coincide.

¿Y cómo hacemos que Vue sepa qué está metiendo el usuario en el campo de búsqueda? Pues con otra directiva, *v-model*. Esta hará un doble binding con lo que el usuario entra y la variable que le indiquemos.

``` html
<input class="search" type="text" v-model="inputText" placeholder="search...">
```

No se nos debe olvidar meter *inputText* en el campo *data*, para que Vue pueda reaccionar a cambios. Sin esto, Vue no sabe qué campos mirar para volver a renderizar el html.

``` javascript
computed: {
  filteredProjects: function() {
    return this.projects.filter(
      p => p.title.toLowerCase().indexOf(this.inputText.toLowerCase()) > -1
    );
  }
}
```

Para indicar si hay proyectos o no, podemos ahora bindear nuestro html con *filteredProjects* en lugar de *projects*. Para saber si mostramos los proyectos o un "No hay proyectos" si la búsqueda no encuentra ninguno, podemos comprobar la longitud de ese array, y lo meteremos como otra computada que referenciaremos desde el html.

``` javascript
showProjects: function() {
  return this.filteredProjects.length !== 0;
}
```

``` html
<div v-if="showProjects">
      <section class="project">
...
```

## Step 1

Vemos que esto va creciendo considerablemente a medida que vamos metiendo variables y métodos para renderizar. En el mundo real, este caso puede servir para algo muy pequeño, pero lo que nos podemos encontrar es una aplicación completa que queremos desarrollar en Vue. Para ello vamos a hacer uso de un *cli* que iniciará una aplicación por nosotros, y podremos hacer muchas más cosas en ella.

Lo primero, tener **npm** instalado.
Después, instalar **vue-cli**. `npm install -g @vue/cli`.

Si quieres también puedes trabajar sobre nuestro repo de GitHub donde ya hemos hecho algunas cosas por ti :).
https://github.com/karoldesign/VUE-nas-formacion/tree/step-2

Ahora vamos a trasladar todo lo que llevamos hecho a nuestra nueva y flamante aplicación.

## Step 2

En nuestro código html que renderiza proyectos, vemos que estamos duplicando código para cada proyecto. ¿Podemos reutilizarlo para no tenerlo duplicado? Sí. Vamos a hacer uso de la directiva **v-for** para el renderizado de listas, y además, vamos a sacar ese contenido a un componente a parte, que podemos referenciar por su nombre e incluirlo en nuestra instancia de vue.

Ahora, nuestra instancia además de tener un *data* y un *computed*, tendrá un *components* donde incluiremos nuestro componente (y además lo tendremos que importar).

``` javascript
import project from "@/components/project";

...

data: ...,
components: {
  project: project
}
```

¿Qué va a tener nuestro proyecto? Pues tendrá el mismo código que teníamos antes, lo único que ahora las variables que teníamos con {{ }} ahora serán **props** que recibe desde el componente padre, es decir, el que lo instancia.

``` html
<section class="project">
  <div class="image"></div>
  <div class="textContent">
    <div class="header-box">
      <h4 class="title">{{ title }}</h4>
      <div class="btns">
        <span> <i class="fas fa-times"></i></span>
        <span> <i class="fas fa-pencil-alt"></i></span>
      </div>
    </div>
    <p class="text">{{ text }}</p>
  </div>
</section>
```

¿Y de dónde salen *title* y *text*? Pues cuando definimos el componente, indicamos que recibe un array de *props* con esos nombres. Además, vamos a pasarle un identificador: 
```javascript
export default {
  name: 'project',
  props: ['title', 'text', 'id'],
  mounted () {
  },
  data () {
    return {}
  },
  methods: {
  },
  computed: {
  }
}
```

Y desde el padre ya podremos llamarlo, y pasarle props, con otra directiva, **v-bind**.
```html
<project
  v-for="(project, index) of filteredProjects"
  v-bind:key="index"
  v-bind:title="project.title"
  v-bind:text="project.text"
  v-bind:id="project.id"
/>
```

También podemos hacer uso de la sintaxis que propone Vue para evitarnos escribir todo el rato *v-bind*:
```html
<project
  v-for="(project, index) of filteredProjects"
  :key="index"
  :title="project.title"
  :text="project.text"
  :id="project.id"
/>
```


## Step 3

``` javascript
  

```

## Step 4

``` javascript
  

```

## Step 4

``` javascript
  

```

## Step 5

``` javascript
  

```

## Step 6

``` javascript
  

```

## Step master

``` javascript
  

```


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

# install SASS
npm install --save-dev- node-sass sass-loader
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
