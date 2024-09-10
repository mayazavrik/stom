const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const indexRoutes = require("../routes/index.routes");

// const session = require("express-session");
const FileStore = require("session-file-store")(session);

const sessionConfig = {
  store: new FileStore(),
  name: "user_sid", // ИМЯ КУКИ ДЛЯ ХРАНЕНИЯ ID сессии
  secret: process.env.SECRET ?? "test",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

const serverConfig = (app) => {
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = serverConfig;

