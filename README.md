# Marketing Frontend

Bem-vindo ao **Marketing Frontend**! Este é um front-end desenvolvido em React que serve como interface para gerenciar dados e campanhas de marketing para diferentes empresas. A aplicação permite listar, cadastrar e atualizar informações de empresas para uso em uma Inteligência Artificial de hiperpersonalização de campanhas.

## Visão Geral do Projeto

O projeto foi criado com `create-react-app` e utiliza Axios para realizar requisições a uma API back-end, que interage com um banco de dados MongoDB. Este front-end faz parte de um sistema maior para hiperpersonalização de campanhas de marketing.

### Estrutura do Projeto

Interface/ ├── marketing_api/ # Backend da API ├── marketing-frontend/ # Frontend React └── README.md # Documentação do projeto

markdown
Copiar código

## Pré-requisitos

- **Node.js** versão 16 ou superior
- **npm** ou **yarn**
- **Git** para clonar o repositório

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/marketing-frontend.git
   cd marketing-frontend
Instale as dependências:

bash
Copiar código
npm install
Configuração
Configurar o Servidor
O front-end está configurado para rodar na porta 3001 para evitar conflito com a API back-end (que geralmente roda na porta 3000). Para ajustar isso, você já encontrará a configuração no script de start do projeto.

Configurar o Proxy
No arquivo package.json, um proxy foi adicionado para redirecionar requisições da API para o back-end. Verifique se o proxy está configurado corretamente para o endereço onde sua API está rodando.

Exemplo:

json
Copiar código
"proxy": "http://localhost:3000"
Variáveis de Ambiente
Caso necessário, configure variáveis de ambiente adicionais para o projeto no arquivo .env. Exemplos de variáveis podem incluir chaves de API e configurações específicas do ambiente.

Executando o Projeto
Para rodar o projeto localmente, execute:

bash
Copiar código
npm start
O aplicativo deverá abrir automaticamente no navegador padrão em http://localhost:3001.

Observação
Se a porta 3001 já estiver em uso, você será solicitado a usar uma porta alternativa.

Estrutura do Código
Abaixo estão alguns dos principais diretórios e arquivos do projeto:

src/: Contém o código-fonte do front-end.
components/Empresas.js: Componente principal para exibir, adicionar e editar informações sobre empresas.
App.js: Componente raiz do aplicativo.
index.js: Ponto de entrada para inicializar o React.
public/: Arquivos públicos estáticos.
Funcionalidades
Listar Empresas: Veja todas as empresas cadastradas.
Cadastrar Empresas: Adicione novas empresas ao sistema.
Atualizar Empresas: Edite informações existentes de uma empresa.
Integração com o Backend
O frontend foi configurado para se comunicar com uma API back-end em Node.js e MongoDB. Certifique-se de que a API está rodando antes de utilizar o front-end para evitar erros de conexão.

Repositório do Backend
Para o funcionamento completo, é necessário que o back-end também esteja configurado e rodando. Você pode encontrar o repositório do back-end aqui.

Segurança
É recomendável que variáveis sensíveis, como URLs de API e chaves de acesso, sejam armazenadas em um arquivo .env. Esse arquivo não deve ser comitado ao repositório por questões de segurança.

Escalabilidade
O sistema foi projetado para ser modular e facilmente escalável. Para ambientes de produção, recomenda-se utilizar balanceamento de carga e cache para melhorar a performance e a experiência do usuário.

Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature: git checkout -b minha-feature.
Commit suas mudanças: git commit -m 'Adiciona minha feature'.
Push para a branch: git push origin minha-feature.
Envie um Pull Request.
Problemas Conhecidos
CORS: Certifique-se de que o backend está configurado para permitir requisições de origens diferentes em desenvolvimento.
Erros de Porta: Caso a porta 3001 já esteja em uso, tente mudá-la no script start usando cross-env.
