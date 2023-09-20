// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use('api/', router)

const porta = process.env.PORT || 3000
server.listen(porta, () => {
    console.log(`Note Keeper Server está rodando na porta ${porta}`)
})