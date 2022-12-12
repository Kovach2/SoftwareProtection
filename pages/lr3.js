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

const Cezar = async () => {
    var UserText = await document.getElementById('text-to-work');
    var UserSelectStap = await document.getElementById('encrypt-step');
    var result = await document.getElementById('output');
    var Encrypt = await document.getElementById('encrypt-btn');
    var Decrypt = await document.getElementById('decrypt-btn');
    var Reset = await document.getElementById('btn-reset');
    var UserStep = Number(UserSelectStap.value);

    var TextToWork;
    var pos;

    var OtherSymbols = [' ', ',', '.', ':', ';', '!', '?', '-', '_', '=', '+', '(', ')', '[', ']', '@', '`', "'", '"', '<', '>', '|', '/', '%', '$', '^', '&', '*', '~'];
    var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var RusAlfUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    var RusAlfLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    var EngAlfUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var EngAlfLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var UkrAlfUp = ['А','Б','В','Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я'];
// var UkrAlfLower = ['а','б','в','г','ґ','д','е','є','ж','з','и','і','ї','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ь','ю','я'];
    var RusAlfUpEncrypt = Array(33);
    var RusAlfLowerEncrypt = Array(33);
    var EngAlfUpEncrypt = Array(26);
    var EngAlfLowerEncrypt = Array(26);
// var UkrAlfUpEncrypt = Array(33);
// var UkrAlfLowerEncrypt = Array(33);
    var NumbersEncrypt = Array(10);

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
    }

// UkrAlfUpEncrypt = CezarEncrypt(3, UkrAlfUp);
// UkrAlfLowerEncrypt = CezarEncrypt(3, UkrAlfLower);

    function CezarEncrypt(stap, arr) {
        var CopyAlf = arr.slice();
        var i = 0;

        while ((i + stap) < (CopyAlf.length)) {
            var buff = CopyAlf[i];
            CopyAlf[i] = CopyAlf[i + stap];
            CopyAlf[i + stap] = buff;
            i++;
        }
        return CopyAlf;
    }

// console.log(RusAlfUp);
// console.log(RusAlfUpEncrypt);
// console.log(RusAlfLower);
// console.log(RusAlfLowerEncrypt);

    function contains(symb, arr) {
        var letter = symb;
        pos = 0;
        for (var i = 0; i < arr.length; i++) {
            if (letter === arr[i]) {
                pos = i;
                return true;
                break;
            }
        }
    }

    function encrypt(text) {
        var result = '';
        for (var i = 0; i <= text.length; i++) {
            var symbol = text[i];
            if (contains(symbol, OtherSymbols)) {
                result += symbol;
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
            // if (contains(symbol, UkrAlfUp)) {
            //     symbol = UkrAlfUpEncrypt[pos];
            //     result += symbol;
            // }
            // if ((contains(symbol, UkrAlfLower))) {
            //     symbol = UkrAlfLowerEncrypt[pos];
            //     result += symbol;
            // }
        }
        return result;
    }

    function decrypt(text) {
        var result = '';
        for (var i = 0; i <= text.length; i++) {
            var symbol = text[i];
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
            // if (contains(symbol, UkrAlfUpEncrypt)) {
            //     symbol = UkrAlfUp[pos];
            //     result += symbol;
            // }
            // if ((contains(symbol, UkrAlfLowerEncrypt))) {
            //     symbol = UkrAlfLower[pos];
            //     result += symbol;
            // }
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
    line.val(pf.process({input: line.val(), decrypt:true}))
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