const connectDB = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getHistoricos = async (req, res) => {
    const db = await connectDB();
    const historicos = await db.collection("HistoricoInteracoes").find().toArray();
    res.json(historicos);
};

exports.getHistoricoById = async (req, res) => {
    const db = await connectDB();
    const historico = await db.collection("HistoricoInteracoes").findOne({ _id: new ObjectId(req.params.id) });
    if (!historico) return res.status(404).send("Histórico não encontrado");
    res.json(historico);
};

exports.createHistorico = async (req, res) => {
    const db = await connectDB();
    const novoHistorico = req.body;
    const result = await db.collection("HistoricoInteracoes").insertOne(novoHistorico);
    res.status(201).json(result.ops[0]);
};

exports.updateHistorico = async (req, res) => {
    const db = await connectDB();
    const result = await db.collection("HistoricoInteracoes").updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    if (result.matchedCount === 0) return res.status(404).send("Histórico não encontrado");
    res.json({ message: "Histórico atualizado com sucesso" });
};

exports.deleteHistorico = async (req, res) => {
    const db = await connectDB();
    const result = await db.collection("HistoricoInteracoes").deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).send("Histórico não encontrado");
    res.json({ message: "Histórico deletado com sucesso" });
};
