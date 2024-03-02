const mentorSchema = require('../modelo/mentor');

module.exports = {
    get:async(req, res)=>{
        try {
            const allMentor = await mentorSchema.find();
            res.status(200).json(allMentor);
        } catch (error) {
            res.json({message:error});
        }
    },
    post:async(req, res)=>{
        try {
            const Mentor = mentorSchema(req.body);
            const newMentor = await Mentor.save();
            res.status(200).json(newMentor);
        } catch (error) {
            res.json({message:error})
        }
    },
    get_id:async(req, res)=>{
        try {
            const { id } = req.params;
            const aMentor = await mentorSchema.findById(id);
            res.status(200).json(aMentor);
        } catch (error) {
            res.json({message:error});
        }
    },
    update:async(req, res)=>{
        try {
            const { id } = req.params;
            const { nombre,carrera,competencia,servicio,contacto,email,contrasena } = req.body;
            const MentorUpdate = await mentorSchema.updateOne({_id: id}, { $set: {nombre,carrera,competencia,servicio,contacto,email,contrasena} });
            res.status(200).json(MentorUpdate);
        } catch (error) {
            res.json({message:error});
        }
    },
    delete: async(req, res)=>{
        try {
            const { id } = req.params;
            const MentorRemoved = await mentorSchema.remove({_id: id});
            res.status(200).json(MentorRemoved);
        } catch (error) {
            res.json({message:error});
        }
    },
}