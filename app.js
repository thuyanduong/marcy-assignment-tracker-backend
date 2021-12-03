const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
const port = process.env.NODE_ENV || 5000
app.use(cors())
app.use(express.json())

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);

app.get('/', (req, res) => {
  res.send("ok")
})

app.post('/', async (req, res) => {
  try{
    const response = await fetch(req.body.url)
    const data = await response.json();
    res.send(data)
  } catch(e) {
    console.log(e)
    res.send(e)
  } 
});