const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";

async function connectToMongo(collectionName) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connecté à MongoDB");
    const db = client.db("taskManager"); // Nom de la base de données
    const collection = db.collection(collectionName); // Nom de la collection
    return { client, collection }; // Retourne à la fois le client et la collection
  } catch (error) {
    console.error('Erreur de connexion à MongoDB:', error);
    throw error;
  }
}

async function findAllTasks(collection) {
  try {
    return await collection.find({}).toArray();
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches:', error);
    throw error;
  }
}

async function getTasks() {
  const { client, collection } = await connectToMongo("task"); // Assurez-vous que "task" est le bon nom de la collection
  try {
    return await findAllTasks(collection);
  } finally {
    // Assurez-vous de fermer la connexion à MongoDB
    await client.close();
  }
}

module.exports = {
  getTasks
};
