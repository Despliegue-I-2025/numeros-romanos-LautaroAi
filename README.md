# Materia: Diseños y Arquitecturas de Despliegue I
### Profesor: Di Guardia Christian
### Alumno: Rivieri Lautaro

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/gJA-GD-V)

# Conversor de Números Romanos ↔ Arábigos - TP3

Este proyecto es un servicio web desarrollado con Node.js y Express que permite realizar conversiones bidireccionales entre números romanos y arábigos. El servicio está hosteado en Vercel y expone endpoints REST para las conversiones.

## 📋 Características

- Conversión de números romanos a arábigos y viceversa
- Validación completa de entradas
- Soporte para números en mayúsculas y minúsculas
- Tests unitarios con Jest
- Despliegue automático en Vercel
- CORS habilitado

## 📌 Endpoints Disponibles
### Romanos a Arábigos
**GET**  `/r2a?roman=<número_romano>`

**Parámetros:**
- `roman`: Número romano a convertir, string (ej: "XIV", "mmxviii")

**Ejemplo GET:** `https://numeros-romanos-lautaro-ai.vercel.app/r2a?roman=XIV`

**Respuesta:**
```
{
  "arabic": 14
}
```

### Arábigos a Romanos
**GET** 
`/a2r?arabic=<numero_arabigo>`

**Parámetros:**
- `arabic`: Número arábigo a convertir

**Ejemplo GET:** `https://numeros-romanos-lautaro-ai.vercel.app/a2r?arabic=14`

**Respuesta:**
```
{
  "roman": "XIV"
}
```

## ⚙ Validaciones
### Para números romanos:
- Solo caracteres válidos (I, V, X, L, C, D, M)
- Sintaxis correcta según reglas romanas
- Rango: 1-3999
- Case insensitive

### Para números arábigos:
- Números enteros positivos
- Rango: 1-3999
- No se aceptan decimales o caracteres no numéricos

### Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **Jest** - Framework de testing
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **Vercel** - Plataforma de despliegue

## 🔧 Instalación y Desarrollo Local
### Requisitos previos
- Node.js 18 o superior.
- Cuenta en Vercel con un proyecto (puede ser creado desde el dashboard o con el comando vercel link).
- Acceso de administrador al repositorio en GitHub para crear *secrets*.

### Instalacion local
1. Clonar el repositorio y situarse en la raiz.
```
git clone https://github.com/Despliegue-I-2025/numeros-romanos-LautaroAi.git>
cd numeros-romanos-LautaroAi`
```
2. Instalar las dependencias con `npm install`.
3. Ejecutar la bateria de pruebas con `npm test`.
4. Levantar el servidor local con `npm start`
5. Consumir cualquiera de los endpoints GET:
    -  `/r2a?roman=...`
    - `/a2r?arabic=...`

## 💡 Lógica de Conversión
### Romanos a Arábigos
Utiliza un algoritmo que procesa los símbolos romanos de mayor a menor valor, manejando correctamente los casos sustractivos (IV, IX, XL, XC, CD, CM).

### Arábigos a Romanos
Divide el número sucesivamente por los valores base romanos, construyendo el resultado de izquierda a derecha.

### ✅ Tests Unitarios
El proyecto incluye tests exhaustivos que cubren:
- Conversiones básicas de símbolos individuales
- Números compuestos y complejos
- Validación de casos bordes
- Manejo de errores
- Integración completa entre ambas funciones
- Casos con letras minúsculas

### Despliegue continuo en Vercel
Cada *push* a la rama `main` ejecuta el flujo definido en `.github/workflows/deploy-vercel.yml`. Este flujo instala dependencias, corre las pruebas y despliega en Vercel usando la CLI oficial. Para que funcione, sigue estos pasos una sola vez:

 #### 1. Autenticarse y vincular el proyecto en Vercel
``` bash
npm install --global vercel    (este paso instala vecel en tu máquina)
vercel login  (este paso pide que hagas ENTER. Con eso te abre un browser y espera a que lo autorices)
vercel link
```
El comando `vercel link` crea la carpeta `.vercel/` (no la subas al repositorio) con el archivo `project.json` que contiene `orgId` y `projectId`.

#### 2. Crear un token de acceso
Genera un token permanente con `vercel tokens create conversor` o desde el dashboard (Account Settings > Tokens). Guardar en un block de notas, porque solo se muestra una vez.

#### 3. Configurar *GitHub Secrets*
En GitHub entra a **Settings > Secrets and variables > Actions** y agrega los siguientes secretos:
- `VERCEL_TOKEN`: el token generado en el paso anterior.
- `VERCEL_ORG_ID`: valor `orgId` del archivo `.vercel/project.json`.
- `VERCEL_PROJECT_ID`: valor `projectId` del archivo `.vercel/project.json`.

Si tu aplicacion necesita variables de entorno, definalas en Vercel (`vercel env add` o desde el dashboard) o agrega pasos adicionales en el workflow.

#### 4. Disparar el workflow a mano (no debería hacer falta con GitHub Actions)
Con los secretos configurados, haz *push* a `main`. GitHub Actions ejecuta:
1. `npm ci`
2. `npm test`
3. `npx vercel pull --yes --environment=production`
4. `npx vercel build --prod`
5. `npx vercel deploy --prebuilt --prod`

Al finalizar vas a ver la URL de despliegue en la pestana **Actions** del repositorio y en el dashboard de Vercel.