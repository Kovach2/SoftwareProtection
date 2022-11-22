import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";


// Styles
import classNames from 'classnames';
import lr4 from '../styles/lr4.module.css'
import style from '../styles/style.module.css'


// Img
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";
import PageHead from "../components/head";

function clear(){
    let result = document.querySelector(".lr4_input_lr4__yKvgv")
    result.value = ""
    let text = document.querySelector(".lr4_cows_text__msMwF")
    text.innerHTML = "Коров - 0           "
    text.innerHTML += "Быков - 0"
}

var number = 0;

function startGame(){
    number = Math.floor((Math.random() * (9999 - 1000 + 1)) + 1000)
    let input = document.querySelector(".lr4_input_lr4_cows__EjeBs")
    input.value = ""
    let text = document.querySelector(".lr4_cows_text__msMwF")
    text.innerHTML = "Коров - 0           "
    text.innerHTML += "Быков - 0"
}


let zadanie1 = function (){
    let first = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    let second = [-3, 0, 6, 9, 12, 152]
    let fifth = [-30, 10, 63, 59, 120, 175]
    let sixth = ["1", "1^-1", "1^-2", "1^-3", "1^-4", "1^-5", "1^-6", "1^-7", "1^-8", "1^-9", "1^-10", "1^-11", "1^-12", "1^-13", "1^-14", "1^-15", "1^-16"]
    let str = ""
    let result = document.querySelector(".lr4_input_lr4__yKvgv")
    function returnFor1_2_5_6(arr){

        for (let i = 0; i < 10; i++) {
            str += arr[Math.floor(Math.random() * arr.length)] + "  "
        }
        result.value = str
    }

    function thirdReturn(){
        let a = 3.0;
        let b = 12.0;
        for (let i = 0; i < 10; i++) {
            let x =  a + (Math.random() * ((b - a) + 1));
            str += x.toFixed(2) + "  "
        }
        result.value = str
    }

    function fourthReturn(){
        let arr = []
        for (let i = -2.3; i < 10.7; i += 0.1) {
            arr.push(i)
        }
        for (let i = 0; i < 10; i++) {
            str += arr[Math.floor(Math.random() * arr.length)].toFixed(2) + "  "
        }
        result.value = str
    }

    let cheackBoxes = document.querySelectorAll(".lr4_input_radio__Jess4")
    if(cheackBoxes[0].checked == true){
        returnFor1_2_5_6(first)
    }else if(cheackBoxes[1].checked == true){
        returnFor1_2_5_6(second)
    }else if(cheackBoxes[2].checked == true){
        thirdReturn()
    }else if(cheackBoxes[3].checked == true){
        fourthReturn()
    }else if(cheackBoxes[4].checked == true){
        returnFor1_2_5_6(fifth)
    }else if(cheackBoxes[5].checked == true){
        returnFor1_2_5_6(sixth)
    }


}

let zadanie2 = function (){

    let input = document.querySelector(".lr4_input_lr4_cows__EjeBs")
    let inputNumber = input.value
    let bull = 0
    let cow = 0

    let text = document.querySelector(".lr4_cows_text__msMwF")
    // Проверка введенного числа
    if(inputNumber == number.toString()){
        input.value = "Ура ты выйгралллл"
        text.innerHTML = "Коров - 4           "
        text.innerHTML += "Быков - 4"
    }else{
        if(inputNumber.length < 4 || inputNumber.length > 4){
            alert("Ошибка")
            input.value = ""
            return 0
        }else{
            for (let i = 0; i < inputNumber.length; i++) {
                if(isNaN(Number(inputNumber[i]))){
                    alert("Ошибка")
                    input.value = ""
                    return 0
                }
            }
        }

        console.log(number)

        for (let i = 0; i < number.toString().length; i++) {
            for (let j = 0; j < input.value.length; j++) {
                if (Number(number.toString()[i]) == Number(input.value[j])) {
                    bull += 1
                    console.log("Бык")
                    if (number.toString().indexOf(number.toString()[i]) == input.value.indexOf(input.value[j])) {
                        console.log((number.toString())[i].indexOf() + "====" + (input.value)[j].indexOf())
                        cow += 1
                        console.log("корова")
                    }
                    break
                }
            }
        }

        console.log(text)
        text.innerHTML = "Коров - " + cow + "           "
        text.innerHTML += "</br>"
        text.innerHTML += "Быков - " + bull
        console.log("Числа угаданы - " + bull)
        console.log("Числа на своем месте - " + cow)
    }
}

export default function LR2() {
    return (
        <div className={style.wrapper}>
            <PageHead title={"Лабораторная работа 4"}/>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <Link href={"/"} className={classNames(style.button, style.button_header)}>
                        На главную
                    </Link>
                    <div className={style.header_logo}>
                        <Image className={style.Biceps} src={leftBiceps} width={80} height={80}/>
                        <div className={style.header_logotext}>54 тп</div>
                        <Image className={style.Biceps} src={rightBiceps} width={80} height={80}/>
                    </div>
                    <Link href={"#"} className={classNames(style.button, style.button_header)}>
                        Документация
                    </Link>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.lab_title}>Лабораторная работа №4</div>
                <div className={style.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className={lr4.ex1}>
                        <div className={lr4.ex1_inner}>
                            <form className={lr4.form}>
                                <div className={lr4.radio_group}>
                                    <input className={lr4.input_radio} type="radio" id="option-one" name="selector" onClick={clear}/>
                                    <label className={lr4.label_radio} htmlFor="option-one">От 3 до 12, целые.</label>


                                    <input className={lr4.input_radio} type="radio" id="option-two" name="selector" onClick={clear}/>
                                    <label className={lr4.label_radio} htmlFor="option-two">Из множества (–3, 0, 6, 9, 12, 15). </label>


                                    <input className={lr4.input_radio} type="radio" id="option-three" name="selector" onClick={clear}/>
                                    <label className={lr4.label_radio} htmlFor="option-three">От 3 до 12, вещественные.</label>


                                    <input className={lr4.input_radio} type="radio" id="option-four" name="selector" onClick={clear}/>
                                    <label className={lr4.label_radio} htmlFor="option-four">От –2,3 до 10,7 с шагом 0,1.</label>


                                    <input className={lr4.input_radio} type="radio" id="option-five" name="selector" onClick={clear}/>
                                    <label className={lr4.label_radio} htmlFor="option-five">Из множества (30; 10; 63; 59; 120; 175).</label>


                                    <input className={lr4.input_radio} type="radio" id="option-six" name="selector" onClick={clear}/>
                                    <label className={lr4.label_radio} htmlFor="option-six">Из множества (1; 0,1; 0,01; …; 10–15).</label>
                                </div>
                            </form>
                            <input type="text" placeholder="Результат" className={classNames(style.input, lr4.input_lr4)} id="output" readOnly/>
                            <button className={classNames(style.button, style.button_click, lr4.button_click)} onClick={zadanie1}
                                    id="outputButton">
                                Сгенерироваться
                            </button>
                        </div>
                    </div>
                    <hr className={style.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <div className={lr4.ex2}>
                        <lr2 className={lr4.ex2_inner}>
                            <div className={lr4.main_win}>
                                <input type="text" placeholder="Ввод цифры" className={classNames(style.input, lr4.input_lr4, lr4.input_lr4_cows)} id="output"/>
                                <div className={lr4.buttons}>
                                    <button className={classNames(style.button, style.button_click, lr4.button_click)} onClick={zadanie2}
                                            id="outputButton">
                                        Сгенерироваться
                                    </button>
                                    <div className={lr4.cows_text}>
                                        <div className={lr4.cows}>Коров - 0                 </div>
                                        <div className={lr4.buls}>Быков - 0</div>
                                    </div>
                                    <button className={classNames(style.button, style.button_click, lr4.button_click)} onClick={startGame}
                                            id="outputButton">
                                        Начать игру
                                    </button>
                                </div>
                            </div>

                        </lr2>
                    </div>
                </div>
            </main>
        </div>
    )
}
