<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Gerenciador de Tarefas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
        }
        h1, h2 {
            color: #333;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <h1>Gerenciador de Tarefas</h1>
    <p>Este é um simples gerenciador de tarefas que utiliza jQuery e consome a API do Todoist para gerenciar suas tarefas de forma eficiente. O projeto inclui funcionalidades para autenticar com o Todoist, adicionar novas tarefas, listar tarefas existentes e deletar tarefas.</p>
    
    <h2>Funcionalidades</h2>
    <ul>
        <li><strong>Autenticação</strong>: Realiza autenticação com o Todoist usando OAuth 2.0.</li>
        <li><strong>Adicionar Tarefas</strong>: Permite adicionar novas tarefas ao Todoist.</li>
        <li><strong>Listar Tarefas</strong>: Lista todas as tarefas existentes no Todoist.</li>
        <li><strong>Deletar Tarefas</strong>: Permite deletar tarefas do Todoist.</li>
        <li><strong>Interface Simples</strong>: Interface de usuário simples e responsiva.</li>
    </ul>
    
    <h2>Pré-requisitos</h2>
    <p>Antes de iniciar, você precisará ter as seguintes ferramentas instaladas em sua máquina:</p>
    <ul>
        <li><a href="https://nodejs.org/en/">Node.js</a></li>
        <li><a href="https://www.npmjs.com/package/live-server">Live Server</a> (ou qualquer outro servidor web para desenvolvimento)</li>
    </ul>
    
    <h2>Configuração do Projeto</h2>
    <ol>
        <li>Clone o repositório:
            <pre><code>git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
cd gerenciador-de-tarefas</code></pre>
        </li>
        <li>Configure sua aplicação no <a href="https://developer.todoist.com/">Todoist Developer</a> e obtenha seu <code>Client ID</code> e <code>Client Secret</code>.</li>
        <li>Atualize as variáveis <code>clientID</code>, <code>clientSecret</code> e <code>redirectURI</code> no arquivo <code>app.js</code>:
            <pre><code>const clientID = 'seu_client_id';
const clientSecret = 'seu_client_secret';
const redirectURI = 'http://127.0.0.1:5500'; // URL do Live Server</code></pre>
        </li>
    </ol>
    
    <h2>Executando a Aplicação</h2>
    <ol>
        <li>Inicie o Live Server (ou outro servidor web de sua preferência):
            <pre><code>live-server</code></pre>
        </li>
        <li>Abra seu navegador e navegue para <code>http://127.0.0.1:5500</code>.</li>
        <li>Clique no botão "Login com Todoist" para autenticar com sua conta do Todoist.</li>
        <li>Após a autenticação, adicione novas tarefas, visualize e delete tarefas conforme necessário.</li>
    </ol>
    
    <h2>Estrutura do Projeto</h2>
    <pre><code>.
├── index.html
├── styles.css
├── app.js
└── README.md</code></pre>
    <ul>
        <li><code>index.html</code>: Contém a estrutura HTML da aplicação.</li>
        <li><code>styles.css</code>: Contém o estilo CSS para a aplicação.</li>
        <li><code>app.js</code>: Contém a lógica JavaScript para interação com a API do Todoist.</li>
    </ul>
    
    <h2>Uso</h2>
    <ul>
        <li><strong>Login</strong>: Clique no botão "Login com Todoist" para iniciar o processo de autenticação.</li>
        <li><strong>Adicionar Tarefa</strong>: Após o login, digite uma nova tarefa no campo de entrada e clique em "Adicionar".</li>
        <li><strong>Listar Tarefas</strong>: As tarefas serão listadas automaticamente após o login.</li>
        <li><strong>Deletar Tarefa</strong>: Clique no "x" ao lado de uma tarefa para deletá-la.</li>
    </ul>
    
    <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>jQuery</strong>: Para manipulação de DOM e AJAX.</li>
        <li><strong>Todoist API</strong>: Para gerenciar tarefas.</li>
    </ul>
    
    <h2>Contribuição</h2>
    <p>Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:</p>
    <ol>
        <li>Faça um fork do projeto.</li>
        <li>Crie uma nova branch (<code>git checkout -b feature/feature-name</code>).</li>
        <li>Commit suas mudanças (<code>git commit -am 'Add some feature'</code>).</li>
        <li>Push para a branch (<code>git push origin feature/feature-name</code>).</li>
        <li>Crie um novo Pull Request.</li>
    </ol>
    
    <h2>Licença</h2>
    <p>Este projeto está licenciado sob a MIT License. Veja o arquivo <code>LICENSE</code> para mais detalhes.</p>
</body>
</html>
