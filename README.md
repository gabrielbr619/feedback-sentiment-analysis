# Feedback Sentiment Analysis API

Feedback Sentiment Analysis API é uma ferramenta poderosa para coleta e análise de feedback de clientes. Desenvolvida com tecnologias modernas, esta API fornece análise de sentimentos em tempo real, classificação de emoções e extração de palavras-chave para ajudar empresas a entender melhor a opinião de seus clientes.

## 🚀 Funcionalidades

- **Autenticação Robusta**
  - Registro e login seguros de usuários
  - Proteção de rotas com JWT
- **Coleta de Feedback**
  - Submissão de feedbacks de clientes
  - Armazenamento seguro no MongoDB
- **Análise de Sentimentos em Tempo Real**
  - Análise automática do sentimento de cada feedback
  - Suporte para textos em português e inglês
- **Classificação de Emoções**
  - Categorização das emoções expressas nos feedbacks
  - Utilização de machine learning para classificação precisa
- **Extração de Palavras-chave**
  - Identificação das principais palavras-chave em cada feedback
  - Auxílio na compreensão dos tópicos mais relevantes
- **Análise Agregada**
  - Visualização de tendências de sentimentos por categoria
  - Identificação de emoções dominantes e palavras-chave mais frequentes

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor
- **Express.js**: Framework web rápido e minimalista para Node.js
- **MongoDB**: Banco de dados NoSQL para armazenamento flexível de dados
- **Mongoose**: ODM (Object Data Modeling) para MongoDB e Node.js
- **JWT**: JSON Web Tokens para autenticação segura
- **Bcrypt**: Biblioteca para hash de senhas
- **Natural**: Biblioteca de processamento de linguagem natural
- **Langdetect**: Biblioteca para detecção de idioma
- **Keyword-extractor**: Biblioteca para extração de palavras-chave

## 📋 Pré-requisitos

- Node.js (v14+ recomendado)
- MongoDB
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
   `git clone https://github.com/seu-usuario/feedback-sentiment-analysis.git`
2. Entre no diretório do projeto:
   `cd feedback-sentiment-analysis`
3. Instale as dependências:
   `npm install`
4. Configure as variáveis de ambiente: Crie um arquivo `.env` na raiz do projeto e adicione:
   `PORT=3000 MONGODB_URI=mongodb://localhost:27017/feedback_sentiment JWT_SECRET=seu_jwt_secret_aqui`

## 🚀 Uso

1. Inicie o servidor de desenvolvimento:
   `npm run dev`

2. Acesse a API em `http://localhost:3000`

## 📌 Rotas Principais

- `POST /api/auth/register`: Registrar um novo usuário
- `POST /api/auth/login`: Autenticar um usuário
- `POST /api/feedback`: Submeter um novo feedback
- `GET /api/feedback`: Obter todos os feedbacks
- `GET /api/analysis`: Obter análise agregada dos feedbacks

## 🧪 Testes

Execute os testes unitários com:
`npm test`

## 🐞 Problemas Conhecidos

- A análise de sentimentos pode ser menos precisa para textos muito curtos
- O sistema de classificação de emoções atual tem um conjunto limitado de categorias

## 🗺️ Roadmap

- Implementação de um dashboard para visualização de dados
- Melhoria na precisão da análise de sentimentos com mais dados de treinamento
- Adição de suporte para mais idiomas
- Implementação de um sistema de notificações para feedbacks críticos

## 🤝 Contribuindo

Contribuições são bem-vindas! Se você tem uma sugestão para melhorar isso, por favor, siga estes passos:

1. Faça um fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Faça commit de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

Desenvolvido por [Gabriel Lara](https://github.com/gabrielbr619)
