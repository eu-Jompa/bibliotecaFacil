function mostrarUsuarios() {
    document.getElementById('conteudo').innerHTML = `
        <h2><i class="fas fa-users"></i> Usuários Cadastrados</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <!-- Dados dos usuários podem ser preenchidos dinamicamente aqui -->
                <tr>
                    <td>1</td>
                    <td>Usuário 1</td>
                    <td>usuario1@email.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Usuário 2</td>
                    <td>usuario2@email.com</td>
                </tr>
            </tbody>
        </table>
    `;
}

function mostrarLivros() {
    document.getElementById('conteudo').innerHTML = `
        <h2><i class="fas fa-book"></i> Livros Cadastrados</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                </tr>
            </thead>
            <tbody>
                <!-- Dados dos livros podem ser preenchidos dinamicamente aqui -->
                <tr>
                    <td>1</td>
                    <td>Livro 1</td>
                    <td>Autor 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Livro 2</td>
                    <td>Autor 2</td>
                </tr>
            </tbody>
        </table>
    `;
}

function mostrarTotalVendas() {
    document.getElementById('conteudo').innerHTML = `
        <h2><i class="fas fa-chart-bar"></i> Total de Vendas</h2>
        <p>O total de vendas é: R$ 10.000,00</p>
    `;
}