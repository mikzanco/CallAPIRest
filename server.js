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

fastify.listen