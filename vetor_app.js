import * as v_utils from "./vetor_utils.js";
import * as v_func from "./vetor_funcionalidades.js"

function main(){
    let lista = [];

    const [menu_strings, menu_strings2, menu_strings3] = v_utils.retornar_menu_strings();

    const [menu, index_list] = v_func.alinhar_menu(menu_strings);
    const [menu2, index_list2] = v_func.alinhar_menu(menu_strings2);
    const [menu3, index_list3] = v_func.alinhar_menu(menu_strings3);

    let menu_carregado1 = v_utils.carregar_menu(menu);
    let menu_carregado2 = v_utils.carregar_menu(menu2);
    let menu_carregado3 = v_utils.carregar_menu(menu3);

    let option = v_func.show_menu(menu_carregado1, index_list);

    // loop para pedir que a opção 1 seja carregada primeiro, para impedir operações com vetores vazios
    while (option != 1){
        option = v_utils.get_number("Você deve carregar o vetor inicialmente! Escolha a opção 1: ")  ;
    }

    while (option !== 16){
        if (option === 1){
            v_utils.clear_screen();
            // inicializa novo menu e pede as características para a criação do vetor
            let option_menu2 = v_func.show_menu(menu_carregado2, index_list2);
            lista = v_func.inicializar_vetor_numerico(option_menu2, lista);
    
        }else if (option === 2) {
            // mostra o vetor e todos seus valores
            v_utils.show_list(lista);

        } else if (option === 3){
            // reseta vetor (pede valor número padrão)
            lista = v_func.retornar_vetor_resetado(lista);
             
        } else if (option === 4){
            // mostra o comprimento do vetor
            v_utils.show_length(lista);

        } else if (option === 5){
            // maior e menor valores do vetor
            v_func.retornar_maior_e_menor(lista);

        } else if (option === 6){
            // soma todos os valores do vetor
            v_func.retornar_somatorio_dos_valores(lista);

        } else if (option === 7){
            // media dos valores do vetor
            v_func.retornar_media(lista);

        } else if (option === 8){
            // valores positivos e quantidades
            v_func.retornar_positivos(lista);
        
        } else if (option === 9){
            // valores negativos e quantidades
            v_func.retornar_lista_negativos(lista);

        } else if (option === 10){
            // inicializa novo menu com operações para atualização do vetor
            v_utils.clear_screen();
            let option_menu3 = v_func.show_menu(menu_carregado3, index_list3);
            v_func.atualizar_valores(option_menu3, lista);

        } else if (option === 11){
            // adicionar valores
            v_func.adicionar_valores(lista)

        } else if (option === 12){
            // remover itens por valor exato
            v_func.remover_itens_p_valor_exato(lista)

        } else if (option === 13){
            // remover itens por posição
            v_func.remover_itens_p_posicao(lista)
            
        } else if (option === 14){
            // editar valores específico por posição
            v_func.editar_valores_especificos_p_posicao(lista)

        } else if (option === 15){
            v_func.salvar_arquivo(lista)
        }
        // inicializa o menu depois da operação escolhida
        v_utils.enter_to_continue();
        v_utils.clear_screen();
        option = v_func.show_menu(menu_carregado1, index_list);
    }
}
main()