const connectDB = require("../config/database");
const { ObjectId } = require("mongodb");

exports.getEmpresas = async (req, res) => {
    const db = await connectDB();
    const empresas = await db.collection("Empresas").find().toArray();
    res.json(empresas);
};

exports.getEmpresaById = async (req, res) => {
    const db = await connectDB();
    const empresa = await db.collection("Empresas").findOne({ _id: new ObjectId(req.params.id) });
    if (!empresa) return res.status(404).send("Empresa não encontrada");
    res.json(empresa);
};

exports.createEmpresa = async (req, res) => {
    const db = await connectDB();
    const novaEmpresa = req.body;
    
    try {
        const result = await db.collection("Empresas").insertOne(novaEmpresa);
        
        // Acesso ao ID da nova empresa
        if (result.insertedId) {
            res.status(201).json({ id: result.insertedId, ...novaEmpresa });
        } else {
            res.status(500).json({ error: "Erro ao adicionar a empresa." });
        }
    } catch (error) {
        console.error("Erro ao adicionar a empresa:", error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
};

exports.updateEmpresa = async (req, res) => {
    const db = await connectDB();
    const result = await db.collection("Empresas").updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: req.body }
    );
    if (result.matchedCount === 0) return res.status(404).send("Empresa não encontrada");
    res.json({ message: "Empresa atualizada com sucesso" });
};

exports.deleteEmpresa = async (req, res) => {
    const db = await connectDB();
    const result = await db.collection("Empresas").deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) return res.status(404).send("Empresa não encontrada");
    res.json({ message: "Empresa deletada com sucesso" });
};
