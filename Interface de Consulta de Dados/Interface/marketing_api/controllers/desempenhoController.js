const connectDB = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getDesempenhos = async (req, res) => {
    const db = await connectDB();
    const desempenhos = await db.collection("DesempenhoFinanceiro").find().toArray();
    res.json(desempenhos);
};

exports.getDesempenhoById = async (req, res) => {
    const db = await connectDB();
    const desempenho = await db.collection("DesempenhoFinanceiro").findOne({ _id: new ObjectId(req.params.id) });
    if (!desempenho) return res.status(404).send("Desempenho não encontrado");
    res.json(desempenho);
};

exports.createDesempenho = async (req, res) => {
    try {
        const db = await connectDB();
        const novoDesempenho = req.body;
        const result = await db.collection("DesempenhoFinanceiro").insertOne(novoDesempenho);

        // Usar result.insertedId para obter o novo desempenho
        const desempenhoCriado = await db.collection("DesempenhoFinanceiro").findOne({ _id: result.insertedId });
        res.status(201).json(desempenhoCriado);
    } catch (error) {
        console.error("Erro ao criar desempenho:", error);
        res.status(500).send("Erro ao criar desempenho");
    }
};

exports.updateDesempenho = async (req, res) => {
    const db = await connectDB();
    const result = await db.collection("DesempenhoFinanceiro").updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    if (result.matchedCount === 0) return res.status(404).send("Desempenho não encontrado");
    res.json({ message: "Desempenho atualizado com sucesso" });
};

exports.deleteDesempenho = async (req, res) => {
    const db = await connectDB();
    const result = await db.collection("DesempenhoFinanceiro").deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).send("Desempenho não encontrado");
    res.json({ message: "Desempenho deletado com sucesso" });
};
