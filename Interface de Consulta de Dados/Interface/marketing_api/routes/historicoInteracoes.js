const express = require("express");
const router = express.Router();
const historicoController = require("../controllers/historicoController");
const connectDB = require('../config/database');

router.get("/", historicoController.getHistoricos);
router.get("/:id", historicoController.getHistoricoById);
router.post("/", historicoController.createHistorico);
router.put("/:id", historicoController.updateHistorico);
router.delete("/:id", historicoController.deleteHistorico);




router.get('/', async (req, res) => {
    try {
        const db = await connectDB();
        const resultados = await db.collection('HistoricoInteracoes').find().toArray();
        res.json(resultados);
    } catch (error) {
        console.error('Erro ao buscar documentos:', error);
        res.status(500).json({ error: 'Erro ao buscar documentos' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const id = req.params.id;
        const resultado = await db.collection('HistoricoInteracoes').findOne({ _id: new require('mongodb').ObjectId(id) });
        if (!resultado) {
            return res.status(404).json({ error: 'Documento não encontrado' });
        }
        res.json(resultado);
    } catch (error) {
        console.error('Erro ao buscar documento:', error);
        res.status(500).json({ error: 'Erro ao buscar documento' });
    }
});


router.post('/', async (req, res) => {
    try {
        const db = await connectDB();
        const novoDocumento = req.body;
        const resultado = await db.collection('HistoricoInteracoes').insertOne(novoDocumento);
        res.status(201).json(resultado);
    } catch (error) {
        console.error('Erro ao inserir documento:', error);
        res.status(500).json({ error: 'Erro ao inserir documento' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const id = req.params.id;
        const atualizacao = req.body;
        const resultado = await db.collection('HistoricoInteracoes').updateOne(
            { _id: new require('mongodb').ObjectId(id) },
            { $set: atualizacao }
        );
        if (resultado.modifiedCount === 0) {
            return res.status(404).json({ error: 'Documento não encontrado ou nada a atualizar' });
        }
        res.json({ message: 'Documento atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar documento:', error);
        res.status(500).json({ error: 'Erro ao atualizar documento' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const db = await connectDB();
        const id = req.params.id;
        const resultado = await db.collection('HistoricoInteracoes').deleteOne({ _id: new require('mongodb').ObjectId(id) });
        if (resultado.deletedCount === 0) {
            return res.status(404).json({ error: 'Documento não encontrado' });
        }
        res.json({ message: 'Documento excluído com sucesso' });
    } catch (error) {
        console.error('Erro ao excluir documento:', error);
        res.status(500).json({ error: 'Erro ao excluir documento' });
    }
});


module.exports = router;