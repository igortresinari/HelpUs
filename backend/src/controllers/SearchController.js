const connection = require('../database/connection');

module.exports= {
    async create(request, response) {
        const { city } = request.body;

        const event = await connection('events')
        .where('city', city)
        .select('*');

        return response.json(event);
    },

    async index(request, response) {
        const city = request.headers.location;

        const events = await connection('events')
            .where('city', city)
            .select('*');

        return response.json(events);
    }

};