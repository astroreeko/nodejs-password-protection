const express = require('express');
const app = express()
const dir = __dirname + "/views/"
require('dotenv').config();

app.get("/", (req, res) => {
res.sendFile(dir + "index.html")
})

app.get("/p", (req, res) => {
if(req.query.password === process.env.PASSWORD) {
res.sendFile(dir + "yes.html")
} else {
  res.sendFile(dir + "no.html")
}
})

console.log("starting server: ", process.env.PASSWORD )
app.listen(2000)