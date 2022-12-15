import styles from "../styles/Lrs.module.css";
import PageHead from "../components/head";
import style from "../styles/style.module.css";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";
import lr1 from "../styles/lr1.module.css";
import lr6 from "../styles/lr6.module.css";
import Playfair from '../MyScripts/playfair'
import {useEffect, useState} from "react";
import {array} from "jszip2/lib/support";

const Cezar = async () => {
    let UserText = await document.getElementById('text-to-work');
    let UserSelectStap = await document.getElementById('encrypt-step');
    let result = await document.getElementById('output');
    let Encrypt = await document.getElementById('encrypt-btn');
    let Reset = await document.getElementById('btn-reset');
    let UserStep = Number(UserSelectStap.value);

    let TextToWork;
    let pos;

    let OtherSymbols = [' ', ',', '.', ':', ';', '!', '?', '-', '_', '=', '+', '(', ')', '[', ']', '@', '`', "'", '"', '<', '>', '|', '/', '%', '$', '^', '&', '*', '~'];
    let Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let RusAlfUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    let RusAlfLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    let EngAlfUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let EngAlfLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let RusAlfUpEncrypt = Array(33);
    let RusAlfLowerEncrypt = Array(33);
    let EngAlfUpEncrypt = Array(26);
    let EngAlfLowerEncrypt = Array(26);
    let NumbersEncrypt = Array(10);
    let OtherSymbolsEncrypt = Array(OtherSymbols.length)

    initEncrypt();

    UserSelectStap.addEventListener('change', function () {
        UserStep = Number(this.value);
        initEncrypt();
    });

    function initEncrypt() {
        RusAlfUpEncrypt = CezarEncrypt(UserStep, RusAlfUp);
        RusAlfLowerEncrypt = CezarEncrypt(UserStep, RusAlfLower);
        NumbersEncrypt = CezarEncrypt(UserStep, Numbers);
        EngAlfUpEncrypt = CezarEncrypt(UserStep, EngAlfUp);
        EngAlfLowerEncrypt = CezarEncrypt(UserStep, EngAlfLower);
        OtherSymbolsEncrypt = CezarEncrypt(UserStep, OtherSymbols)
    }

    function CezarEncrypt(stap, arr) {
        let CopyAlf = arr.slice();
        let i = 0;

        while ((i + stap) < (CopyAlf.length)) {
            let buff = CopyAlf[i];
            CopyAlf[i] = CopyAlf[i + stap];
            CopyAlf[i + stap] = buff;
            i++;
        }
        return CopyAlf;
    }


    function contains(symb, arr) {
        let letter = symb;
        pos = 0;
        for (let i = 0; i < arr.length; i++) {
            if (letter === arr[i]) {
                pos = i;
                return true;
                break;
            }
        }
    }

    function encrypt(text) {
        let result = '';
        for (let i = 0; i <= text.length; i++) {
            let symbol = text[i];
            if (contains(symbol, OtherSymbols)) {

                result += OtherSymbolsEncrypt[pos];
            }
            if (contains(symbol, Numbers)) {

                symbol = NumbersEncrypt[pos];
                result += symbol;
            }
            if (contains(symbol, RusAlfUp)) {

                symbol = RusAlfUpEncrypt[pos];
                result += symbol;
            }
            if ((contains(symbol, RusAlfLower))) {

                symbol = RusAlfLowerEncrypt[pos];
                result += symbol;
            }
            if (contains(symbol, EngAlfUp)) {

                symbol = EngAlfUpEncrypt[pos];
                result += symbol;
            }
            if ((contains(symbol, EngAlfLower))) {

                symbol = EngAlfLowerEncrypt[pos];
                result += symbol;
            }
        }
        return result;
    }

    function decrypt(text) {
        let result = '';
        for (let i = 0; i <= text.length; i++) {
            let symbol = text[i];
            if (contains(symbol, OtherSymbols)) {
                result += symbol;
            }
            if (contains(symbol, NumbersEncrypt)) {
                symbol = Numbers[pos];
                result += symbol;
            }
            if (contains(symbol, RusAlfUpEncrypt)) {
                symbol = RusAlfUp[pos];
                result += symbol;
            }
            if ((contains(symbol, RusAlfLowerEncrypt))) {
                symbol = RusAlfLower[pos];
                result += symbol;
            }
            if (contains(symbol, EngAlfUpEncrypt)) {
                symbol = EngAlfUp[pos];
                result += symbol;
            }
            if ((contains(symbol, EngAlfLowerEncrypt))) {
                symbol = EngAlfLower[pos];
                result += symbol;
            }
        }
        return result;
    }

    await Encrypt.addEventListener('click', function () {
        TextToWork = UserText.value;
        result.value = encrypt(TextToWork);
    });
    await Reset.addEventListener('click', function () {
        UserText.value = '';
        result.value = '';
    });
}

const Trisemes = async () =>{
    let UserText = await document.getElementById('text-to-workT');
    let UserSelectStap = await document.getElementById('encrypt-step-formulaT');
    let UserSelectA = await document.getElementById('encrypt-step-A');
    let UserSelectB = await document.getElementById('encrypt-step-B');
    let UserSelectC = await document.getElementById('encrypt-step-C');
    let result = await document.getElementById('outputT');
    let Encrypt = await document.getElementById('encrypt-btnT');
    let Reset = await document.getElementById('btn-resetT');
    let A;
    let B;
    let C;
    let first = false
    let second = false
    if (UserSelectStap.value === "k=A*p+B"){
        if(UserSelectA.value === "A" || UserSelectB.value === "B"){
            alert("Не все данные выбраны корректно")
        }else{
            A = UserSelectA.value
            B = UserSelectB.value
            first = true
        }
    }else{
        if(UserSelectA.value === "A" || UserSelectB.value === "B" || UserSelectC.value === "C"){
            alert("Не все данные выбраны корректно")
        }else{
            A = UserSelectA.value
            B = UserSelectB.value
            C = UserSelectC.value
            second = true
        }
    }


    let TextToWork;
    let pos;

    let OtherSymbols = [' ', ',', '.', ':', ';', '!', '?', '-', '_', '=', '+', '(', ')', '[', ']', '@', '`', "'", '"', '<', '>', '|', '/', '%', '$', '^', '&', '*', '~'];
    let Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let RusAlfUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    let RusAlfLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    let EngAlfUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let EngAlfLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // let RusAlfUpEncrypt = Array(33);
    // let RusAlfLowerEncrypt = Array(33);
    // let EngAlfUpEncrypt = Array(26);
    // let EngAlfLowerEncrypt = Array(26);
    // let NumbersEncrypt = Array(10);
    // let OtherSymbolsEncrypt = Array(OtherSymbols.length)
    //
    // initEncrypt();
    //
    // UserSelectStap.addEventListener('change', function () {
    //     UserStep = Number(this.value);
    //     initEncrypt();
    // });

    // function initEncrypt() {
    //     RusAlfUpEncrypt = CezarEncrypt(UserStep, RusAlfUp);
    //     RusAlfLowerEncrypt = CezarEncrypt(UserStep, RusAlfLower);
    //     NumbersEncrypt = CezarEncrypt(UserStep, Numbers);
    //     EngAlfUpEncrypt = CezarEncrypt(UserStep, EngAlfUp);
    //     EngAlfLowerEncrypt = CezarEncrypt(UserStep, EngAlfLower);
    //     OtherSymbolsEncrypt = CezarEncrypt(UserStep, OtherSymbols)
    // }

    // function CezarEncrypt(stap, arr) {
    //     let CopyAlf = arr.slice();
    //     let i = 0;
    //
    //     while ((i + stap) < (CopyAlf.length)) {
    //         let buff = CopyAlf[i];
    //         CopyAlf[i] = CopyAlf[i + stap];
    //         CopyAlf[i + stap] = buff;
    //         i++;
    //     }
    //     return CopyAlf;
    // }

    let key
    function contains(symb, arr) {
        let letter = symb;
        pos = 0;
        for (let i = 0; i < arr.length; i++) {
            if (letter === arr[i]) {
                pos = i;
                if (first){
                    key = (A*pos)+B
                }else{
                    key = A*(pos**2)+B*pos+C
                }

                return true;
            }
        }
    }


    function RetPos(arr){
        return Math.floor((pos+key)%arr.length)
    }

    function encrypt(text) {
        let result = '';
        for (let i = 0; i <= text.length; i++) {
            let symbol = text[i];
            if (contains(symbol, OtherSymbols)) {
                result += OtherSymbols[RetPos(OtherSymbols)];
            }
            if (contains(symbol, Numbers)) {
                symbol = Numbers[RetPos(Numbers)];
                result += symbol;
            }
            if (contains(symbol, RusAlfUp)) {
                symbol = RusAlfUp[RetPos(RusAlfUp)];
                result += symbol;
            }
            if ((contains(symbol, RusAlfLower))) {
                symbol = RusAlfLower[RetPos(RusAlfLower)];
                result += symbol;
            }
            if (contains(symbol, EngAlfUp)) {
                symbol = EngAlfUp[RetPos(EngAlfUp)];
                result += symbol;
            }
            if ((contains(symbol, EngAlfLower))) {
                symbol = EngAlfLower[RetPos(EngAlfLower)];
                result += symbol;
            }
        }
        return result;
    }

    await Encrypt.addEventListener('click', function () {
        TextToWork = UserText.value;
        result.value = encrypt(TextToWork);
    });
    await Reset.addEventListener('click', function () {
        UserText.value = '';
        result.value = '';
    });
}



const pf = new Playfair()

const plEnc = () =>{
    const key = $("#KeyPl")
    const line = $("#pleyfor")
    pf.setKey(key.val())
    line.val(pf.process({input: line.val()}))
}

const plDec = () =>{
    const key = $("#KeyPl").val()
    const line = $("#pleyfor")
    pf.setKey(key)
    line.val(pf.process({input: line.val(), decrypt:true}).replace("X",""))
}



export default function LR3() {

    return (
        <div className={styles.wrapper}>
            <PageHead title={"Лабораторная работа 3"}/>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <Link href={"/"} className={classNames(style.button, style.button_header)}>
                        На главную
                    </Link>
                    <div className={style.header_logo}>
                        <Image className={style.Biceps} src={leftBiceps} width={80} height={80} alt={"LeftBiceps"}/>
                        <div className={style.header_logotext}>54 тп</div>
                        <Image className={style.Biceps} src={rightBiceps} width={80} height={80} alt={"RightBiceps"}/>
                    </div>
                    <Link href={"#"} className={classNames(style.button, style.button_header)}>
                        Документация
                    </Link>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.lab_title}>Лабораторная работа №1</div>
                <div className={lr1.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <div id="encrypt-block">
                                    <h3>Введите текст: </h3>
                                    <textarea name="user-text" id="text-to-work" cols="40" rows="3"></textarea>
                                    <br/><br/>
                                    <div className="form-group">
                                        <button className="btn btn-primary" id="encrypt-btn" onClick={Cezar}>Зашифровать</button>
                                        <button className="btn btn-danger" id="btn-reset">Очистить</button>
                                    </div>
                                    <h4>Шаг сдвига:</h4>
                                    <select name="user_step" id="encrypt-step" size="1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option selected>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3>Результат:</h3>
                                <textarea readOnly id="output" cols="40" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-md-6">
                                <div id="encrypt-blockT">
                                    <h3>Введите текст: </h3>
                                    <textarea name="user-text" id="text-to-workT" cols="40" rows="3"></textarea>
                                    <br/><br/>
                                    <div className="form-group">
                                        <button className="btn btn-primary" id="encrypt-btnT" onClick={Trisemes}>Зашифровать</button>
                                        <button className="btn btn-danger" id="btn-resetT">Очистить</button>
                                    </div>
                                    <h4>Шаг сдвига:</h4>
                                    <select name="user_step" id="encrypt-step-formulaT" size="1">
                                        <option selected>k=A*p+B</option>
                                        <option>k=A*p^2+B*p+C</option>
                                    </select>
                                    <select name="user_step" id="encrypt-step-A" size="1">
                                        <option selected>A</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                    </select>
                                    <select name="user_step" id="encrypt-step-B" size="1">
                                        <option selected>B</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                    </select>
                                    <select name="user_step" id="encrypt-step-C" size="1">
                                        <option selected>C</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h3>Результат:</h3>
                                <textarea readOnly id="outputT" cols="40" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 3</div>
                    <input type="text" className={classNames(style.input, lr6.rsa_input, "mb-5")} id="KeyPl" placeholder={"Ключ"}/>
                    <input type="text" className={classNames(style.input, lr6.rsa_input, "mb-5")} id="pleyfor" placeholder={"Строка"}/>
                    <div className="d-flex mb-5" style={{width: 750 + "px", margin: "auto"}}>
                        <button className={classNames(style.button, "ml-5")} onClick={plEnc}>Зашифровать</button>
                        <button className={style.button} onClick={plDec}>Расшифровать</button>
                    </div>
                </div>
            </main>
        </div>
    )
}