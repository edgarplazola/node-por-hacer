const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripción de la tarea por hacer"
}

const completado = {
    default: true,
    alias: "c",
    desc: "Marca como completado o pendiente la tarea"
}
// const argv = require("yargs")
//     .command("crear", "Crear un elemento por hacer", {
//         descripcion: {
//             demand: true,
//             alias: "d",
//             desc: "Descripción de la tarea por hacer"
//         }
//     })
//     .command("actualizar", "Actualiza el estado completado de una tarea", {

//         descripcion: {
//             demand: true,
//             alias: "d",
//             desc: "Actualización de la tarea"
//         },
//         completado: {
//             default: true,
//             alias: "c",
//             desc: "Marca como completado o pendiente la tarea"
//         }

//     })
//     .command("borrar", "Borrar una tarea de la lista de tareas", {
//         descripcion: {
//             demand: true,
//             alias: "d",
//             desc: "Borrar una tarea"
//         }
//     })
//     .help()
//     .argv;

//Optimización de lo de arriba
const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion
    })
    .command("actualizar", "Actualiza el estado completado de una tarea", {

        descripcion,
        completado

    })
    .command("borrar", "Borrar una tarea de la lista de tareas", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}