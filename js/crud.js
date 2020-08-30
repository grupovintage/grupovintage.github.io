const db = firebase.firestore();

const taskForm = document.getElementById("form");
/*
const tasksContainer = document.getElementById("tasks-container");
*/

let id = '';

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
const saveTask = (nombre, correo, asunto, mensaje, fecha) =>
    db.collection("mensajes").doc().set({
        nombre,
        correo,
        asunto,
        mensaje,
        fecha
    });

const getTasks = () => db.collection("mensajes").get();

const onGetTasks = (callback) => db.collection("mensajes").onSnapshot(callback);

const getTask = (id) => db.collection("mensajes").doc(id).get();

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = taskForm["nombre"];
    const correo = taskForm["correo"];
    const asunto = taskForm["asunto"];
    const mensaje = taskForm["mensaje"];

    var today = new Date();
    const fecha = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    try {
        await saveTask(nombre.value, correo.value, asunto.value, mensaje.value, fecha);

        taskForm.reset();
        nombre.focus();
    } catch (error) {
        console.log(error);
    }
});
