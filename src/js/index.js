
const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("input, textarea");
const campoObrigatorio = document.querySelectorAll(".campo-obrigatorio");
const telefone = document.getElementById("telefone");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarCampos();
    validarTelefone(telefone);
});

const validarCampos = () => {
    inputs.forEach((input, index) => {
        input.value === "" ?
            (input.classList.add("campo-nao-preenchido"), campoObrigatorio[index].classList.add("nao-preenchido")) :
            (input.classList.remove("campo-nao-preenchido"), input.classList.add("campo-preenchido"), campoObrigatorio[index].classList.remove("nao-preenchido"));
    });
}

function validarTelefone(telefone) {
    var exp = /[0-9]{11}/;
    if (!exp.test(telefone.value)) {
        telefone.classList.add("campo-nao-preenchido"), campoObrigatorio[2].classList.add("nao-preenchido");
        alert('Número de Telefone Inválido!');
    }
}


