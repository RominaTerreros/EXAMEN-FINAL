const transactionSchema = require('../modelo/transaction');

module.exports = {
    get:async(req, res)=>{
        try {
            const allTransaction = await transactionSchema.find();
            res.status(200).json(allTransaction);
        } catch (error) {
            res.json({message:error});
        }
    },
    post:async(req, res)=>{
        try {
            const Transaction = transactionSchema(req.body);
            const newTransaction = await Transaction.save();
            res.status(200).json(newTransaction);
        } catch (error) {
            res.json({message:error})
        }
    },
    get_id:async(req, res)=>{
        try {
            const { id } = req.params;
            const aTransaction = await transactionSchema.findById(id);
            res.status(200).json(aTransaction);
        } catch (error) {
            res.json({message:error});
        }
    },
    update:async(req, res)=>{
        try {
            const { id } = req.params;
            const { fecha,servicio,usuario,empresa,monto } = req.body;
            const TransactionUpdate = await transactionSchema.updateOne({_id: id}, { $set: {fecha,servicio,usuario,empresa,monto} });
            res.status(200).json(TransactionUpdate);
        } catch (error) {
            res.json({message:error});
        }
    },
    delete: async(req, res)=>{
        try {
            const { id } = req.params;
            const TransactionRemoved = await transactionSchema.remove({_id: id});
            res.status(200).json(TransactionRemoved);
        } catch (error) {
            res.json({message:error});
        }
    },
}