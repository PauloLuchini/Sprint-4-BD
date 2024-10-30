//Documentos da coleção Empresas
use('HiperpersonalizacaoMarketing');
db.Empresas.insertMany([
    {
        "empresa_id": "E001",
        "nome": "Tech Solutions",
        "tamanho": "Grande",
        "setor": "Tecnologia",
        "localizacao_geografica": "São Paulo",
        "numero_funcionarios": 500,
        "tipo_empresa": "Cliente",
        "data_fundacao": "2010-03-12",
        "site": "https://techsolutions.com.br",
        "faturamento_anual": 15000000,
        "responsavel_contato": {
            "nome": "Maria Silva",
            "email": "maria@techsolutions.com.br",
            "telefone": "+55 11 98765-4321"
        }
    },
    {
        "empresa_id": "E002",
        "nome": "Green Corp",
        "tamanho": "Médio",
        "setor": "Energia",
        "localizacao_geografica": "Rio de Janeiro",
        "numero_funcionarios": 300,
        "tipo_empresa": "Potencial",
        "data_fundacao": "2005-07-18",
        "site": "https://greencorp.com.br",
        "faturamento_anual": 10000000,
        "responsavel_contato": {
            "nome": "Carlos Ramos",
            "email": "carlos@greencorp.com.br",
            "telefone": "+55 21 12345-6789"
        }
    }
])

//Documentos da coleção ComportamentoNegocios
use('HiperpersonalizacaoMarketing');
db.ComportamentoNegocios.insertMany([
    {
        "empresa_id": "E001",
        "usorecursos_especificos": "Computação em nuvem, AI para otimização de processos",
        "proposta_negocio": "Automatização de processos de TI",
        "contrato_assinado": true,
        "feedback_servicos_produtos": "Excelente suporte e qualidade",
        "interesse_novos_servicos": ["Big Data", "Segurança de Dados"],
        "frequencia_interacao": "Mensal",
        "nivel_satisfacao": 9,
        "potencial_crescimento": "Alto",
        "tempo_como_cliente": "3 anos",
        "motivo_interesse": "Expansão de serviços digitais"
    },
    {
        "empresa_id": "E002",
        "usorecursos_especificos": "Energia renovável, monitoramento ambiental",
        "proposta_negocio": "Redução de custos com eficiência energética",
        "contrato_assinado": false,
        "feedback_servicos_produtos": "Necessidade de customização",
        "interesse_novos_servicos": ["Monitoramento em tempo real"],
        "frequencia_interacao": "Trimestral",
        "nivel_satisfacao": 7,
        "potencial_crescimento": "Médio",
        "tempo_como_cliente": "N/A",
        "motivo_interesse": "Sustentabilidade"
    }
])

//Documentos da coleção HistoricoInteracoes
use('HiperpersonalizacaoMarketing');
db.HistoricoInteracoes.insertMany([
    {
        "empresa_id": "E001",
        "data_interacao": "2024-01-15",
        "tipo_interacao": "Email",
        "descricao": "Envio de proposta comercial",
        "canal_utilizado": "Email",
        "resposta": "Positiva",
        "tempo_resposta": "2 dias",
        "detalhes_interacao": "Interessados na proposta inicial",
        "proximo_passo": "Reunião com equipe de TI",
        "responsavel_interacao": "João Andrade"
    },
    {
        "empresa_id": "E002",
        "data_interacao": "2023-11-02",
        "tipo_interacao": "Telefone",
        "descricao": "Contato inicial",
        "canal_utilizado": "Telefone",
        "resposta": "Aguardando retorno",
        "tempo_resposta": "N/A",
        "detalhes_interacao": "Cliente com dúvidas sobre serviços",
        "proximo_passo": "Aguardar novo contato",
        "responsavel_interacao": "Luciana Torres"
    }
])

//Documentos da coleção DesempenhoFinanceiro
use('HiperpersonalizacaoMarketing');
db.DesempenhoFinanceiro.insertMany([
    {
        "empresa_id": "E001",
        "ano": 2023,
        "receita_anual": 15000000,
        "lucro_liquido": 3000000,
        "despesas": 12000000,
        "margem_lucro": "20%",
        "crescimento_anual": "15%",
        "investimentos": 2000000,
        "area_mais_lucrativa": "Soluções em Nuvem",
        "area_mais_custosa": "Segurança",
        "avaliacao_risco": "Baixo"
    },
    {
        "empresa_id": "E002",
        "ano": 2023,
        "receita_anual": 10000000,
        "lucro_liquido": 1500000,
        "despesas": 8500000,
        "margem_lucro": "15%",
        "crescimento_anual": "10%",
        "investimentos": 1500000,
        "area_mais_lucrativa": "Eficiência Energética",
        "area_mais_custosa": "Infraestrutura",
        "avaliacao_risco": "Médio"
    }
])

//Documentos da coleção TendenciasGastos
use('HiperpersonalizacaoMarketing');
db.TendenciasGastos.insertMany([
    {
        "empresa_id": "E001",
        "categoria_gasto": "Publicidade",
        "valor_gasto": 500000,
        "periodo": "Anual",
        "variacao_percentual": "5%",
        "prioridade_investimento": "Alta",
        "projecao_crescimento": "8%",
        "motivo_investimento": "Expansão de mercado",
        "retorno_esperado": "10%",
        "responsavel_orcamento": "Fernanda Costa"
    },
    {
        "empresa_id": "E002",
        "categoria_gasto": "Infraestrutura",
        "valor_gasto": 750000,
        "periodo": "Anual",
        "variacao_percentual": "10%",
        "prioridade_investimento": "Média",
        "projecao_crescimento": "5%",
        "motivo_investimento": "Manutenção de instalações",
        "retorno_esperado": "6%",
        "responsavel_orcamento": "Eduardo Paiva"
    }
])
