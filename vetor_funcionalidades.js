import {question} from "readline-sync"
export function alinhar_menu(strings_menu){
    let menu = ""
    let index = 0

    for (let texto of strings_menu){
        index ++
        menu += index < 10? " " + index + " > " + texto + "\n" : index + " > " + texto + "\n" 
    }

    console.log(menu)

    return menu
}