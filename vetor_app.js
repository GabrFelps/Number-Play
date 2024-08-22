import { get_number, clear_screen, pedir_caracteristicas_do_vetor, carregar_menu, get_number_in_range} from "./vetor_utils.js";
import { alinhar_menu, validar_opcao, retornar_lista_automaticos, retornar_lista_manuais} from "./vetor_funcionalidades.js";

function main(){
    const menu_strings = [
    "Inicializar Vetor Numérico", 
    "Mostrar todos os valores", 
    "Resetar Vetor", 
    "Ver quantidade de itens no vetor", 
    "Ver menor e maior valores e suas posições", 
    "Somatório dos valores", 
    "Média dos valores", 
    "Valores positivos e suas quantidades", 
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
    "Gerar vetor manualmente"

    ];

    const menu_strings3 = [
    "Multiplicar por um valor",
    "Elevar a um valor",
    "Reduzir a uma fração",
    "Substituir valores negativos por um número aleatório de um faixa",
    "Ordenar valores",
    "Embaralhar valores"
    ];

    const [menu, index_list] = alinhar_menu(menu_strings);
    const [menu2, index_list2] = alinhar_menu(menu_strings2);
    const menu3 = alinhar_menu(menu_strings3);

    let menu_carregado1 = carregar_menu(menu);
    let menu_carregado2 = carregar_menu(menu2);
    let menu_carregado3 = carregar_menu(menu3);
    console.log(menu_carregado1);

    let option = get_number("Qual opção você deseja escolher?: ");
    option = validar_opcao(index_list, option);

    if (option === 1){
        clear_screen();
        console.log(menu_carregado2);
        
        let option_menu2 = get_number("Qual opção você deseja: ");
        option_menu2 = validar_opcao(index_list2, option_menu2);

        const [comprimento, minimo, maximo] = pedir_caracteristicas_do_vetor();

        if (option_menu2 === 1){
            let lista_automaticos = retornar_lista_automaticos(comprimento, minimo, maximo);
            console.log(lista_automaticos)

            
        } else {
            let lista_manuais = retornar_lista_manuais(comprimento, minimo, maximo)
            console.log(lista_manuais)
   
}       
}
}

main()