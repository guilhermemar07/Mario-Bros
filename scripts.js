/* Variáveis:  um espaço de memória que vc reserva e pode guardar o que quiser lá dentro
    3 Jeitos de criar uma variável
    - var / jeito antigo - nao use
    - let -> você pode alterar o valor dps
    - const -> constante

    Funções: um trecho de código que, só é executado quando é chamado

*/

const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-negra")

function mostrarform() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderform() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}