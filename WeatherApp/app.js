'use strict'

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const passport = require("passport");
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const user_routes = require('./routes/users');
const station_routes = require('./routes/stations');
const weather_routes = require('./routes/weathers');
const middleware = require('./middleware/index'); 
const User = require('./models/user');
require('./data');
require('dotenv').config();

const mongoose = require('mongoose');

/*
   CONECTAR CON MONGO
*/

//NO BORRAR LA SIGUIENTE LÍNEA, ES LA CONEXIÓN PARA ESPE
//mongoose.connect(process.env.MONGODB_DOCKERTOOLBOX_ESPE, {useNewUrlParser: true});
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log('Conectado!');
});

passport.use(new LocalStrategy((username, password, done) => {
    let busqueda = (username.includes('@')) ? { email: username } : { username: username };
    //let data = UserService.findUser(busqueda);
    User.findOne(busqueda, (err, user) => {
        if (err) return done(null, false);
        if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false);
        }
        return done(null, user);
    });


}));

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    //let data = UserService.findById(jwt_payload.sub);
    User.findById(jwt_payload.sub, (err, user) => {
        if (err) return done(null, false);
        else return done(null, user);
    });
}));

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(passport.initialize())

app.use('/api/', user_routes);
app.use('/api/stations/', station_routes);
app.use('/api/weather/', weather_routes);
app.use(middleware.errorHandler);
app.use(middleware.notFoundHandler);

module.exports = app

// ESTE ARCHIVO CONTIENE DATOS MOCK

//ES NECESARIO EJECUTARLO UNA SOLA VEZ.


//DATOS USER

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
});

weather1.save();
weather2.save();
