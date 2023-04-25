const fastify = require ('fastify')({
    // logger che vediamo nella console come va la nostra app.
    logger:true
})

// importiamo gli utenti 
const users = require('./data.json')

// creaiamo un'APIREST semplice
fastify.get('/', (req, reply) => {
    reply.send({
        hello: 'world'
    })
})

// importimao i nostri dati e li esponiamo tutti quanti
fastify.get('/users', (req, reply) => {
    // limit e offset li usiamo per mettere dei paletti. Con req.query andiamo a vedere la query string 
    const q = req.query;
    const limit = parseInt(q.limit) || 10
    const offset = parseInt(q.limit) || 0
    // prendiamo i primi x utenti
    const data = users.slice(offset, limit + offset)

    reply.send({
        users: data
    })
})

// se vogliamo prendere un utente specifico e quindi in base all'id:
fastify.get('/users/:id', (req, reply) => {
    const id = req.params.id
    const user = users.find((user) => user.id === parseInt(id))

    if(!user) {
        reply.send({
            error:404
        })
    }

    reply.send({
        user
    })
})


// avviamo il server
fastify.listen({port: 3000}, (err, address) => {
    if(err) {
        console.error(err)
    }

    console.log(`Fastify is running at ${address}`)
})