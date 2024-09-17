const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";

function getClient(){
  const client = new MongoClient(uri);
  return client;
}

function getCollection(client){
  const db = client.db("taskManager"); 
  const collection = db.collection("task");
  return { client, collection };
}

async function addTask(task) {
  const { collection } = getCollection(getClient())
  try {
    return await collection.insertMany([task]);
  } catch (error) {
    console.error('Erreur lors de l ajout de la tâche:', error);
    throw error;
  }
}

async function getTasks() {
  const { collection } = getCollection(getClient())
  try {
    return await collection.find({}).toArray();
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error);
    throw error;
  }
}

async function removeTask(id) {
  console.log("id de la task : " + id)
  const { collection } = getCollection(getClient())
  try {
    console.log("je suis dans le deleteOne", collection)
    return await collection.deleteOne({ _id: Number(id) });
  } catch (error) {
    console.error('Erreur lors de la suppression de la tâche:', error);
    throw error;
  }
}

module.exports = {
  getTasks,
  addTask,
  removeTask
};
