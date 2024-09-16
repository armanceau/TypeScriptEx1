
const express = require('express')
const app = express()
const port = 3000

app.arguments(express.json()) //permet de récupérer les données du client

var tasks = [
  {
    nom: "dormir",
    createur: "noemie",
    description: "je dors"
  }
]
app.get('/task', (req, res) => {
  return res.json(tasks)
})

app.post('new-task', (req, res) => {
  let nom = req.body.nom
  let createur = req.body.createur
  let description = req.body.description
  addTask(tasks, nom, createur, description)
  res.json({"message": ok})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})