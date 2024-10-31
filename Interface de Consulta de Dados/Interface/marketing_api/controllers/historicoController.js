const connectDB = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getHistoricos = async (req, res) => {
    try {
        const db = await connectDB();
        const historicos = await db.collection("HistoricoInteracoes").find().toArray();
        res.json(historicos);
    } catch (error) {
        console.error("Erro ao buscar históricos:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.getHistoricoById = async (req, res) => {
    try {
        const db = await connectDB();
        const historico = await db.collection("HistoricoInteracoes").findOne({ _id: new ObjectId(req.params.id) });
        if (!historico) return res.status(404).send("Histórico não encontrado");
        res.json(historico);
    } catch (error) {
        console.error("Erro ao buscar o histórico:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.createHistorico = async (req, res) => {
    try {
        const db = await connectDB();
        const novoHistorico = req.body;
        const result = await db.collection("HistoricoInteracoes").insertOne(novoHistorico);

        if (result.insertedId) {
            res.status(201).json({ id: result.insertedId, ...novoHistorico });
        } else {
            res.status(500).json({ error: "Erro ao adicionar o histórico." });
        }
    } catch (error) {
        console.error("Erro ao adicionar o histórico:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.updateHistorico = async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection("HistoricoInteracoes").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );

        if (result.matchedCount === 0) return res.status(404).send("Histórico não encontrado");
        res.json({ message: "Histórico atualizado com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar o histórico:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.deleteHistorico = async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection("HistoricoInteracoes").deleteOne({ _id: new ObjectId(req.params.id) });

        if (result.deletedCount === 0) return res.status(404).send("Histórico não encontrado");
        res.json({ message: "Histórico deletado com sucesso" });
    } catch (error) {
        console.error("Erro ao deletar o histórico:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};
