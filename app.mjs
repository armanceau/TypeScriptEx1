
import express  from 'express'
import {addTask, updateTask, removeTask} from './model.js'

const app = express()
const port = 3000

app.use(express.json())//permet de récupérer
//données client json

var tasks = [
  
]

var countTask = 0;

app.get('/', (req, res) => {
  return res.send("👋")
})

app.get('/get-task', (req, res) => {
  return res.json(tasks)
})

app.post('/new-task', (req, res) => {addTask
  let name = req.body.name
  let description = req.body.description

  tasks = addTask(tasks, name, description, countTask++)
  res.json({"message" : "ok"})
})

app.delete('/delete-task/:id', (req, res) => {
  tasks = removeTask(tasks, req.params.id)
  res.json({"message" : "élément supprimé"})
})

app.put('/update-task/:id', (req, res) => {
  let name = req.body.name
  let description = req.body.description
  
  console.log(tasks)
  console.log(name)
  console.log(description)
  console.log(req.params.id)
  tasks = updateTask(tasks, name, description, req.params.id)
  res.json({"message" : "élément modifié"})
})



// PAS DE GOODBYE : donc 404 ! \O/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 