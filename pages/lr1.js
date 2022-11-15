import styles from '../styles/Lrs.module.css'
import style from "../styles/style.module.css";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script"
import Head from "next/head";

import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";

import classNames from "classnames";

// Задание 1

let symbols = ""

function PTV(){
    let arr = document.querySelectorAll(".input");
    let p = arr[0].querySelector("input").value;
    let v = arr[1].querySelector("input").value;
    let t = arr[2].querySelector("input").value;
    if(isNaN(v*t/p) || Number.isInteger(p) || Number.isInteger(v) || Number.isInteger(t) || p == "" || v =="" || t ==""){
        alert("Проверьте данные при вводе PVT")
    }else{
        arr[3].querySelector("input").value = (v*t/p).toFixed(3)
    }
}

function formPassSymbols(){
    let checkboxs = document.querySelectorAll(".checkbox")
    let symbolsArr = ["абвгдеёжзийклмнопрстуфхцчшщъыьэюя","АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ","abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789",'!"#$%&()*+,-./:;<=>?@[\]^_`{|}~']
    symbols = ""
    if(checkboxs[0].checked){
        symbols += symbolsArr[0]
    }
    if(checkboxs[1].checked){
        symbols += symbolsArr[1]
    }
    if(checkboxs[2].checked){
        symbols += symbolsArr[2]
    }
    if(checkboxs[3].checked){
        symbols += symbolsArr[3]
    }
    if(checkboxs[4].checked){
        symbols += symbolsArr[4]
    }
    if(checkboxs[5].checked){
        symbols += symbolsArr[5]
    }
}

function generateRandomPass(){
    let passwordLine = document.querySelector(".password_line")
    let arr = document.querySelectorAll(".input");
    let pass = ""
    let length = Number(arr[4].querySelector("input").value);

    if(Number.isInteger(length) && length != 0 && 6 <= length && length <= 18 && symbols.length != 0)
    {
        for (let i = 0; i < length; i++) {
            pass += symbols[Math.floor(Math.random() * symbols.length)]
        }

    }else{
        alert("Ошибка")
    }
    passwordLine.querySelector("input").value = pass
}

function copyPassword(){
    let passwordLine = document.querySelector(".password_line")
    let copyText = passwordLine.querySelector("input")
    if (copyText != 0){
        copyText.select()
        document.execCommand("copy")
    }
}

// Задание 2

let button = document.querySelector("#generatePassword")
let buttonCopy = document.getElementById("generatePasswordCopy")
let conditionDescription = document.querySelector(".ex_condition--description")
let select = document.querySelector(".choice_variat")
let lineGenerate = document.querySelector(".ex_complete").querySelector("input")

select.addEventListener("change", function(){
    if(select.value == 11){
        conditionDescription.innerHTML = "1. b1,b2...b1+q  - случайные символы из множества {!,”,#,$,%,&,’,(,),*}, где  Q=Nmod5. <br>2. Оставшиеся символы пароля, кроме b9 , - случайные малые буквы русские алфавита. <br>3. b9   - случайная цифра."
    }else{
        conditionDescription.innerHTML = "1.   - случайные заглавные буквы английского алфавита.<br>2.b3 = N^2 mod 10  (где mod 10 – остаток от деления числа на 10).<br>3.b4 - случайная цифра.<br>4.b5 - случайный символ из множества {!,”,#,$,%,&,’,(,),*}.<br>5.b6 - случайная малая буква русского алфавита."
    }
    lineGenerate.value = ""
})


button.addEventListener("click", function(){
    let symbolsArr = ["абвгдеёжзийклмнопрстуфхцчшщъыьэюя","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789","!”#$%&’()*"]
    let len = [9,6]
    let pass = ""
    if(select.value == 11){
        for (let i = 0; i < len[0]; i++) {
            if (i <= len[0]%5) {
                pass += symbolsArr[3][Math.floor(Math.random() * symbolsArr[3].length)]
            }else if(i == 8){
                pass += symbolsArr[2][Math.floor(Math.random() * symbolsArr[2].length)]
            }else{
                pass += symbolsArr[0][Math.floor(Math.random() * symbolsArr[0].length)]
            }
        }
        lineGenerate.value = pass
    }else{
        for (let i = 0; i < len[1]; i++) {
            if (i <= 1){
                pass += symbolsArr[1][Math.floor(Math.random() * symbolsArr[1].length)]
            }else if(i == 2){
                pass += (len[1]**2)%10

            }else if(i == 3){
                pass += symbolsArr[2][Math.floor(Math.random() * symbolsArr[2].length)]
            }else if(i == 4){
                pass += symbolsArr[3][Math.floor(Math.random() * symbolsArr[3].length)]
            }else{
                pass += symbolsArr[2][Math.floor(Math.random() * symbolsArr[2].length)]
            }
        }
        lineGenerate.value = pass
    }
})

buttonCopy.addEventListener("click", function(){
    if (lineGenerate != 0){
        lineGenerate.select()
        document.execCommand("copy")
    }
})

export default function LR1() {
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>LR1</title>
            </Head>
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
                <div className={style.lab_title}>Лабораторная работа №1</div>
                <div className={style.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className="working_area--inner__zadanie1">
                        <div className="PVT">
                            <div className="input">
                                <div className="input_text">P=</div>
                                <div className="input_inner">
                                    <div className="input_substraction">Поле ввода для вероятности подбора пароля</div>
                                    <input className="line" type="text" placeholder="Вводить тут"/>
                                </div>
                            </div>
                            <div className="input">
                                <div className="input_text">V=</div>
                                <div className="input_inner">
                                    <div className="input_substraction">Поле ввода для скорости перебора паролей</div>
                                    <input className="line" type="text" placeholder="Ну вот тут если не понятно"/>
                                </div>
                            </div>
                            <div className="input">
                                <div className="input_text">T=</div>
                                <div className="input_inner">
                                    <div className="input_substraction">Поле ввода для максимального срока действия
                                        пароля
                                    </div>
                                    <input className="line" type="text" placeholder="Да-да, это поле ввода"/>
                                </div>
                            </div>
                            <div className="input">
                                <div className="input_text">S=</div>
                                <div className="input_inner">
                                    <div className="input_substraction">Рассчет нижней границы S*</div>
                                    <input className="s" type="text" placeholder="Результат тут" readOnly/>
                                </div>
                            </div>
                            <div className="complete_buttons">
                                <button className="complete_button" onClick={PTV}>Рассчитать</button>
                            </div>
                        </div>
                        <div className="generate_password">
                            <div className="generate_password--main">
                                <div className="generate_password--title">Генерация пароля</div>
                                <div className="input">
                                    <div className="input_text">L=</div>
                                    <div className="input_inner">
                                        <div className="input_substraction">Поле ввода для длины пароля</div>
                                        <input className="line" type="text" placeholder="Вводить тут"/>
                                    </div>
                                </div>
                                <div className="password_line">
                                    <div className="password_line--title">Сгенерированный пароль</div>
                                    <div className="input_inner">
                                        <input type="text" placeholder="Тут будет пароль)" readOnly/>
                                    </div>
                                </div>
                                <div className="complete_buttons">
                                    <button className="complete_button" onClick={generateRandomPass}>Сгенерировать</button>
                                    <button className="complete_button" onClick={copyPassword}>Скопировать</button>
                                </div>
                            </div>
                            <div className="generate_password--choice">
                                <label>
                                    <input id="option1" className="checkbox" onClick={formPassSymbols} type="checkbox"
                                           value="а"/>
                                    <label htmlFor="option1">a...я</label>
                                </label>
                                <br/>
                                <label>
                                    <input id="option2" className="checkbox" type="checkbox"
                                           value="А"/>
                                    <label htmlFor="option2">A...Я</label>
                                </label>
                                <br/>
                                <label>
                                    <input id="opiton3" className="checkbox" onClick={formPassSymbols}
                                           type="checkbox" value="a"/>
                                    <label htmlFor="opiton3">a...z</label>
                                </label>
                                <br/>
                                <label>
                                    <input id="opiton4" className="checkbox" onClick={formPassSymbols}
                                           type="checkbox" value="A"/>
                                    <label htmlFor="opiton4">A...Z</label>
                                </label>
                                <br/>
                                <label>
                                    <input id="opiton5" className="checkbox" onClick={formPassSymbols}
                                           type="checkbox" value="0"/>
                                    <label htmlFor="opiton5">0...9</label>
                                </label>
                                <br/>
                                <label>
                                    <input id="opiton6" className="checkbox" onClick={formPassSymbols}
                                           type="checkbox" value="!"/>
                                    <label htmlFor="opiton6">!...@</label>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="working_area--inner__zadanie2">
                        <div className="ex_title">Задание 2</div>
                        <select className="choice_variat">
                            <option value="11">Вариант 11</option>
                            <option value="15">Вариант 15</option>
                        </select>
                        <div className="exersise">
                            <div className="ex_condition">
                                <div className="ex_condition--title">Условие</div>
                                <div className="ex_condition--description">
                                    1. b1,b2...b1+q - случайные символы из множества !,”,#,$,%,&,’,(,),*, где
                                    Q=Nmod5. <br/>
                                    2. Оставшиеся символы пароля, кроме b9 , - случайные малые буквы русские
                                    алфавита. <br/>
                                    3. b9 - случайная цифра.
                                </div>
                            </div>
                            <div className="ex_complete">
                                <div className="input_inner">
                                    <input className="s" type="text" placeholder="Результат тут" readOnly/>
                                </div>
                                <div className="complete_buttons">
                                    <button className="complete_button" id="generatePassword">Сгенерировать</button>
                                    <button className="complete_button" id="generatePasswordCopy">Скопировать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )


}