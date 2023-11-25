function ativarModoVisualizacao() {
    document.getElementById('visualizacao').classList.add('mostrar');
    document.getElementById('edicao').classList.remove('mostrar');
}

function ativarModoEdicao() {
    document.getElementById('edicao').classList.add('mostrar');
    document.getElementById('visualizacao').classList.remove('mostrar');
}

function mostrarImagemSelecionada(input) {
    const avatar = document.getElementById('avatar');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            avatar.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function salvarPerfil() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const endereco = document.getElementById('endereco').value;

    document.getElementById('dadosNome').innerText = nome;
    document.getElementById('dadosSobrenome').innerText = sobrenome;
    document.getElementById('dadosEmail').innerText = email;
    document.getElementById('dadosDataNascimento').innerText = dataNascimento;
    document.getElementById('dadosEndereco').innerText = endereco;

    // Atualiza a imagem no modo de visualização com a imagem selecionada
    const avatar = document.getElementById('avatar');
    const uploadAvatar = document.getElementById('uploadAvatar');
    if (uploadAvatar.files.length > 0) {
        const file = uploadAvatar.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            avatar.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }

    ativarModoVisualizacao();
}