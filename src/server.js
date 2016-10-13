import express from 'express'
let app = express()
import http from 'http'
let server = http.createServer(app)
import path from 'path'

app.use(express.static(path.join(__dirname, "public")))

app.get('*', (req, res)=>{
  res.redirect('/')
})

server.listen(9000 | process.env.PORT, ()=>{
  console.log("Lisenting on port", server.address().port)
})
