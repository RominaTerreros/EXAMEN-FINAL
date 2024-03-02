const serviceSchema = require('../modelo/service');

module.exports = {
    get:async(req, res)=>{
        try {
            const allService = await serviceSchema.find();
            res.status(200).json(allService);
        } catch (error) {
            res.json({message:error});
        }
    },
    post:async(req, res)=>{
        try {
            const Service = serviceSchema(req.body);
            const newService = await Service.save();
            res.status(200).json(newService);
        } catch (error) {
            res.json({message:error})
        }
    },
    get_id:async(req, res)=>{
        try {
            const { id } = req.params;
            const aService = await serviceSchema.findById(id);
            res.status(200).json(aService);
        } catch (error) {
            res.json({message:error});
        }
    },
    update:async(req, res)=>{
        try {
            const { id } = req.params;
            const { tipo,descripcion,precio,duracion } = req.body;
            const ServiceUpdate = await serviceSchema.updateOne({_id: id}, { $set: {tipo,descripcion,precio,duracion} });
            res.status(200).json(ServiceUpdate);
        } catch (error) {
            res.json({message:error});
        }
    },
    delete: async(req, res)=>{
        try {
            const { id } = req.params;
            const ServiceRemoved = await serviceSchema.remove({_id: id});
            res.status(200).json(ServiceRemoved);
        } catch (error) {
            res.json({message:error});
        }
    },
}