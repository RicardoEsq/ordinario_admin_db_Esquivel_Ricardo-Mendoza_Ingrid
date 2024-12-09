# ordinario_admin_db_Esquivel_Ricardo-Mendoza_Ingrid
Ordinario de Base de datos 5 semestre 
Nueva línea de prueba

# Proyecto Ordinario - Administración de Bases de Datos


## Descripción

Este proyecto consiste en una aplicación Node.js que interactúa con una base de datos MySQL para gestionar estudiantes, maestros, materias y calificaciones.


## Requisitos

- Node.js

- MySQL

- Postman (para pruebas)


## Configuración

1. Clonar este repositorio.

2. Configurar las credenciales de MySQL en el archivo `index.js`.

3. Ejecutar los comandos para instalar dependencias:

## npm install

4. Iniciar el servidor con:

## node index.js



## Endpoints

- **GET** `/` - Verifica que el servidor está funcionando.

- **GET** `/estudiantes` - Obtiene todos los estudiantes.

- **GET** `/maestros` - Obtiene todos los maestros.

- **GET** `/materias` - Obtiene todas las materias.

- **GET** `/calificaciones` - Obtiene todas las calificaciones.


## Estructura de la base de datos

- **estudiantes**

- **maestros**

- **materias**

- **calificaciones**


## Pruebas

Prueba los endpoints utilizando Postman con las siguientes URLs:

- `http://<IP_PUBLICA>:3000/estudiantes`

- `http://<IP_PUBLICA>:3000/maestros`

- `http://<IP_PUBLICA>:3000/materias`

- `http://<IP_PUBLICA>:3000/calificaciones`

