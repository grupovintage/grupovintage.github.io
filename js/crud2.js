const db = firebase.firestore();

const tasksContainer = document.getElementById("tasks-container");

let id = '';


const getTasks = () => db.collection("mensajes").get();

const onGetTasks = (callback) => db.collection("mensajes").onSnapshot(callback);

const getTask = (id) => db.collection("mensajes").doc(id).get();

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      tasksContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.asunto}</h3>
    <p>${task.fecha}</p>
    <p>${task.correo}</p>
    <p>${task.nombre}</p>
    <p>${task.mensaje}</p>
  </div>`;
    });
  });
});
