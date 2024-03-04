# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

Desafíos:

- Recupera un fact aleatorio de gatos de la primera API
- Recuperar las tres primeras palabras del fact recuperado
- Muestra una imagen de un gato con la primera palabra usando la segunda API.


# Crear e inicializar el proyecto

npm create vite
Vanilla - javascript
cd 01-react-prueba-tecnica
npm install @vitejs/plugin-react -E
npm install react react-dom -E

Crear archivo vite.config.js 

import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
})

# Crear el punto de entrada de la aplicación

En caso de que te surja este error:
[ERROR] The JSX syntax extension is not currently enabled

¡No te preocupes! Debes cambiar la extension del main.js a main.jsx
Y no te olvides de cambiar tambien tu referencia al punto de entrada en el <script> dentro del archivo html.


# Instalar y configurar ESLint
npm install standard -D
en el package.json se agrega:

"eslintConfig":{
	"extends":"./node_modules/standard/eslintrc.json"
}

 