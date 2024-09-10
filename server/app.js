// require('@babel/register');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);
// require('dotenv').config();

// // const ssr = require('./middleware/ssr');
// // const getUser = require('./middleware/getUser');

// const app = express();
// const indexRouter = require('./routes/index.routes');

// const sessionConfig = {
//   store: new FileStore(),
//   name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
//   secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
//   resave: false, // Пересохранять ли куку при каждом запросе
//   saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
//     httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
//   },
// };

// app.use(cookieParser());
// app.use(session(sessionConfig));
// app.use(express.static(path.join(__dirname, '/public')));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(ssr);
// app.use(getUser);
// app.use('/', indexRouter);

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Порт ${PORT} работает исправно`);
// });


// require('@babel/register');
require("dotenv").config();
const express = require("express");
const serverConfig = require("./config/serverConfig");
const serverConfigServer = require("./config/serverConfigServer");
const indexRoutes = require("./routes/index.routes");
require('dotenv').config();

const app = express();
serverConfigServer(app);
app.use(express.static(path.join(__dirname,'../client/dist')));
// serverConfig(app);
app.use("/", indexRoutes);
const PORT = process.env.PORT || 4000;

app.get('*',(req,res)=> {
  res.sendFile(path.resolve('../client/dist/index.html'));
})
app.listen(PORT, () => {
  console.log(`App has been started in port ${PORT}...`);
});

// require('@babel/register');
// require('dotenv').config();

// const express = require('express');
// const serverConfig = require('./config/serverConfig');

// const app = express();

// const indexRouter = require('./routes/index.routes');

// serverConfig(app);

// app.use('/', indexRouter);

// const PORT = 3000
// app.listen(PORT, () => {
//   console.log(`Наша шарманка играет на ${PORT} порту`)
// })


