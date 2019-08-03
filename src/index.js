const express = require("express")
const path = require('path')

const app = express()

app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "public")))
app.set("views", process.cwd() + "/src/views")

app.get('/', function root(req, res) {
  res.render('index')
} )

app.listen(3000, function serve() {
  console.log('☄ listening on port 3000')
})