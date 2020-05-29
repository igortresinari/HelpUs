const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const userpf = await connection('userpf').select('*');

        return response.json(userpf);
    },

    async create(request, response) {
        const { firstname, lastname, email, whatsapp } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('userpf').insert({
            id,
            firstname,
            lastname,
            email,
            whatsapp,
        })

        return response.json({id});
    }
};