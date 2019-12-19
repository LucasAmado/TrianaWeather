// ESTE ARCHIVO CONTIENE DATOS MOCK

//ES NECESARIO EJECUTARLO UNA SOLA VEZ.
/*

//DATOS USER
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const mongoose = require('mongoose');

const hash= bcrypt.hashSync('1',parseInt(process.env.BCRYPT_ROUNDS));

const usuario=new User({
    fullname: "Luismi López",
    username: "luismi.lopez@salesianos.edu",
    password: hash,
    email: "luismi.lopez@salesianos.edu",
    registered_station: [],
    keep_station: [],
    rol: "ADMIN"
});

const usuario2=new User({
    fullname: "Miguel Campos",
    username: "miguel.campos@salesianos.edu",
    password: hash,
    email: "miguel.campos@salesianos.edu",
    registered_station: [],
    keep_station: [],
    rol: "USER"
});

usuario.save();
usuario2.save();

//DATOS STATION
const Station = require('./models/station');

const station1 = new Station({
    latitud: '3.55862',
    longuitud: '3.55862',
    nombre : 'prueba 1',
    registro: usuario._id,
    mantenimiento: usuario2._id
});

const station2 = new Station({
    latitud: '3.59896',
    longuitud: '3.56752',
    nombre : 'prueba 2',
    registro: usuario._id,
    mantenimiento: usuario2._id
});

station1.save();
station2.save();

//DATOS WEATHER
const Weather = require('./models/weather');

const weather1 = new Weather({
    station: station2,
    lluvia: 50,
    velocidad: 35,
    direccion_viento: 30,
    temp_ambiente: 2,
    temp_suelo: -2,
    calidad_aire: 70,
    presion: 30,
    fecha: new Date(Date.now())
});

const weather2 = new Weather({
    station: station1,
    lluvia: 50,
    velocidad: 35,
    direccion_viento: 30,
    temp_ambiente: 2,
    temp_suelo: -2,
    calidad_aire: 70,
    presion: 30,
    fecha: new Date(2019,12,12)
});

weather1.save();
weather2.save();

*/