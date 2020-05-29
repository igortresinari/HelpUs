const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const userpf = await connection('userpf')
        .where('id', id)
        .select('firstname')
        .first();

        if(!userpf){
            return response.status(400).json({ error: 'No user found with this id.'});
        }

        return response.json(userpf);
    }
}