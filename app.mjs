
import express  from 'express'
import {addTask} from './model.js'
import {removeTask} from './model.js'


const app = express()
const port = 3000

app.use(express.json())//permet de récupérer
//données client json

var tasks = [
  
]

var countTask = 0;

app.get('/get-task', (req, res) => {
  return res.json(tasks)
})

app.post('/new-task', (req, res) => {addTask
  let name = req.body.name
  let description = req.body.description

  tasks = addTask(tasks, name, description, countTask++)
  res.json({"message" : "ok"})
})

app.delete('/delete-task/:id', (req, res) => {addTask
  tasks = removeTask(tasks, countTask)
  res.json({"message" : "élément supprimé"})
})




// PAS DE GOODBYE : donc 404 ! \O/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 