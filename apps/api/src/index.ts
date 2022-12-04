import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

/**
 * This API needs to (v1/mvp):
 * Return a list of todos
 * Add a todo
 * Delete a todo
 */

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

const start = async () => {
    try {
        await fastify.listen({ port: 3001 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
