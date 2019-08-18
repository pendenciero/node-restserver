// ================
// Puerto
//=================
process.env.PORT = process.env.PORT || 3000;

// ================
// Entorno
//=================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ================
// Base de datos
//=================

// ======================
// Vencimiento del token
//=======================
process.env.CADUCIDAD_TOKEN = '240h';

// ======================
// seed autenticacion
//=======================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ======================
// Google Client ID
//=======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '832748477955-06mu4i453e9f8ekni9530b9lcacm530o.apps.googleusercontent.com';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;