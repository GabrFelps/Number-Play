import {alinhar_menu} from "../PlayNumbers/vetor_funcionalidades.js"

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
    ]

    const menu = alinhar_menu(menu_strings)
    console.log(`#-------------- PlayNumbers -------------#
${menu}
------------------------------------------
    `
    )
    
}

main()

