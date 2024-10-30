const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const bodyParser = require('body-parser');
const tendenciasGastos = require('./routes/tendenciasGastos');
const cors = require('cors');



dotenv.config();
const app = express();
app.use(cors({ origin: 'http://localhost:3001' }));
app.use(express.json());
    
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.use(express.json({ limit: '10mb' })); 
    app.use(express.urlencoded({ limit: '10mb', extended: true }));
    app.use("/api/empresas", require("./routes/empresas"));
    app.use("/api/comportamento", require("./routes/comportamentoNegocios"));
    app.use("/api/historico", require("./routes/historicoInteracoes"));
    app.use("/api/desempenho", require("./routes/desempenhoFinanceiro"));
    app.use("/api/tendencias", require("./routes/tendenciasGastos"));
    app.use(bodyParser.json());
    app.use('/tendencias-gastos', tendenciasGastos)

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});



;


