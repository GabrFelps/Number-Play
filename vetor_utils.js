import { question } from "readline-sync";
export function get_number(mensagem){
    return Number(question(mensagem));
}

export function clear_screen(){
    return console.clear();
}

export function pedir_caracteristicas_do_vetor(){
    let comprimento = get_number("Qual o tamanho do vetor de números que você deseja?: ");
    let maximo = get_number("Qual deve ser o maior número do vetor?: ");
    let minimo = get_number("Qual deve ser o menor número do vetor?: ");

    while (maximo < minimo){
        console.log("O número informado é maior que o limite máximo! substitua o maior número")
        minimo =  get_number("Qual deve ser o menor número do vetor?: ");
    }
    
    return [comprimento, minimo, maximo];
}

export function get_random_number_in_range(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

export function carregar_menu(menu){
    let menu_carregado = 
    `#----------------- PlayNumbers ----------------#
${menu}
------------------------------------------------`;
    return menu_carregado
}

export function get_number_in_range(mensagem, minimo, maximo){
    let numero = get_number(mensagem)
    while (numero < minimo || numero > maximo){
        numero = get_number("O número informado não corresponde à faixa escolhida! Insira outro número: ")
    }
    return numero
}
