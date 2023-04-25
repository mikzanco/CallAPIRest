const fastify = require ('fastify')({
    // logger che vediamo nella console come va la nostra app.
    logger:true
})

// creaiamo un'APIREST semplice
fastify.get('/', (req, reply) => {
    reply.send({
        hello: 'world'
    })
})

// avviamo il server
fastify.listen({port: 3000}, (err, address) => {
    if(err) {
        console.error(err)
    }

    console.log(`Fastify is running at ${address}`)
})