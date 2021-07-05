const express = require("express")
const server = express()
const cors = require("cors")

server.use(cors())

server.get("/", (x, y) => {
    y.send("its work!")
})

server.get("/multiplicar/:num/:num2", (request, response) => {
    // quando vem no endpoint - get
    const { num, num2 } = request.params

    // // aqui é quando vem por ?numero1=1&numero2=4 - get
    // const { numero1, numero2 } = request.query
    
    // // algo por formulario - post
    // const { nume1, nume2 } = request.body

    response.send({ result: parseInt(num) * parseInt(num2)})
})

server.listen(8000, () => {
    console.log("API funcionando na porta 8000")
})

