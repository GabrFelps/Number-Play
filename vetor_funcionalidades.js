import { get_random_number_in_range, get_number, get_number_in_range } from "./vetor_utils.js"
export function alinhar_menu(strings_menu){
    let menu = ""
    let index = 0
    let index_list = []

    for (let texto of strings_menu){
        index ++
        index_list.push(index)
        menu += index < 10? " " + index + " > " + texto + "\n" : index + " > " + texto + "\n" 
    }
    return [menu, index_list]
}

export function retornar_lista_automaticos(comprimento, minimo, maximo){
    let lista_automaticos = []
    for (let i = 0; i < comprimento; i++){
        lista_automaticos.push(get_random_number_in_range(minimo, maximo))
    }
    return lista_automaticos
}

export function retornar_lista_manuais(comprimento, minimo, maximo){
    let lista_manuais = []
    for (let i = 0; i < comprimento; i++){
        let numero_manual = get_number_in_range("Insira um número para o vetor: ", minimo, maximo)
        lista_manuais.push(numero_manual)
    }
    return lista_manuais
}

export function validar_opcao(lista_opcoes, opcao){
    while (!lista_opcoes.includes(opcao)){
        opcao = get_number("Essa opção é inválida, digite novamente: ");

    }
    return opcao

}