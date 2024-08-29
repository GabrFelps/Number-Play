import { get_random_number_in_range, get_number, get_number_in_range, show_maior_menor, show_somatorio, pedir_caracteristicas_do_vetor, show_media, show_lista_positivos, show_lista_negativos, show_lista_ordenada, get_text } from "./vetor_utils.js"
import * as fs from 'fs';

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

export function ler_arquivo_como_lista(caminho_do_arquivo) {
    var dados = fs.readFileSync(caminho_do_arquivo, 'utf8');
    // Converte o conteúdo do arquivo em uma lista
    // Aqui assumimos que cada linha do arquivo deve ser um item da lista
    var linhas = dados.split('\n');
    var lista = [];
    
    // Itera sobre cada linha e adiciona à lista, removendo espaços em branco extras
    for (var i = 0; i < linhas.length; i++) {
        var item = linhas[i];
        if (item.length > 0) {
            parseInt(item)
            lista.push(item);
        }
    }

    return lista;
}

export function validar_opcao(lista_opcoes, opcao){
    while (!lista_opcoes.includes(opcao)){
        opcao = get_number("Essa opção é inválida, digite novamente: ");

    }
    return opcao

}

export function show_menu(menu, index_list){
    console.log(menu)
    let option = get_number("Qual opção você deseja escolher?: ");
    option = validar_opcao(index_list, option);

    return option
}

export function resetar_vetor(lista, valor_padrao){
    // percorre os indexs da lista e atualiza os valores deles pro valor padrão
    for (let number in lista){
        lista[number] = valor_padrao
    }
    return lista
}

export function retornar_maior_e_menor(lista){
    let maior = lista[0]
    let menor = lista[0]
    let posicao_maior = 0
    let posicao_menor = 0

    for (let index in lista){
        if (lista[index] > maior){
            maior = lista[index]
            posicao_maior = index + 1
        }
        if (lista[index] < menor){
            menor = lista[index]
            posicao_menor = index + 1
        }

    }
    show_maior_menor(maior, menor, posicao_maior, posicao_menor)
}

export function retornar_somatorio_dos_valores(lista){
    let soma_valores_vetor = 0
    for (let number of lista){
        soma_valores_vetor += number
    }
    show_somatorio(soma_valores_vetor)
    return soma_valores_vetor
}

export function inicializar_vetor_numerico(option_menu2, lista){
    if (option_menu2 === 1){
        const [comprimento, minimo, maximo] = pedir_caracteristicas_do_vetor();
        lista = retornar_lista_automaticos(comprimento, minimo, maximo);
    
    } else if (option_menu2 === 2) {
        const [comprimento, minimo, maximo] = pedir_caracteristicas_do_vetor();
        lista = retornar_lista_manuais(comprimento, minimo, maximo)

    } else {
        let arquivo = get_text("Insira o nome do aquivo para ler: ")
        let caminho_do_arquivo = `./${arquivo}.txt`

        lista = ler_arquivo_como_lista(caminho_do_arquivo)
    }
    return lista
}

export function retornar_media(lista){
    let somatorio = retornar_somatorio_dos_valores(lista)
    let media = somatorio / lista.length
    show_media(media)
}

export function retornar_vetor_resetado(lista){
    let valor_padrao = get_number("Escreva um valor padrão da lista para resetar o vetor: ")
    valor_padrao = validar_opcao(lista, valor_padrao)
    lista = resetar_vetor(lista, valor_padrao)
    return lista
}

export function retornar_positivos(lista){
    let qtd_positivos = 0
    let lista_positivos = []
    for (let number of lista){
        if (number >= 0){
            qtd_positivos ++
            lista_positivos.push(number)
        }
    }
    show_lista_positivos(lista_positivos, qtd_positivos)
}

export function retornar_lista_negativos(lista){
    let qtd_negativos = 0
    let lista_negativos = []
    for (let number of lista){
        if (number < 0){
            qtd_negativos ++
            lista_negativos.push(number)
        }
    }
    show_lista_negativos(lista_negativos, qtd_negativos)
}

export function sort_do_felps(lista) {
    for (let i = 1; i < lista.length; i++) {
        //inicia-se com o segundo valor da lista, para comparâ-lo com o valor a sua esquerda
        let atual = lista[i];
        // o j atribui o valor do index anterior da lista
        let j = i - 1;

        // [3, 4, 2, 1, 6]
        // [3, 4, 4, 1, 6]
        // [2, 3, 4, 1, 6]
        // [1, 2, 3, 4, 6]

        // Move os elementos maiores que o 'atual' uma posição para a frente
        // enquanto o elemento atual for menor que o anterior, o anterior passa uma posição pra frente
        while (j >= 0 && lista[j] > atual) {
            lista[j + 1] = lista[j];
            j--;
        }

        // quando o elemento atual deixar de ser menor do que o anterior, o valor atual é inserido em sua posição correta
        // se o valor não entrar no while, ele continua na mesma posição
        lista[j + 1] = atual;
    }
    show_lista_ordenada(lista)

}

export function atualizar_valores(option_menu3, lista){
    if (option_menu3 === 1 ){
        let valor = get_number("Insira o valor a ser multiplicado: ")
        for (let numbers in lista){
            lista[numbers] = lista[numbers] * valor
        }
        console.log(lista)
    } else if (option_menu3 === 2){
        let valor = get_number("Insira o valor a ser elevado: ")
        for (let number in lista){
            lista[number] = lista[number] ** valor
        }
        console.log(lista)
    } else if (option_menu3 === 3){
        let fracao = get_text("Insira a fração(ex: 1/2): ")
        let split_fracao = fracao.split("/")
        let numerador = split_fracao[0]
        let denominador = split_fracao[1]
        for (let number in lista){
            lista[number] = (lista[number] * numerador) / denominador
        } 
        console.log(lista)
    } else if (option_menu3 === 4){
        let valor_maximo = get_number("Insira o valor maximo para substituir: ")
        let valor_minimo = get_number("Insira o valor minimo para substituir: ")

        while (valor_maximo < valor_minimo){
            console.log("O número informado é maior que o limite máximo! substitua o menor número: ")
            valor_minimo = get_number("Qual deve ser o menor número?: ");
        }

        for (let number in lista){
            if (lista[number] < 0){
                lista[number] = get_number_in_range("insira o valor para substituir: ", valor_minimo, valor_maximo)
            }
        } 
    } else if (option_menu3 === 5){
        sort_do_felps(lista)
    } else if (option_menu3 === 6){
        // embaralhar valores 
        for (let number in lista){
            lista[number] = lista[get_random_number_in_range(0, lista.length - 1)]
        }
    }
}

export function remover_itens_p_valor_exato(lista){
    let valor_a_ser_removido = get_number("Insira o valor que você quer remover: ");
    validar_opcao(lista, valor_a_ser_removido);

    for (let index = 0; index < lista.length; index++){
        if (valor_a_ser_removido == lista[index]){
            lista.splice(index, 1);
            index--
        }
    }
}

export function adicionar_valores(lista){
    let qtd_valores = get_number("Quantos valores você deseja adicionar?: ");
    for (let index = 1; index <= qtd_valores; index++){
        lista.push(get_number(`Insira o ${index}° valor à ser adicionado: `));
    }
}

export function remover_itens_p_posicao(lista){
    let posicao_remover = get_number("Insira a posição do elemento que você quer remover da lista: ");
    validar_opcao(lista, posicao_remover);
    lista.splice(posicao_remover - 1, 1);
}

export function editar_valores_especificos_p_posicao(lista){
    let valor_a_ser_removido = get_number("Insira o valor que você quer remover: ");
    validar_opcao(lista, valor_a_ser_removido);
    let posicao_remover = get_number("Insira a posição do elemento que você quer remover da lista: ");
    validar_opcao(lista, posicao_remover);

    if ( lista[posicao_remover - 1] !== valor_a_ser_removido){
        let posicao_remover = get_number("Insira a posição do elemento que você quer remover da lista: ");
        validar_opcao(lista, posicao_remover);
    }

    lista.splice(posicao_remover - 1, 1);
    
}

export function salvar_arquivo(lista){
    const nome_arquivo = get_text("insira o nome do aquivo para criar e armazenar o vetor: ")
    fs.writeFileSync(`${nome_arquivo}.txt`, JSON.stringify(lista)); 
    console.log("Arquivo salvo com sucesso!\n"); 
    console.log("O arquivo possui o seguinte conteúdo: :"); 
    console.log(fs.readFileSync(`${nome_arquivo}.txt`, "utf8")); 

}