import http from 'http'

let tasks = [
  {
    id: 0,
    desc: "hola",
    state: false
  },
  {
    id: 1,
    desc: "adios",
    state: true
  },
  {
    id: 2,
    desc: "buenas",
    state: false
  }
]
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

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(JSON.stringify(tasks))
  res.end()
})

server.listen(80, () => console.log('Server running on port 80'))