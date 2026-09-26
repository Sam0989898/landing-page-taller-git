# Landing Page — Taller Colaborativo Git

Proyecto de la universidad: simular un flujo de trabajo colaborativo con ramas independientes.

## Roles

- **Estudiante 1** (`rama-html`): estructura del sitio en `index.html`. Solo HTML, sin estilos.
- **Estudiante 2** (`rama-css`): estilos en `style.css`. No toca archivos HTML.
- **Estudiante 3** (`rama-js`): comportamiento dinámico en `app.js`. Solo JavaScript.
- **Estudiante 4** (`main`): administra el repo, crea las ramas, hace merge de las tres y conecta los archivos con `<link>` y `<script>` en `index.html`. Publica con GitHub Pages.

## Flujo

1. Cada estudiante clona el repo y se cambia a su rama asignada.
2. Crea únicamente su archivo (`index.html`, `style.css` o `app.js`) y sube su cambio con push a su propia rama.
3. El Estudiante 4 hace pull de las tres ramas, las mezcla en `main`, conecta los archivos y publica la página con GitHub Pages.
