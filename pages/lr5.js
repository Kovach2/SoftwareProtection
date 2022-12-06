import style from "../styles/style.module.css";
import {useEffect, useState} from "react";


import PageHead from "../components/head";
import classNames from "classnames";

import Link from "next/link";

import Image from "next/image";
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";


import lr1 from "../styles/lr1.module.css";
import lr5 from "../styles/lr5.module.css";


export default function LR5() {


    // ==================================== Задание 1 ====================================
    const [noneActive, setNoneActive] = useState("lr5_none_active__F6g6m")
    const [buttonText, setButtonText] = useState("Сгенерировать")
    // Функция вычисление корня для размеров таблицы
    const addSqrt = (number) => {
        if (Number.isInteger(Math.sqrt(number))) {
            return Math.sqrt(number)
        } else {
            while (!Number.isInteger(Math.sqrt(number))) {
                number += 1
            }
        }
        return Math.sqrt(number)
    }
    // Формирование строк по горизонтали и вертикали для дальнейшей перестановки их
    const test = (word) => {
        let alf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
        let indexes = []
        let massive = []
        let test = word
        for (let i = 0; i < test.length; i++) {
            for (let j = 0; j < alf.length; j++) {
                if (test[i].toLowerCase() === alf[j]) {
                    indexes.push(alf.indexOf(alf[j]))
                }
            }
        }
        for (let i = 0; i < indexes.length; i++) {
            let count = 1
            for (let j = 0; j < indexes.length; j++) {
                if (indexes[i] > indexes[j]) {
                    count += 1
                }
            }
            massive.push([count])
        }
        return massive
    }
    const click = async () => {


        let createTbody = document.createElement('tbody');
        createTbody.id = ("tbody")
        let tbody = await document.getElementById("tbody")
        let gor = await document.getElementById("gor")
        let ver = await document.getElementById("ver")
        let wordLen = document.getElementById("wordInput").value
        let table = document.getElementById("table")

        // Полезные переменные
        let width = addSqrt(wordLen.length) // Длина и ширина таблицы

        if (buttonText === "Сгенерировать") {
            // Удаление старой таблицы
            if (table.contains(tbody))
                tbody.remove()
            if (wordLen.length >= 4 && wordLen.length <= 64) {
                setNoneActive("")

                // Отрисовка таблицы
                table.appendChild(createTbody)
                let tbd = document.getElementById("tbody")
                for (let i = 0; i < width; i++) {
                    let tr = document.createElement("tr")
                    tbd.appendChild(tr)
                    tr.id = 'tableTR'
                    for (let j = 0; j < width; j++) {
                        let td = document.createElement("td")
                        tr.appendChild(td)
                        td.id = 'tableTD'
                    }
                }

                // Получение ячеек таблицы
                let TDS = document.querySelectorAll("#tableTD")

                // Продление слова до нужного размера
                while (wordLen.length !== width ** 2) {
                    wordLen += '.'
                }

                // Заполнение таблицы не защифрованным текстом
                for (let i = 0; i < width ** 2; i++) {
                    TDS[i].innerHTML = wordLen[i]
                }
                setButtonText("Зашифровать")
            } else {
                setNoneActive("lr5_none_active__F6g6m")
                alert("Введите строку или слово которая содержит больше 3 символов, но менее чем 64")
            }
        } else if (buttonText === "Зашифровать") {
            let TDS = document.querySelectorAll("#tableTD")
            let counter
            let step = width
            if (gor.value !== "" && ver.value !== "" && !Number(gor.value) && !Number(ver.value) && gor.value.length === width && ver.value.length === width) {
                let gorMass = test(gor.value)
                let verMass = test(ver.value)
                // ================================ Горизонтальное слово ========================================
                // Сбор букв по вертикали
                gorMass.forEach(function (mass) {
                    counter = gorMass.indexOf(mass)
                    for (let j = 0; j < width; j++) {
                        mass.push(TDS[counter].innerHTML)
                        counter += width
                    }
                })
                // Перемещение букв по горизонтальному слову
                gorMass.sort().forEach(function (mass) {
                    counter = gorMass.indexOf(mass)
                    for (let j = 1; j < width; j++) {
                        TDS[counter].innerHTML = mass[j]
                        counter += width
                    }
                })
                // ================================ Вертикальное слово слово ========================================
                // Сбор букв по горизонтали
                counter = 0
                for (let i = 0; i < TDS.length; i++) {
                    verMass[counter].push(TDS[i].innerHTML)
                    if (verMass[counter].length === width + 1) {
                        counter += 1
                    }
                }
                // Перемещение букв по вертикальному слову
                counter = 0
                let letterCounter = 1
                verMass.sort()
                for (let i = 0; i < TDS.length; i++) {
                    TDS[i].innerHTML = verMass[counter][letterCounter]
                    if (letterCounter === width) {
                        counter += 1
                        letterCounter = 1
                        continue
                    }
                    letterCounter += 1
                }
                let result = ""
                for (let i = 0; i < TDS.length; i++) {
                    result += TDS[i].innerHTML
                }
                let resultInput = document.getElementById("wordInput")
                resultInput.value = result
                setButtonText("Скопировать")
            } else {
                alert(`Длинна слов должна быть ${addSqrt(wordLen.length)} символов и состоять только из букв русского алфавита`)
            }
        } else if (buttonText === "Скопировать") {
            let input1 = document.getElementById("wordInput")
            navigator.clipboard.writeText(input1.value)
            input1.value = ""
            gor.value = ""
            ver.value = ""
            setNoneActive("lr5_none_active__F6g6m")
            if (table.contains(tbody))
                tbody.remove()
            setButtonText("Сгенерировать")

        }
    }
    const reset = async () => {
        document.getElementById("wordInput").value = ""
        document.getElementById("gor").value = ""
        document.getElementById("ver").value = ""
        setNoneActive("lr5_none_active__F6g6m")
        if (document.getElementById("table").contains(await document.getElementById("tbody")))
            document.getElementById("tbody").remove()
        setButtonText("Сгенерировать")
    }

    // ==================================== Задание 2 ====================================

    const generateRusAlfavit = (keyWord = "") => {
        let alf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя---"
        let step = 7
        let counter = 1
        let td = document.querySelectorAll("#rus_td")
        // Цифры в таблице
        for (let i = 1; i < step; i++) {
            td[i].innerHTML = i
        }
        for (let i = 7; i < td.length;) {
            td[i].innerHTML = counter
            i += step
            counter += 1
        }
        // Вставка ключевого слова
        counter = 0
        let letterCounter = 0
        let find = false
        let keyWordBool = true;
        for (let i = 8; i < td.length;) {
            if (counter === 6) {
                counter = 0
                i++
            } else if (keyWordBool === true && letterCounter < keyWord.length) {
                td[i].innerHTML = keyWord[letterCounter].toUpperCase()
                letterCounter++
                counter++
                i++
            } else if (letterCounter === keyWord.length && keyWordBool === true) {
                letterCounter = 0
                keyWordBool = false
            } else if (keyWordBool === false) {
                for (let j = 0; j < keyWord.length; j++) {
                    if (keyWord[j] === alf[letterCounter]) {
                        find = true
                        break
                    }
                }
                if (find) {
                    letterCounter++
                    find = false
                } else {
                    td[i].innerHTML = alf[letterCounter].toUpperCase()
                    counter++
                    letterCounter++
                    i++
                }
            }
        }
    }
    const generateEngAlfavit = (keyWord = "") => {
        let alf = "abcdefghiklmnopqrstuvwxyz"
        let step = 6
        let counter = 1
        let td = document.querySelectorAll("#eng_td")
        // Цифры в таблице
        for (let i = 1; i < step; i++) {
            td[i].innerHTML = i
        }
        for (let i = 6; i < td.length;) {
            td[i].innerHTML = counter
            i += step
            counter += 1
        }

        // Вставка ключевого слова
        counter = 0
        let letterCounter = 0
        let find = false
        let keyWordBool = true;
        for (let i = 7; i < td.length;) {
            if (counter === 5) {
                counter = 0
                i++
            } else if (keyWordBool === true && letterCounter < keyWord.length) {
                td[i].innerHTML = keyWord[letterCounter].toUpperCase()
                letterCounter++
                counter++
                i++
            } else if (letterCounter === keyWord.length && keyWordBool === true) {
                letterCounter = 0
                keyWordBool = false
            } else if (keyWordBool === false) {
                for (let j = 0; j < keyWord.length; j++) {
                    if (keyWord[j] === alf[letterCounter]) {
                        find = true
                        break
                    }
                }
                if (find) {
                    letterCounter++
                    find = false
                } else {
                    td[i].innerHTML = alf[letterCounter].toUpperCase()
                    counter++
                    letterCounter++
                    i++
                }
            }
        }
    }

    // =================== Метод 1 ===================

    const [tableSize, setTableSize] = useState("")
    const [noneActiveTable, setNoneActiveTable] = useState("lr5_none_active__F6g6m")
    const [noneActiveTable1, setNoneActiveTable1] = useState("lr5_none_active__F6g6m")
    const [noneActiveTable2, setNoneActiveTable2] = useState("lr5_none_active__F6g6m")

    const findLettersCoordinates = (engGor, rusGor, engVer, rusVer, word) => {
        let gor = []
        let ver = []
        for (let i = 0; i < word.length; i++) {
            engGor.forEach(function (mass) {
                for (let j = 1; j < mass.length; j++) {
                    if (word[i].toLowerCase() === mass[j].toLowerCase()) {
                        gor.push(mass[0])
                    }
                }
            })
            rusGor.forEach(function (mass) {
                for (let j = 1; j < mass.length; j++) {
                    if (word[i].toLowerCase() === mass[j].toLowerCase()) {
                        gor.push(mass[0])
                    }
                }
            })
            engVer.forEach(function (mass) {
                for (let j = 1; j < mass.length; j++) {
                    if (word[i].toLowerCase() === mass[j].toLowerCase()) {
                        ver.push(mass[0])
                    }
                }
            })
            rusVer.forEach(function (mass) {
                for (let j = 1; j < mass.length; j++) {
                    if (word[i].toLowerCase() === mass[j].toLowerCase()) {
                        ver.push(mass[0])
                    }
                }
            })
        }
        return [ver, gor]
    }
    const findWithCoordinates = (engGor, rusGor, shifrVer, shifrGor, word) => {
        let rusAlf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
        let rus = false
        let newWord = ""
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < rusAlf.length; j++) {
                if (word[i] === rusAlf[j]) {
                    rus = true;
                    break
                }
            }
            if (rus) {
                newWord += rusGor[Number(shifrGor[i]) - 1][Number(shifrVer[i])]
                rus = false
            } else {
                newWord += engGor[Number(shifrGor[i]) - 1][Number(shifrVer[i])]
            }
        }
        return newWord
    }

    const method1 = () => {
        generateRusAlfavit()
        generateEngAlfavit()
        let lineInput = document.querySelector("#method1_input")
        let rusAlf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
        let engAlf = "abcdefghijklmnopqrstuvwxyz"
        let rus = false, eng = false, itog = false

        for (let i = 0; i < lineInput.value.length; i++) {
            for (let j = 0; j < rusAlf.length; j++) {
                if (lineInput.value[i] === rusAlf[j]) {
                    rus = true
                }
            }
            for (let j = 0; j < engAlf.length; j++) {
                if (lineInput.value[i] === engAlf[j]) {
                    eng = true
                }
            }
        }

        if (rus === true && eng === true)
            itog = true

        if (lineInput.value.length >= 6 && !lineInput.value.includes(" ") && itog === false && lineInput.value.length <= 26) {
            setNoneActiveTable("")
            let engTDS = document.querySelectorAll("#eng_td")
            let rusTDS = document.querySelectorAll("#rus_td")

            // Получение массивов с русскими буквами
            let step = 7
            let countJ = 1
            let counter = 0
            let rusVer = [], rusGor = [], engVer = [], engGor = []
            // Вертикаль
            for (let i = 0; i < 6; i++) {
                rusVer.push([])
                for (let j = countJ; j < rusTDS.length; j += step) {
                    rusVer[counter].push(rusTDS[j].innerHTML)
                }
                counter++
                countJ++
            }

            // Горизонталь
            countJ = 7
            let masCounter = 0
            for (let i = 0; i < 6; i++) {
                counter = 0
                rusGor.push([])
                for (let j = countJ; j < rusTDS.length; j++) {
                    if (counter === 7) {
                        break
                    } else {
                        counter++
                        rusGor[masCounter].push(rusTDS[j].innerHTML)
                    }

                }
                countJ += step
                masCounter++
            }


            // Получение массивов с английскими буквами
            // Вертикаль
            step = 6
            countJ = 1
            counter = 0
            for (let i = 0; i < 5; i++) {
                engVer.push([])
                for (let j = countJ; j < engTDS.length; j += step) {
                    engVer[counter].push(engTDS[j].innerHTML)
                }
                counter++
                countJ++
            }

            // Горизонталь
            countJ = 6
            masCounter = 0
            for (let i = 0; i < 5; i++) {
                counter = 0
                engGor.push([])
                for (let j = countJ; j < engTDS.length; j++) {
                    if (counter === 6) {
                        break
                    } else {
                        counter++
                        engGor[masCounter].push(engTDS[j].innerHTML)
                    }

                }
                countJ += step
                masCounter++
            }


            // Получение таблиц со страницы
            let firstTable = document.querySelectorAll("#first_table_1 tr")
            let firstTableTds = document.querySelectorAll("#first_table_1 tr td")
            let secondTable = document.querySelectorAll("#second_table_1 tr")
            let secondTableTds = document.querySelectorAll("#second_table_1 tr td")
            step = lineInput.value.length


            // Удаление старой таблицы
            for (let i = 1; i < firstTableTds.length; i++) {
                if (firstTableTds[i].innerHTML.toLowerCase() === "горизонтальная координата" || firstTableTds[i].innerHTML.toLowerCase() === "вертикальная координата" || firstTableTds[i].innerHTML.toLowerCase() === "буквы" || secondTableTds[i].innerHTML.toLowerCase() === "горизонтальная координата" || secondTableTds[i].innerHTML.toLowerCase() === "вертикальная координата" || secondTableTds[i].innerHTML.toLowerCase() === "буквы") {
                    continue
                } else {
                    firstTableTds[i].remove()
                    secondTableTds[i].remove()
                }

            }

            // Создание новых таблиц
            for (let i = 1; i < firstTable.length; i++) {
                for (let j = 0; j < lineInput.value.length; j++) {
                    let td = document.createElement("td")
                    let td2 = document.createElement("td")
                    firstTable[i].appendChild(td)
                    secondTable[i].appendChild(td2)
                }
            }

            // Запись слова в таблицу
            firstTableTds = document.querySelectorAll("#first_table_1 tr td")
            for (let i = 2; i < step + 2; i++) {
                firstTableTds[i].innerHTML = lineInput.value[i - 2].toUpperCase()
            }
            setTableSize(lineInput.value.length + 6)

            // Запись изначальных координат в таблицу
            let coordinates = findLettersCoordinates(engGor, rusGor, engVer, rusVer, lineInput.value)
            for (let i = step + 3; i < step * 2 + 3; i++) {
                firstTableTds[i].innerHTML = coordinates[1][i - step - 3]
            }
            for (let i = step * 2 + 4; i < step * 3 + 4; i++) {
                firstTableTds[i].innerHTML = coordinates[0][i - step * 2 - 4]
            }


            // Сбор координат для шифровки
            let coordShifr = ""
            for (let i = 1; i >= 0; i--) {
                for (let j = 0; j < coordinates[i].length; j++) {
                    if (coordinates[i].length % 2 === 0) {
                        coordShifr += coordinates[i][j]
                        if (j % 2 === 1 && j !== 0) {
                            coordShifr += " "
                        }
                    } else {
                        if (j % 2 === 0 && j !== 0 && i === 1) {
                            coordShifr += " "
                        } else if (j % 2 === 1 && i === 0) {
                            coordShifr += " "
                        }
                        coordShifr += coordinates[i][j]
                    }
                }
            }


            // Запись во вторую таблицу кординат и слова
            let coordShifrMass = coordShifr.split(" ")

            let shifrGor = []
            let shifrVer = []
            for (let i = 0; i < coordShifrMass.length; i++) {
                shifrGor.push(coordShifrMass[i][0])
                shifrVer.push(coordShifrMass[i][1])
            }

            secondTableTds = document.querySelectorAll("#second_table_1 tr td")
            let shifrWord = findWithCoordinates(engGor, rusGor, shifrVer, shifrGor, lineInput.value.toLowerCase())
            let newShifrWord = shifrWord[0]
            for (let i = 1; i < shifrWord.length; i++) {
                newShifrWord += shifrWord[i].toLowerCase()
            }

            for (let i = 2; i < step + 2; i++) {
                secondTableTds[i].innerHTML = shifrGor[i - 2]
            }
            for (let i = step + 3; i < step * 2 + 3; i++) {
                secondTableTds[i].innerHTML = shifrVer[i - (step + 3)]
            }
            for (let i = step * 2 + 4; i < step * 3 + 4; i++) {
                secondTableTds[i].innerHTML = shifrWord[i - (step * 2 + 4)]
            }


            let thirdTableTds = document.querySelectorAll("#result_table_1 tr td");
            thirdTableTds[1].innerHTML = lineInput.value
            thirdTableTds[3].innerHTML = newShifrWord
            return 1
        } else {
            alert("Введите строку без пробелов и длиною больше 6 символов, а также на одном языке")
            return 1
        }
    }

    const method2 = () => {
        generateRusAlfavit()
        generateEngAlfavit()
        let lineInput = document.querySelector("#method2_input")
        let rusAlf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
        let engAlf = "abcdefghijklmnopqrstuvwxyz"
        let rus = false, eng = false, itog = false

        for (let i = 0; i < lineInput.value.length; i++) {
            for (let j = 0; j < rusAlf.length; j++) {
                if (lineInput.value[i] === rusAlf[j]) {
                    rus = true
                }
            }
            for (let j = 0; j < engAlf.length; j++) {
                if (lineInput.value[i] === engAlf[j]) {
                    eng = true
                }
            }
        }

        if (rus === true && eng === true)
            itog = true

        if (lineInput.value.length >= 6 && !lineInput.value.includes(" ") && itog === false && lineInput.value.length <= 26) {
            setNoneActiveTable1("")
            let engTDS = document.querySelectorAll("#eng_td")
            let rusTDS = document.querySelectorAll("#rus_td")
            let shiftStep = Math.floor(Math.random() * ((lineInput.value.length - 2 - 1) / 2 + 1)) * 2 + 1

            // Получение массивов с русскими буквами
            let step = 7
            let countJ = 1
            let counter = 0
            let rusVer = [], rusGor = [], engVer = [], engGor = []
            // Вертикаль
            for (let i = 0; i < 6; i++) {
                rusVer.push([])
                for (let j = countJ; j < rusTDS.length; j += step) {
                    rusVer[counter].push(rusTDS[j].innerHTML)
                }
                counter++
                countJ++
            }

            // Горизонталь
            countJ = 7
            let masCounter = 0
            for (let i = 0; i < 6; i++) {
                counter = 0
                rusGor.push([])
                for (let j = countJ; j < rusTDS.length; j++) {
                    if (counter === 7) {
                        break
                    } else {
                        counter++
                        rusGor[masCounter].push(rusTDS[j].innerHTML)
                    }

                }
                countJ += step
                masCounter++
            }


            // Получение массивов с английскими буквами
            // Вертикаль
            step = 6
            countJ = 1
            counter = 0
            for (let i = 0; i < 5; i++) {
                engVer.push([])
                for (let j = countJ; j < engTDS.length; j += step) {
                    engVer[counter].push(engTDS[j].innerHTML)
                }
                counter++
                countJ++
            }

            // Горизонталь
            countJ = 6
            masCounter = 0
            for (let i = 0; i < 5; i++) {
                counter = 0
                engGor.push([])
                for (let j = countJ; j < engTDS.length; j++) {
                    if (counter === 6) {
                        break
                    } else {
                        counter++
                        engGor[masCounter].push(engTDS[j].innerHTML)
                    }

                }
                countJ += step
                masCounter++
            }


            // Получение таблиц со страницы
            let firstTable = document.querySelectorAll("#first_table_2 tr")
            let firstTableTds = document.querySelectorAll("#first_table_2 tr td")
            let secondTable = document.querySelectorAll("#second_table_2 tr")
            let secondTableTds = document.querySelectorAll("#second_table_2 tr td")
            step = lineInput.value.length


            // Удаление старой таблицы
            for (let i = 1; i < firstTableTds.length; i++) {
                if (firstTableTds[i].innerHTML.toLowerCase() === "горизонтальная координата" || firstTableTds[i].innerHTML.toLowerCase() === "вертикальная координата" || firstTableTds[i].innerHTML.toLowerCase() === "буквы" || secondTableTds[i].innerHTML.toLowerCase() === "горизонтальная координата" || secondTableTds[i].innerHTML.toLowerCase() === "вертикальная координата" || secondTableTds[i].innerHTML.toLowerCase() === "буквы") {
                    continue
                } else {
                    firstTableTds[i].remove()
                    secondTableTds[i].remove()
                }

            }

            // Создание новых таблиц
            for (let i = 1; i < firstTable.length; i++) {
                for (let j = 0; j < lineInput.value.length; j++) {
                    let td = document.createElement("td")
                    let td2 = document.createElement("td")
                    firstTable[i].appendChild(td)
                    secondTable[i].appendChild(td2)
                }
            }

            // Запись слова в таблицу
            firstTableTds = document.querySelectorAll("#first_table_2 tr td")
            for (let i = 2; i < step + 2; i++) {
                firstTableTds[i].innerHTML = lineInput.value[i - 2].toUpperCase()
            }
            setTableSize(lineInput.value.length + 6)

            // Запись изначальных координат в таблицу
            let coordinates = findLettersCoordinates(engGor, rusGor, engVer, rusVer, lineInput.value)
            for (let i = step + 3; i < step * 2 + 3; i++) {
                firstTableTds[i].innerHTML = coordinates[1][i - step - 3]
            }
            for (let i = step * 2 + 4; i < step * 3 + 4; i++) {
                firstTableTds[i].innerHTML = coordinates[0][i - step * 2 - 4]
            }


            // Сбор координат для шифровки
            let coordShifr = ""
            for (let i = 1; i >= 0; i--) {
                for (let j = 0; j < coordinates[i].length; j++) {
                    if (coordinates[i].length % 2 === 0) {
                        coordShifr += coordinates[i][j]
                        if (j % 2 === 1 && j !== 0) {
                            coordShifr += " "
                        }
                    } else {
                        if (j % 2 === 0 && j !== 0 && i === 1) {
                            coordShifr += " "
                        } else if (j % 2 === 1 && i === 0) {
                            coordShifr += " "
                        }
                        coordShifr += coordinates[i][j]
                    }
                }
            }

            // Запись во вторую таблицу кординат и слова
            let coordShifrMass = coordShifr.split(" ")
            let newCoordShifrMass = coordShifrMass.join("")
            let sliced = ""
            let newWord = ""
            for (let i = 0; i < shiftStep; i++) {
                sliced += newCoordShifrMass[i]
            }
            newCoordShifrMass = newCoordShifrMass.slice(shiftStep)
            newCoordShifrMass += sliced
            for (let i = 0; i < newCoordShifrMass.length; i++) {
                if (i % 2 === 0 && i !== 0){
                    newWord += " "
                }
                newWord += newCoordShifrMass[i]
            }
            coordShifrMass = newWord.split(" ")

            let shifrGor = []
            let shifrVer = []
            for (let i = 0; i < coordShifrMass.length; i++) {
                shifrGor.push(coordShifrMass[i][0])
                shifrVer.push(coordShifrMass[i][1])
            }

            secondTableTds = document.querySelectorAll("#second_table_2 tr td")
            let shifrWord = findWithCoordinates(engGor, rusGor, shifrVer, shifrGor, lineInput.value.toLowerCase())
            let newShifrWord = shifrWord[0]
            for (let i = 1; i < shifrWord.length; i++) {
                newShifrWord += shifrWord[i].toLowerCase()
            }

            for (let i = 2; i < step + 2; i++) {
                secondTableTds[i].innerHTML = shifrGor[i - 2]
            }
            for (let i = step + 3; i < step * 2 + 3; i++) {
                secondTableTds[i].innerHTML = shifrVer[i - (step + 3)]
            }
            for (let i = step * 2 + 4; i < step * 3 + 4; i++) {
                secondTableTds[i].innerHTML = shifrWord[i - (step * 2 + 4)]
            }

            let thirdTableTds = document.querySelectorAll("#result_table_2 tr td");
            thirdTableTds[1].innerHTML = lineInput.value
            thirdTableTds[3].innerHTML = newShifrWord
        } else {
            alert("Введите строку без пробелов и длиною больше 6 символов, а также на одном языке")
        }
    }

    const method3 = () => {
        let lineInput = document.querySelector("#method3_input")
        let keyWord = document.querySelector("#method3_input1").value
        let rusAlf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
        let engAlf = "abcdefghijklmnopqrstuvwxyz"
        let rus = false, eng = false, itog = false
        let counter = 0

        for (let i = 0; i < lineInput.value.length; i++) {
            for (let j = 0; j < rusAlf.length; j++) {
                if (lineInput.value[i] === rusAlf[j] || keyWord[i] === engAlf[j]) {
                    rus = true
                }
            }
            for (let j = 0; j < engAlf.length; j++) {
                if (lineInput.value[i] === engAlf[j] || keyWord[i] === engAlf[j]) {
                    eng = true
                }
            }
        }

        if (rus && eng)
            itog = true


        if (lineInput.value.length >= 6 && !lineInput.value.includes(" ") && itog === false && lineInput.value.length <= 26 && keyWord.length <= 18 && keyWord.length >= 1) {
            setNoneActiveTable2("")
            let engTDS = document.querySelectorAll("#eng_td")
            let rusTDS = document.querySelectorAll("#rus_td")

            if (eng){
                generateEngAlfavit(keyWord)
            }else{
                generateRusAlfavit(keyWord)
            }

            // Получение массивов с русскими буквами
            let step = 7
            let countJ = 1
            let counter = 0
            let rusVer = [], rusGor = [], engVer = [], engGor = []
            // Вертикаль
            for (let i = 0; i < 6; i++) {
                rusVer.push([])
                for (let j = countJ; j < rusTDS.length; j += step) {
                    rusVer[counter].push(rusTDS[j].innerHTML)
                }
                counter++
                countJ++
            }

            // Горизонталь
            countJ = 7
            let masCounter = 0
            for (let i = 0; i < 6; i++) {
                counter = 0
                rusGor.push([])
                for (let j = countJ; j < rusTDS.length; j++) {
                    if (counter === 7) {
                        break
                    } else {
                        counter++
                        rusGor[masCounter].push(rusTDS[j].innerHTML)
                    }

                }
                countJ += step
                masCounter++
            }


            // Получение массивов с английскими буквами
            // Вертикаль
            step = 6
            countJ = 1
            counter = 0
            for (let i = 0; i < 5; i++) {
                engVer.push([])
                for (let j = countJ; j < engTDS.length; j += step) {
                    engVer[counter].push(engTDS[j].innerHTML)
                }
                counter++
                countJ++
            }

            // Горизонталь
            countJ = 6
            masCounter = 0
            for (let i = 0; i < 5; i++) {
                counter = 0
                engGor.push([])
                for (let j = countJ; j < engTDS.length; j++) {
                    if (counter === 6) {
                        break
                    } else {
                        counter++
                        engGor[masCounter].push(engTDS[j].innerHTML)
                    }

                }
                countJ += step
                masCounter++
            }


            // Получение таблиц со страницы
            let firstTable = document.querySelectorAll("#first_table_3 tr")
            let firstTableTds = document.querySelectorAll("#first_table_3 tr td")
            let secondTable = document.querySelectorAll("#second_table_3 tr")
            let secondTableTds = document.querySelectorAll("#second_table_3 tr td")
            step = lineInput.value.length


            // Удаление старой таблицы
            for (let i = 1; i < firstTableTds.length; i++) {
                if (firstTableTds[i].innerHTML.toLowerCase() === "горизонтальная координата" || firstTableTds[i].innerHTML.toLowerCase() === "вертикальная координата" || firstTableTds[i].innerHTML.toLowerCase() === "буквы" || secondTableTds[i].innerHTML.toLowerCase() === "горизонтальная координата" || secondTableTds[i].innerHTML.toLowerCase() === "вертикальная координата" || secondTableTds[i].innerHTML.toLowerCase() === "буквы") {
                    continue
                } else {
                    firstTableTds[i].remove()
                    secondTableTds[i].remove()
                }

            }

            // Создание новых таблиц
            for (let i = 1; i < firstTable.length; i++) {
                for (let j = 0; j < lineInput.value.length; j++) {
                    let td = document.createElement("td")
                    let td2 = document.createElement("td")
                    firstTable[i].appendChild(td)
                    secondTable[i].appendChild(td2)
                }
            }

            // Запись слова в таблицу
            firstTableTds = document.querySelectorAll("#first_table_3 tr td")
            for (let i = 2; i < step + 2; i++) {
                firstTableTds[i].innerHTML = lineInput.value[i - 2].toUpperCase()
            }
            setTableSize(lineInput.value.length + 6)

            // Запись изначальных координат в таблицу
            let coordinates = findLettersCoordinates(engGor, rusGor, engVer, rusVer, lineInput.value)
            for (let i = step + 3; i < step * 2 + 3; i++) {
                firstTableTds[i].innerHTML = coordinates[1][i - step - 3]
            }
            for (let i = step * 2 + 4; i < step * 3 + 4; i++) {
                firstTableTds[i].innerHTML = coordinates[0][i - step * 2 - 4]
            }


            // Сбор координат для шифровки
            let coordShifr = ""
            for (let i = 1; i >= 0; i--) {
                for (let j = 0; j < coordinates[i].length; j++) {
                    if (coordinates[i].length % 2 === 0) {
                        coordShifr += coordinates[i][j]
                        if (j % 2 === 1 && j !== 0) {
                            coordShifr += " "
                        }
                    } else {
                        if (j % 2 === 0 && j !== 0 && i === 1) {
                            coordShifr += " "
                        } else if (j % 2 === 1 && i === 0) {
                            coordShifr += " "
                        }
                        coordShifr += coordinates[i][j]
                    }
                }
            }


            // Запись во вторую таблицу кординат и слова
            let coordShifrMass = coordShifr.split(" ")

            let shifrGor = []
            let shifrVer = []
            for (let i = 0; i < coordShifrMass.length; i++) {
                shifrGor.push(coordShifrMass[i][0])
                shifrVer.push(coordShifrMass[i][1])
            }

            secondTableTds = document.querySelectorAll("#second_table_3 tr td")
            let shifrWord = findWithCoordinates(engGor, rusGor, shifrVer, shifrGor, lineInput.value.toLowerCase())
            let newShifrWord = shifrWord[0]
            for (let i = 1; i < shifrWord.length; i++) {
                newShifrWord += shifrWord[i].toLowerCase()
            }

            for (let i = 2; i < step + 2; i++) {
                secondTableTds[i].innerHTML = shifrGor[i - 2]
            }
            for (let i = step + 3; i < step * 2 + 3; i++) {
                secondTableTds[i].innerHTML = shifrVer[i - (step + 3)]
            }
            for (let i = step * 2 + 4; i < step * 3 + 4; i++) {
                secondTableTds[i].innerHTML = shifrWord[i - (step * 2 + 4)]
            }


            let thirdTableTds = document.querySelectorAll("#result_table_3 tr td");
            thirdTableTds[1].innerHTML = lineInput.value
            thirdTableTds[3].innerHTML = newShifrWord
            return 1
        } else {
            alert("Введите строку без пробелов и длиною больше 6 символов, а также на одном языке")
            return 1
        }
    }

    useEffect(() => {
        generateRusAlfavit()
        generateEngAlfavit()
    }, [])


    return (
        <div className={style.wrapper}>
            <PageHead title={"Лабораторная работа 5"}/>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <Link href={"/"} className={classNames(style.button, style.button_header)}>
                        На главную
                    </Link>
                    <div className={style.header_logo}>
                        <Image className={style.Biceps} src={leftBiceps} width={80} height={80} alt={"left"}/>
                        <div className={style.header_logotext}>54 тп</div>
                        <Image className={style.Biceps} src={rightBiceps} width={80} height={80} alt={"right"}/>
                    </div>
                    <Link href={"#"} className={classNames(style.button, style.button_header)}>
                        Документация
                    </Link>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.lab_title}>Лабораторная работа №5</div>
                <div className={style.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className={lr5.wrapper}>
                        <div className={lr5.ex1_wrapper} id={"wrapper_ex1"}>
                            <div className={lr5.ex1_choice}>
                                <div className={lr5.Inputs_wrapper}>
                                    <div className={classNames(lr5.input__block, noneActive)}>
                                        <input className={classNames(lr1.input, lr5.input)} id={"gor"} type="text"
                                               placeholder={"Горизонталь"}/>
                                    </div>
                                    <div className={classNames(lr5.input__block, noneActive)}>
                                        <input className={classNames(lr1.input, lr5.input)} id={"ver"} type="text"
                                               placeholder={"Вертикаль"}/>
                                    </div>
                                    <div className={lr5.input__block}>
                                        <input className={classNames(lr1.input, lr5.stroka)} id={"wordInput"}
                                               type="text" placeholder={"Строка"}/>
                                    </div>
                                </div>
                                <div className={lr5.buttons}>
                                    <button
                                        className={classNames(style.button, style.button_click, lr5.button_ex1)}
                                        id="outputButton" onClick={click}>
                                        {buttonText}
                                    </button>
                                    <button
                                        className={classNames(style.button, style.button_click, lr5.button_ex1, lr5.reset)}
                                        id="outputButton" onClick={reset}>
                                        Очистить
                                    </button>
                                </div>

                            </div>
                            <div className={classNames(lr5.table_numbers, noneActive)} id={"tableWrapper"}>
                                <table id={"table"}></table>
                            </div>
                        </div>
                    </div>

                    <hr className={style.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <div className={lr5.ex2_wrapper}>
                        <div className={lr5.alfs}>
                            <div className={lr5.alf_wrapper}>
                                <div className={lr5.alf_title}>Русский алфавит</div>
                                <table className={lr5.alf}>
                                    <tbody id="rusAlf">
                                    <tr>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                        <td id="rus_td"></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={lr5.alf_wrapper}>
                                <div className={lr5.alf_title}>Английский алфавит</div>
                                <table className={lr5.alf}>
                                    <tbody>
                                    <tr>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                    </tr>
                                    <tr>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                        <td id="eng_td"></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={lr5.methods}>
                            <div className={lr5.method}>
                                <div className={lr5.method__title}>Метод 1</div>
                                <div className={lr5.method_input_block}>
                                    <input className={classNames(lr1.input, lr5.metod_input)} type="text" placeholder={"Строка"} id={"method1_input"}/>
                                    <button onClick={method1}
                                            className={classNames(style.button, style.button_click, lr5.method__button)}
                                            id={"method1_button"}>Ввод
                                    </button>
                                </div>
                                <div className={lr5.method_tables}>
                                    <div className={classNames(noneActiveTable, lr5.find_table)} id={"first_table_1"}>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td colSpan={tableSize}>Таблица координат</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan={6}>Буквы</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Горизонтальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Вертикальная координата</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={classNames(noneActiveTable, lr5.find_table)} id={"second_table_1"}>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td colSpan={tableSize}>Таблица координат</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan={6}>Горизонтальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Вертикальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Буквы</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={classNames(noneActiveTable, lr5.result_table)}
                                         id={"result_table_1"}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td colSpan={3}>До шифрования</td>
                                                <td colSpan={6}>Привет как дела я нормально</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>После шифрования</td>
                                                <td colSpan={6}>Привет как дела я нормально</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div className={lr5.method}>
                                <div className={lr5.method__title}>Метод 2</div>
                                <div className={lr5.method_input_block}>
                                    <input className={classNames(lr1.input, lr5.metod_input)} type="text" placeholder={"Строка"} id={"method2_input"}/>
                                    <button onClick={method2}
                                            className={classNames(style.button, style.button_click, lr5.method__button)}
                                            id={"method2_button"}>Ввод
                                    </button>
                                </div>
                                <div className={lr5.method_tables}>
                                    <div className={classNames(noneActiveTable1, lr5.find_table)} id={"first_table_2"}>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td colSpan={tableSize}>Таблица координат</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan={6}>Буквы</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Горизонтальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Вертикальная координата</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={classNames(noneActiveTable1, lr5.find_table)} id={"second_table_2"}>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td colSpan={tableSize}>Таблица координат</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan={6}>Горизонтальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Вертикальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Буквы</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={classNames(noneActiveTable1, lr5.result_table)} id={"result_table_2"}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td colSpan={3}>До шифрования</td>
                                                <td colSpan={6}>Привет как дела я нормально</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>После шифрования</td>
                                                <td colSpan={6}>Привет как дела я нормально</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div className={lr5.method}>
                                <div className={lr5.method__title}>Метод 3</div>
                                <div className={lr5.method_input_block}>
                                    <div className={lr5.input_block}>
                                        <input className={classNames(lr1.input, lr5.metod_input)} type="text" placeholder={"Строка"} id={"method3_input"}/>
                                        <input className={classNames(lr1.input, lr5.metod_input)} type="text" placeholder={"Ключ слово"} id={"method3_input1"}/>
                                    </div>
                                    <button onClick={method3}
                                            className={classNames(style.button, style.button_click, lr5.method__button)}
                                            id={"method2_button"}>Ввод
                                    </button>
                                </div>
                                <div className={lr5.method_tables}>
                                    <div className={classNames(noneActiveTable2, lr5.find_table)} id={"first_table_3"}>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td colSpan={tableSize}>Таблица координат</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan={6}>Буквы</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Горизонтальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Вертикальная координата</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={classNames(noneActiveTable2, lr5.find_table)} id={"second_table_3"}>
                                        <table>
                                            <thead>
                                            <tr>
                                                <td colSpan={tableSize}>Таблица координат</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan={6}>Горизонтальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Вертикальная координата</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={6}>Буквы</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={classNames(noneActiveTable2, lr5.result_table)} id={"result_table_3"}>
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td colSpan={3}>До шифрования</td>
                                                <td colSpan={6}>Привет как дела я нормально</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}>После шифрования</td>
                                                <td colSpan={6}>Привет как дела я нормально</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )


}
