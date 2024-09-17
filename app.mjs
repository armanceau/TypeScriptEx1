
import express  from 'express'
import { updateTask} from './model.js'
import { getTasks, addTask, removeTask } from './db_utils.js'; // Import des fonctions depuis db_utils.js

const app = express()
const port = 3000

app.use(express.json()) //permet de récupérer données client json

var tasks = [
  
]

var countTask = 0;

app.get('/', (req, res) => {
  return res.send("👋")
})

app.get('/get-task', (req, res) => {
  return res.json(tasks)
})

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await getTasks(); // Obtenez les tâches
    return res.json(tasks);         // Retournez les tâches en JSON
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error);
    res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des tâches.' });
  }
});

app.post('/new-task', async (req, res) => {
  const { nom, description, _id } = req.body;

  if (nom != null && _id != null) {
    try {
      await addTask({ nom, _id });
      res.json({ "message": "Tâche ajoutée" });
    } catch (error) {
      res.status(500).json({ "error": "Erreur lors de l'ajout de la tâche" });
    }
  } else {
    res.status(400).json({ "error": "Les données de la tâche sont manquantes" });
  }
});

app.delete('/delete-task/:id', async (req, res) => {
  try {
    await removeTask( req.params.id);
    res.json({ "message": "Tâche supprimée" });
  } catch (error) {
    res.status(500).json({ "error": "Erreur lors de la suppression de la tâche" });
  }
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
 