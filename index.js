import readline from 'readline'

let tasks = []
const addTask = desc => {
  let id = Math.max.apply(null, [0, ...tasks.map(element => element.id)])+1
  tasks.push({
    id: id,
    desc: desc,
    state: false
  })
}
const deleteTask = id => tasks = tasks.filter(element => element.id !== id)
const checkTask = id => tasks = tasks.map(element => element.id !== id ? element : {
  id: id,
  desc: element.desc,
  state: !element.state
})

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

const mainThread = () => {
  console.log("🎉Bienvenidos🤖")
  rl.question(`Seleccione la funcion a ejecutar
    1. Ver tareas
    2. Agregar tarea
    3. Eliminar tarea
    4. Marcar tarea como completada
    5. Salir\n`,
    answer => {
    switch(answer){
      case "1":
        console.log(JSON.stringify(tasks)+"\n")
        mainThread()
        break
      case "2":
        rl.question("Ingrese la descripcion de la tarea:\n", desc => {
          addTask(desc)
          console.log("Tarea agregada✅\n")
          mainThread()
        })
        break
      case "3":
        console.log(tasks)
        rl.question("Ingrese el id de la tarea a eliminar:\n", id => {
          deleteTask(parseInt(id))
          console.log("Tarea eliminada✅\n")
          mainThread()
        })
        break
      case "4":
        console.log(tasks)
        rl.question("Ingrese el id de la tarea:\n", id => {
          checkTask(parseInt(id))
          console.log("Tarea marcada/desmarcada✅\n")
          mainThread()
        })
        break
      case "5":
        console.log("Adios👋\n")
        process.exit(0)
      default:
        console.log("Opcion invalida\n")
        mainThread()
        break
    }
  })
}
mainThread()