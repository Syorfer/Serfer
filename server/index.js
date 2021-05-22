const fastify = require('fastify')({logger: true}) 
fastify.get('/', async (request, reply) => { 
     reply.send({ hello: 'world' }) 
  }) 
async function start()  { 
    try{ 
        await fastify.listen(4300) 
    } catch(err) { 
        fastify.log.error(err) 
        process.exit(1) 
    } 
} 
start()
