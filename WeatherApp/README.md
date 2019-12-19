# **Proyecto TrianaWeather**
 
Este proyecto creado por el grupo GonzaloAndCompany se basa en la creación de varias estaciones meteorológicas en el barrio de Triana.

Antes de probarlo se debe tener claro que existen tres modelos:
- Station: Estación meteorológica
- User: usuario
- Weather: datos que queremos conocer de las estaciones meteorológicas (lluvia, precipitaciones, humedad, etc).
 

## **Inserción de datos**
Antes de nada lo primero es cargar algunos datos de prueba. Para debe descomentar **require('./data');**. Una vez  ejecute el proyecto por primera vez vuelva a comentarlo para evitar datos duplicados.

Para poner el proyecto en ejecución puede ejecutar el comando **npm start** aunque se recomienda el uso de **npm run watch**.

## **Endpoints**

## 1.GESTIÓN DE USUARIOS

### 1.1 Sign Up (POST)
Para poder registrarse hay que acceder a la ruta http://localhost:3000/api/register.

Datos de prueba: 
{
    "fullname" : "Super usuario",
    "username" : "super@gmail.com",
    "password" : "12345",
    "email" : "super@gmail.com",
    "rol" : "ADMIN",
}


## 2. GESTIÓN DE ESTACIONES METEOROLÓGICAS

Para poder 

