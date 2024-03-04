npm create vite
Vanilla - javascript
cd mi-proyecto
npm install @vitejs/plugin-react -E
npm install react react-dom -E

crear vite.config.js
import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()]
})

Crear el punto de entrada de la aplicación


En caso de que te surja este error:
 [ERROR] The JSX syntax extension is not currently enabled

no te preocupes. 
lo que debes hacer es cambiar la extension del main.js a main.jsx
no te olvides de cambiar tambien tu referencia al punto de entrada de la applicacion en el archivo html.



npm install standard -D
en el package.json se agrega:

"eslintConfig":{
	"extends":"./node_modules/standard/eslintrc.json"
	}

 