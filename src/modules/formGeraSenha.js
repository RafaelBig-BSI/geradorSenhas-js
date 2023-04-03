import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdeCaracteres = document.querySelector('.qtde-caracteres');
const checkMaiusculas = document.querySelector('.chk-maisculas');
const checkMinusculas = document.querySelector('.chk-minusculas');
const checkNumeros = document.querySelector('.chk-numeros');
const checkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qtdeCaracteres.value, 
        checkMaiusculas.checked,
        checkMinusculas.checked,
        checkNumeros.checked,
        checkSimbolos.checked);

    return senha || 'Nada selecionado.';
}