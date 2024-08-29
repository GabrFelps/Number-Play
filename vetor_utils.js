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
        console.log("O número informado é maior que o limite máximo! substitua o menor número")
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

export function enter_to_continue(){
    return question("Enter to continue...") 
}

export function show_maior_menor(maior, menor, posicao_maior, posicao_menor){
    console.log(`O maior valor do vetor é: ${maior} e ele está localizado na posição ${posicao_maior}
O menor valor do vetor é: ${menor} e ele está localizado na posição ${posicao_menor}`)
}

export function show_somatorio(somatorio){
    console.log(`O somátorio dos valores do vetor é ${somatorio}`)
}

export function show_list(lista){
    console.log(`lista > ${lista}`)
}

export function show_length(lista){
    console.log(`o vetor tem comprimento de tamanho ${lista.length}`)
}

export function show_media(media){
    console.log(`A média dos valores do vetor é: ${media}`)
}

export function get_text(msg){
    return question(msg)
}

export function show_lista_positivos(lista_positivos, qtd_positivos){
    console.log(`Existem ${qtd_positivos} números positivos, que são: ${lista_positivos}`)
}

export function show_lista_negativos(lista_negativos, qtd_negativos){
    console.log(`Existem ${qtd_negativos} números negativos, que são: ${lista_negativos}`)
}

export function show_lista_ordenada(lista){
    console.log(`Lista ordenada > ${lista}`)
}

export function retornar_menu_strings(){
    const menu_strings = [
        "Inicializar Vetor Numérico", 
        "Mostrar todos os valores", 
        "Resetar Vetor", 
        "Ver quantidade de itens no vetor", 
        "Ver menor e maior valores e suas posições", 
        "Somatório dos valores", 
        "Média dos valores", 
        "Valores positivos e suas quantidades", 
        "Valores negativos e suas quantidades",
        "Atulizar valores", 
        "Adicionar Valores", 
        "Remover Itens por valor exato", 
        "Remover itens por posição", 
        "Editar valor específico por posição", 
        "Salvar valores em arquivo", 
        "Sair"
        ];
    
        const menu_strings2 = [
        "Gerar vetor automaticamente",
        "Gerar vetor manualmente",
        "Ler arquivo"
        ];
    
        const menu_strings3 = [
        "Multiplicar por um valor",
        "Elevar a um valor",
        "Reduzir a uma fração",
        "Substituir valores negativos por um número aleatório de um faixa",
        "Ordenar valores",
        "Embaralhar valores"
        ];
    return [menu_strings, menu_strings2, menu_strings3]
}