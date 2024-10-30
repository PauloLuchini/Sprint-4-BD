const { MongoClient } = require("mongodb");
const fs = require("fs");
const { Parser } = require("json2csv");

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);

async function exportData() {
    try {
        await client.connect();
        const db = client.db("HiperpersonalizacaoMarketing");

        const colecoes = ["TendenciasGastos", "Empresas", "HistoricoInteracoes", "DesempenhoFinanceiro", "ComportamentoNegocios"];
        const allData = {};

        // Recuperar dados de todas as coleções
        for (const colecao of colecoes) {
            const dados = await db.collection(colecao).find().toArray();
            allData[colecao] = dados; 
        }

        // Exportar para um único arquivo JSON
        fs.writeFileSync("dataset.json", JSON.stringify(allData, null, 2));
        console.log("Dados exportados com sucesso para dataset.json");

        // Converter cada coleção para CSV e exportar
        for (const [colecao, dados] of Object.entries(allData)) {
            const parser = new Parser();
            const csv = parser.parse(dados);
            fs.writeFileSync(`${colecao}.csv`, csv);
            console.log(`Dados exportados com sucesso para ${colecao}.csv`);
        }
    } catch (error) {
        console.error("Erro ao exportar dados:", error);
    } finally {
        // Certifique-se de que a variável client seja acessível aqui
        await client.close();
    }
}

// Chamar a função para exportar os dados
exportData();
