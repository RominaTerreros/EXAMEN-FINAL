const clientSchema = require('../modelo/client');

module.exports = {
    get:async(req, res)=>{
        try {
            const allClient = await clientSchema.find();
            res.status(200).json(allClient);
        } catch (error) {
            res.json({message:error});
        }
    },
    post:async(req, res)=>{
        try {
            const Client = clientSchema(req.body);
            const newClient = await Client.save();
            res.status(200).json(newClient);
        } catch (error) {
            res.json({message:error})
        }
    },
    get_id:async(req, res)=>{
        try {
            const { id } = req.params;
            const aClient = await clientSchema.findById(id);
            res.status(200).json(aClient);
        } catch (error) {
            res.json({message:error});
        }
    },
    update:async(req, res)=>{
        try {
            const { id } = req.params;
            const { nombre,contacto,preferencias,email,contrasena } = req.body;
            const ClientUpdate = await clientSchema.updateOne({_id: id}, { $set: {nombre,contacto,preferencias,email,contrasena} });
            res.status(200).json(ClientUpdate);
        } catch (error) {
            res.json({message:error});
        }
    },
    delete: async(req, res)=>{
        try {
            const { id } = req.params;
            const ClientRemoved = await clientSchema.remove({_id: id});
            res.status(200).json(ClientRemoved);
        } catch (error) {
            res.json({message:error});
        }
    },
}