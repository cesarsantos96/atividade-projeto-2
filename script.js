const form = document.querySelector("#form-contato");
const tabela = document.querySelector("#tabela-contatos tbody");

function adicionarLinha(nome, telefone) {
    const linha = document.createElement("tr");
    const colunaNome = document.createElement("td");
    const colunaTelefone = document.createElement("td");

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaTelefone);

    tabela.appendChild(linha);
}

function validarTelefone(telefone) {
    const regex = /^\d{2}\s\d{5}-\d{4}$/;
    return regex.test(telefone);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const telefone = document.querySelector("#telefone").value;

    if (!validarTelefone(telefone)) {
        alert("Número de telefone inválido. O número deve estar no formato ## #####-####");
        return;
    }

    adicionarLinha(nome, telefone);

    form.reset();
});
