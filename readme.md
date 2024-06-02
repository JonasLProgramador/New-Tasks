<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Gerenciador de Tarefas</h1>
    <img src='https://i.postimg.cc/y62rbZ01/Screenshot-20240602-153139.png'/>
    <p>Este é um simples gerenciador de tarefas que utiliza jQuery e consome a API do Todoist para gerenciar suas tarefas de forma eficiente. O projeto inclui funcionalidades para autenticar com o Todoist, adicionar novas tarefas, listar tarefas existentes e deletar tarefas.</p>
    <h2>Funcionalidades</h2>
    <ul>
        <li>Autenticação: Realiza autenticação com o Todoist usando OAuth 2.0.</li>
        <li>Adicionar Tarefas: Permite adicionar novas tarefas ao Todoist.</li>
        <li>Listar Tarefas: Lista todas as tarefas existentes no Todoist.</li>
        <li>Deletar Tarefas: Permite deletar tarefas do Todoist.</li>
        <li>Interface Simples: Interface de usuário simples e responsiva.</li>
    </ul>
    <h2>Pré-requisitos</h2>
    <p>Antes de iniciar, você precisará ter as seguintes ferramentas instaladas em sua máquina:</p>
    <ul>
        <li>Node.js</li>
        <li>Live Server (ou qualquer outro servidor web para desenvolvimento)</li>
    </ul>
    <h2>Configuração do Projeto</h2>
    <p>Clone o repositório:</p>
    <pre><code>git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
cd gerenciador-de-tarefas</code></pre>
    <p>Configure sua aplicação no Todoist Developer e obtenha seu Client ID e Client Secret.</p>
    <p>Atualize as variáveis <code>clientID</code>, <code>clientSecret</code> e <code>redirectURI</code> no arquivo <code>app.js</code>:</p>
    <pre><code>const clientID = 'seu_client_id';
const clientSecret = 'seu_client_secret';
const redirectURI = 'http://127.0.0.1:5500'; // URL do Live Server</code></pre>
    <h2>Executando a Aplicação</h2>
    <p>Inicie o Live Server (ou outro servidor web de sua preferência):</p>
    <pre><code>live-server</code></pre>
    <p>Abra seu navegador e navegue para <a href="http://127.0.0.1:5500">http://127.0.0.1:5500</a>.</p>
    <p>Clique no botão "Login com Todoist" para autenticar com sua conta do Todoist.</p>
    <p>Após a autenticação, adicione novas tarefas, visualize e delete tarefas conforme necessário.</p>
    <h2>Estrutura do Projeto</h2>
    <pre><code>.
├── src        
    ├── styles
        ├── home.css
        ├── about.css
    ├── app.js
    ├── pages
        ├── about.html
├── index.html       
└── README.md</code></pre>
    <p><code>index.html</code>: Contém a estrutura HTML  da pagina inicial da aplicação.</p>
    <p><code>pasta pages</code>: Contém todas estruturas HTML de outras páginas .</p>
    <p><code>pasta styles</code>: Contém todos estilos  de CSS para a aplicação.</p>
    <p><code>app.js</code>: Contém a lógica JavaScript para interação com a API do Todoist.</p>
    <h2>Uso</h2>
    <ul>
        <li>Login: Clique no botão "Login com Todoist" para iniciar o processo de autenticação.</li>
        <li>Adicionar Tarefa: Após o login, digite uma nova tarefa no campo de entrada e clique em "Adicionar".</li>
        <li>Listar Tarefas: As tarefas serão listadas automaticamente após o login.</li>
        <li>Deletar Tarefa: Clique no "x" ao lado de uma tarefa para deletá-la.</li>
    </ul
    <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li>jQuery: Para manipulação de DOM e AJAX.</li>
        <li>Todoist API: Para gerenciar tarefas.</li>
    </ul>
    <h2>Contribuição</h2>
    <p>Sinta-se à vontade para contribuir com o projeto. Para isso, siga os passos abaixo:</p>
    <ol>
        <li>Faça um fork do projeto.</li>
        <li>Crie uma nova branch (git checkout -b feature/feature-name).</li>
        <li>Commit suas mudanças (git commit -am 'Add some feature').</li>
        <li>Push para a branch (git push origin feature/feature-name).</li>
        <li>Crie um novo Pull Request.</li>
    </ol>
</body>
</html>
