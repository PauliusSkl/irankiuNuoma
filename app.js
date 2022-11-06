
import express  from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';

//const express = require("express");
//const bodyParser = require("body-parser");
//const ejs = require("ejs");
import { confirmFunction } from './index.js';
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.route('/')
  .get((req, res) => {
    res.render("Pagrindinis");
  })

app.route('/login')
  .get((req, res) => {
    res.render("login");
  })

  app.route('/register')
  .get((req, res) => {
    res.render("register");
  })

  app.route('/items')
  .get((req, res) => {
    res.render("items");
  })

  app.route('/review')
  .get((req, res) => {
    res.render("review");
  })

  app.route('/history')
  .get((req, res) => {
    res.render("history");
  })

  
  app.route('/profile')
  .get((req, res) => {
    res.render("profile");
  })


  app.route('/edit')
  .get((req, res) => {
    res.render("edit");
  })
  .post((req, res) => {
    res.render("profile");
  })

  app.route('/itemInfo')
  .get((req, res) => {
    res.render("itemInfo");
    confirmFunction();
  })

  app.route('/updateItem')
  .get((req, res) => {
    res.render("updateItem");
  })

  app.route('/order')
  .get((req, res) => {
    res.render("order");
  })
  app.route('/createItem')
  .get((req, res) => {
    res.render("createItem");
  })

  app.route('/rev')
  .get((req, res) => {
    res.render("rev");
  })

  app.route('/editRev')
  .get((req, res) => {
    res.render("editRev");
  })

  app.route('/editHistory')
  .get((req, res) => {
    res.render("editHistory");
  })
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
