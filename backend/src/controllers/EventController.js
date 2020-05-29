const connection = require('../database/connection');


module.exports= {
    async index(request, response) {
        const {page = 1} = request.query;

        const [count] = await connection('events').count();

        const events = await connection('events')
        .join('ongs', 'ongs.id', '=', 'events.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select('events.*', 'ongs.name', 'ongs.email');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(events);
    },

    async create(request, response){
        const {title, description, address, city, uf} = request.body;
        const ong_id = request.headers.authorization;

        const result = await connection('events').insert({
            title, 
            description, 
            address, 
            city,
            ong_id,
        });

        const id = result[0];

        return response.json("Cadastro de evento com id " + id);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const event = await connection('events')
        .where('id', id)
        .select('ong_id')
        .first();

        if (event.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('events').where('id', id).delete();

        return response.status(204).send();
    }
};