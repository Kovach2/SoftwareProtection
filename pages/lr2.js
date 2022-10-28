import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";


// Styles
import classNames from 'classnames';
import lr2 from '../styles/lr2.module.css'
import style from '../styles/style.module.css'


// Img
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";

let zadanie1 = function () {
    // Элементы страницы
    let input = document.querySelector("#input")
    let buttonWidthTable = document.querySelector(".lr2_table_widths___WtFk")
    let tableInner = document.querySelector("#table_inner")


    // Переменные
    let str = input.value
    let lens = str.length
    let variants = []
    let buff = []
    let enc;

    // Генерация размеров кнопок
    function Repeat() {
        let len = str.length
        for (let i = 2; i < len - 1; i++) { // Цикл формирования размеров
            let arr = []
            if (len % i == 0) {
                arr.push(i)
                arr.push(len / i)
            }
            if (arr.length != 0)
                variants.push(arr)
        }
        if (variants.length == 0 && len != 0) {
            str += "."
            Repeat()
        }
    }

    Repeat()

    // Удаление кнопок
    let deleteWidthButtonCreate = document.querySelectorAll(".lr2_table_button__CwGmm")
    for (let j = 0; j < deleteWidthButtonCreate.length; j++) {
        deleteWidthButtonCreate[j].remove()
    }

    // Создание кнопок
    let widthButtons = []
    if (lens != 0 && 0 < lens && lens <= 32) {
        for (let i = 0; i < variants.length; i++) {
            buttonWidthTable.style.display = "flex";
            tableInner.style.width = "70%";
            let widthButtonCreate = document.createElement("button")
            widthButtonCreate.className = "lr2_table_button__CwGmm"
            widthButtonCreate.innerHTML = "Таблица " + variants[i][0] + "x" + variants[i][1]
            buttonWidthTable.append(widthButtonCreate)
            widthButtons.push(widthButtonCreate)
        }
    } else {
        buttonWidthTable.style.display = "none";
        alert("Неккоректная длина строки")
    }

    let width = 2, height = 2

    widthButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            let a = (btn.innerHTML).split(" ")
            a.shift()
            let b = a[0].split("x")
            width = Number(b[1])
            height = Number(b[0])


            // Удаление таблицы
            let deleteTable = document.querySelector(".lr2_table__jkbBX")
            deleteTable.remove()


            // Создание новой таблицы
            let table = document.createElement("table")
            table.className = "lr2_table__jkbBX"
            tableInner.append(table)
            for (let i = 0; i < height; i++) {
                let tr = document.createElement("tr")
                tr.id = "shifrTr"
                table.append(tr)
                for (let i = 0; i < width; i++) {
                    let td = document.createElement("td")
                    td.id = "shifrTd"
                    tr.append(td)
                }
            }

            let shifrTrs = document.querySelectorAll("#shifrTr")
            let shifrTds = document.querySelectorAll("#shifrTd")

            let widthTable = shifrTrs.length / shifrTds.length
            let step = width

            let encripStr = ""
            for (let i = 0; i < step; i++) {
                let strCount = i
                let buffer = i
                for (let z = 0; z < widthTable; z++) {
                    for (let j = 0; j < shifrTrs.length; j++) {
                        shifrTds[buffer].innerHTML = str[strCount]
                        encripStr += str[strCount]
                        buffer += step
                        strCount += step
                    }
                }
            }
            enc = encripStr
        })
    })

    let outputButton = document.querySelector("#outputButton")
    let output = document.querySelector("#output")
    outputButton.addEventListener('click', function (e) {
        e.preventDefault()
        output.value = enc
    })
}

let magicCube = function () {
    let mc1_3 = [[6, 1, 8], [3, 5, 7], [2, 9, 4]]
    let mc2_4 = [[16, 3, 2, 13], [5, 10, 11, 8], [9, 6, 7, 12], [4, 15, 14, 1]]
    let mc3_4 = [[19, 6, 5, 16], [8, 13, 14, 11], [12, 9, 10, 15], [7, 18, 17, 4]]
    let mc4_4 = [[1, 15, 14, 4], [12, 6, 7, 9], [8, 10, 11, 5], [13, 3, 2, 16]]
    let mc5_5 = [[21, 24, 2, 3, 15], [1, 6, 16, 22, 20], [14, 12, 19, 7, 13], [25, 5, 17, 10, 8], [4, 18, 11, 23, 9]]
    let mc6_5 = [[2, 18, 1, 23, 21], [12, 25, 5, 4, 19], [16, 9, 15, 14, 11], [13, 3, 24, 17, 8], [22, 10, 20, 7, 6]]
    let mc7_5 = [[4, 24, 10, 15, 12], [25, 13, 14, 6, 7], [3, 18, 22, 20, 2], [17, 9, 11, 5, 23], [16, 1, 8, 19, 21]]
    let mc8_6 = [[22, 36, 7, 2, 9, 35], [26, 18, 31, 10, 5, 21], [13, 23, 15, 24, 28, 8], [12, 4, 14, 34, 30, 17], [6, 1, 33, 25, 19, 27], [32, 29, 11, 16, 20, 3]]
    let mc9_6 = [[18, 28, 3, 12, 15, 35], [32, 11, 14, 17, 4, 33], [20, 9, 24, 13, 16, 29], [21, 27, 10, 25, 23, 5], [1, 30, 34, 8, 31, 7], [19, 6, 26, 36, 22, 2]]
    let mc10_6 = [[8, 10, 24, 4, 32, 33], [29, 20, 28, 21, 1, 12], [36, 5, 22, 14, 3, 31], [2, 27, 18, 30, 25, 9], [17, 26, 6, 35, 16, 11], [19, 23, 13, 7, 34, 15]]


    let mc3 = [mc1_3]
    let mc4 = [mc2_4, mc3_4, mc4_4]
    let mc5 = [mc5_5, mc6_5, mc7_5]
    let mc6 = [mc8_6, mc9_6, mc10_6]

    let input = document.querySelector("#mag_input")
    let inputText = input.value
    let strLen = inputText.length
    let output = document.querySelector("#mag_output")

    // Функция создания таблицы
    function createMC(size, arr) {
        //Удаление старой таблицы
        let tableMc = document.querySelectorAll("#mc_table")
        tableMc.forEach(function (table) {
            table.remove()
        })
        // Создание таблицы
        let ilust = document.querySelector(".lr2_magic_cube_ilustration__VCgHo")
        ilust.innerHTML = "Квадрат " + size + "x" + size
        let parent = document.querySelector(".lr2_magic_cube__1E9Lf")
        let createTableMc = document.createElement("table")
        createTableMc.className = "lr2_table__jkbBX"
        createTableMc.id = "mc_table"
        parent.append(createTableMc)
        for (let i = 0; i < size; i++) {
            let tr = document.createElement("tr")
            createTableMc.append(tr)
            for (let j = 0; j < size; j++) {
                let td = document.createElement("td")
                tr.append(td)
                td.innerHTML = arr[i][j]
            }
        }
        // Шифрование строки
        let enc = "";
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                console.log(arr[i][j])
                enc += inputText[arr[i][j] - 1]
            }
        }
        output.value = enc
    }

    if (1 <= strLen && strLen <= 9) {
        while (strLen != 9) {
            inputText += "."
            strLen = inputText.length
        }
        let len = mc3.length;
        let size = mc3[0].length
        let arr = mc3[0]
        createMC(size, arr)
    } else if (9 <= strLen && strLen <= 16) {
        while (strLen != 16) {
            inputText += "."
            strLen = inputText.length
        }
        let len = mc4.length;
        let size = mc4[Math.floor(Math.random() * len)].length
        let arr = mc4[Math.floor(Math.random() * len)]
        createMC(size, arr)
    } else if (16 <= strLen && strLen <= 25) {
        while (strLen != 25) {
            inputText += "."
            strLen = inputText.length
        }
        let len = mc5.length;
        let size = mc5[Math.floor(Math.random() * len)].length
        let arr = mc5[Math.floor(Math.random() * len)]
        createMC(size, arr)
    } else if (25 <= strLen && strLen <= 36) {
        while (strLen != 36) {
            inputText += "."
            strLen = inputText.length
        }
        let len = mc6.length;
        let size = mc6[Math.floor(Math.random() * len)].length
        let arr = mc6[Math.floor(Math.random() * len)]
        createMC(size, arr)
    } else {
        alert("Неккоректная длина строки")
    }
}


export default function LR2() {
    return (
        <div className={style.wrapper}>
            <Head><title>LR2</title></Head>
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
                <div className={style.lab_title}>Лабораторная работа №2</div>
                <div className={style.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className={lr2.ex1}>
                        <div className={lr2.ex1_inner}>
                            <div className={lr2.inputs}>
                                <div className={lr2.inputs_line}>
                                    <input type="text" placeholder="Поле ввода строки" className={style.input}
                                           id="input"/>
                                    <button onClick={zadanie1}
                                            className={classNames(style.button, style.button_click, lr2.button_click)}>Сгенерировать
                                        размеры таблиц
                                    </button>
                                </div>
                                <div className={lr2.table_inner} id="table_inner">
                                    <table className={lr2.table}>
                                        <tr>
                                            <td>н</td>
                                            <td>у</td>
                                            <td>н</td>
                                            <td>к</td>
                                        </tr>
                                        <tr>
                                            <td>а</td>
                                            <td>ш</td>
                                            <td>и</td>
                                            <td>и</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className={lr2.inputs_line}>
                                    <input type="text" placeholder="Результат" className={style.input} id="output"
                                           readOnly/>
                                    <button className={classNames(style.button, style.button_click, lr2.button_click)}
                                            id="outputButton">
                                        Зашифровать строку
                                    </button>
                                </div>
                            </div>
                            <div className={lr2.table_widths}>
                                <button className={lr2.table_button}>Таблица 2x2</button>
                                <button className={lr2.table_button}>Таблица 3x3</button>
                                <button className={lr2.table_button}>Таблица 4x2</button>
                                <button className={lr2.table_button}>Таблица 2x4</button>
                            </div>
                        </div>
                    </div>
                    <hr className={style.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <div className={lr2.ex2}>
                        <lr2 className={lr2.ex2_inner}>
                            <div className={lr2.magic_cube}>
                                <div className={lr2.magic_cube_title}>Размер магического квадрата для строки</div>
                                <div className={lr2.magic_cube_ilustration}>Квадрат 3x3</div>
                                <table className={lr2.table} id="mc_table">
                                    <tr>
                                        <td>6</td>
                                        <td>1</td>
                                        <td>8</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>5</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>9</td>
                                        <td>4</td>
                                    </tr>
                                </table>
                            </div>

                            <div className={lr2.inputs}>
                                <div className={classNames(lr2.inputs_line, lr2.inputs_line_ex2)}>
                                    <input type="text" placeholder="Поле ввода строки" className={style.input}
                                           id="mag_input"/>
                                    <button
                                        className={classNames(style.button, style.button_click, lr2.button_click, lr2.button_click_ex2)}
                                        onClick={magicCube}>Сгенерировать
                                    </button>
                                    <input type="text" placeholder="Результат" className={style.input} readOnly
                                           id="mag_output"/>
                                </div>
                            </div>
                        </lr2>
                    </div>
                </div>
            </main>
        </div>
    )
}
