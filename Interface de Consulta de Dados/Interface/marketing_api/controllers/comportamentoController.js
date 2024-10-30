const connectDB = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getComportamentos = async (req, res) => {
    try {
        const db = await connectDB();
        const comportamentos = await db.collection("ComportamentoNegocios").find().toArray();
        res.json(comportamentos);
    } catch (error) {
        console.error("Erro ao obter comportamentos:", error);
        res.status(500).send("Erro ao obter comportamentos");
    }
};

exports.getComportamentoById = async (req, res) => {
    try {
        const db = await connectDB();
        const comportamento = await db.collection("ComportamentoNegocios").findOne({ _id: new ObjectId(req.params.id) });
        if (!comportamento) return res.status(404).send("Comportamento não encontrado");
        res.json(comportamento);
    } catch (error) {
        console.error("Erro ao obter comportamento:", error);
        res.status(500).send("Erro ao obter comportamento");
    }
};

exports.createComportamento = async (req, res) => {
    try {
        const db = await connectDB();
        const novoComportamento = req.body;
        const result = await db.collection("ComportamentoNegocios").insertOne(novoComportamento);

        // Agora, buscamos o documento criado pelo seu ID
        const comportamentoCriado = await db.collection("ComportamentoNegocios").findOne({ _id: result.insertedId });
        res.status(201).json(comportamentoCriado);
    } catch (error) {
        console.error("Erro ao criar comportamento:", error);
        res.status(500).send("Erro ao criar comportamento");
    }
};

exports.updateComportamento = async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection("ComportamentoNegocios").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        if (result.matchedCount === 0) return res.status(404).send("Comportamento não encontrado");
        res.json({ message: "Comportamento atualizado com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar comportamento:", error);
        res.status(500).send("Erro ao atualizar comportamento");
    }
};

exports.deleteComportamento = async (req, res) => {
    try {
        const db = await connectDB();
        const result = await db.collection("ComportamentoNegocios").deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).send("Comportamento não encontrado");
        res.json({ message: "Comportamento deletado com sucesso" });
    } catch (error) {
        console.error("Erro ao deletar comportamento:", error);
        res.status(500).send("Erro ao deletar comportamento");
    }
};
