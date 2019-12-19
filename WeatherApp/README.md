# **PROYECTO TRIANAWEATHER**
 
Este proyecto creado por el grupo GonzaloAndCompany se basa en la creación de varias estaciones meteorológicas en el barrio de Triana.

Antes de probarlo se debe tener claro que existen tres modelos:
- Station: Estación meteorológica
- User: usuario
- Weather: datos que queremos conocer de las estaciones meteorológicas (lluvia, precipitaciones, humedad, etc).
 

## **Inserción de datos**
---------------------------
Antes de nada lo primero es cargar algunos datos de prueba. Para debe descomentar **require('./data');**. Una vez  ejecute el proyecto por primera vez vuelva a comentarlo para evitar datos duplicados.

Para poner el proyecto en ejecución puede ejecutar el comando **npm start** aunque se recomienda el uso de **npm run watch**.



## **Endpoints**
---------------------------

### **1. Gestión de usuarios**

### 1.1 Sign up (POST)
Si un usuario quiere registrarse debe acceder a la ruta http://localhost:3000/api/register.

Para poder ganartizar su correcto uso adjunto vienen unos datos de prueba: 

    {
        "fullname" : "Super usuario",
        "username" : "super@gmail.com",
        "password" : "12345",
        "email" : "super@gmail.com",
        "rol" : "ADMIN",
    }

### 1.2 Sign in (POST)
Si un usuario quiere registrarse debe acceder a la ruta http://localhost:3000/api/login.

Para poder logearse con el usuario creado en el apartado anterior es necesario introducir lo datos username y password.

    {
        "username" : "super@gmail.com",
        "password" : "12345",
    }

Esta petición devolverá el username y un token con el que se podrán hacer diversas peticiones en función del rol del usuario.

### 1.3 Listar usuarios (GET)
Si un administrador desea listar todos los uaurios debe acceder a la ruta http://localhost:3000/api/users.



## 2. Gestión de estaciones meteorológicas

Para poder 

