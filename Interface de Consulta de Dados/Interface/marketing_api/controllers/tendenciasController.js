const connectDB = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getTendencias = async (req, res) => {
    const db = await connectDB();
    try {
        const tendencias = await db.collection("TendenciasGastos").find().toArray();
        res.json(tendencias);
    } catch (error) {
        console.error("Erro ao buscar tendências:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.getTendenciaById = async (req, res) => {
    const db = await connectDB();
    try {
        const tendencia = await db.collection("TendenciasGastos").findOne({ _id: new ObjectId(req.params.id) });
        if (!tendencia) return res.status(404).send("Tendência não encontrada");
        res.json(tendencia);
    } catch (error) {
        console.error("Erro ao buscar tendência:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.createTendencia = async (req, res) => {
    const db = await connectDB();
    const novaTendencia = req.body;

    try {
        const result = await db.collection("TendenciasGastos").insertOne(novaTendencia);
        

        if (result.insertedId) {
            res.status(201).json({ id: result.insertedId, ...novaTendencia });
        } else {
            res.status(500).json({ error: "Erro ao adicionar a tendência." });
        }
    } catch (error) {
        console.error("Erro ao adicionar a tendência:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.updateTendencia = async (req, res) => {
    const db = await connectDB();
    try {
        const result = await db.collection("TendenciasGastos").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        if (result.matchedCount === 0) return res.status(404).send("Tendência não encontrada");
        res.json({ message: "Tendência atualizada com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar tendência:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.deleteTendencia = async (req, res) => {
    const db = await connectDB();
    try {
        const result = await db.collection("TendenciasGastos").deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).send("Tendência não encontrada");
        res.json({ message: "Tendência deletada com sucesso" });
    } catch (error) {
        console.error("Erro ao deletar tendência:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};
