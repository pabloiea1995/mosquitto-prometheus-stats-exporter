const express = require('express');
const router = express.Router();
const promtest = require("../promClient");

router.get('/test', (req, res) => {

    console.log("Recibida petición test, aumentando contador")

    promtest.testCounter.inc({ url: "/test" })
    res.json(promtest.testCounter)
  });

  router.get('/foo', (req, res) => {

    console.log("Recibida petición test, aumentando contador")

    promtest.testCounter.inc({ url: "/foo" })
    res.json(promtest.testCounter)
  });
  module.exports = router