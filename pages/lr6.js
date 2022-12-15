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


import {useEffect, useState} from "react";

export default function LR6() {
    const RSAa = require("../MyScripts/RSA")
    const keys = RSAa.generate(250);

    const [buttonText1, setButtonText1] = useState("Зашифровать")
    const [buttonText2, setButtonText2] = useState("Зашифровать")
    const [DsNone, setDsNone] = useState("")
    const [decript, setDecript] = useState("")

    const RSA = () =>{
        let input = $("#input_rsa")
        if(input.val() !== ""){
            let message = input.val()
            if(buttonText1 === "Зашифровать"){
                const encoded_message = RSAa.encode(message);
                input.val(encoded_message)
                setButtonText1("Расшифровать")
            }else{
                const decoded_message = RSAa.decode(message);
                input.val(decoded_message)
                setButtonText1("Зашифровать")
            }
        }else{
            alert("Введите строку для шифрования")
        }
    }


    function NOD () {
        let x = arguments[0]
        for (let i = 1; i < arguments.length; i++) {
            let y = arguments[i];
            while (x && y) {
                x > y ? x %= y : y %= x;
            }
            x += y;
        }
        return x;
    }

    function el() {

        let p = Number($("#P").val())
        let message = $("#input_el")
        if (!prov(p)) {
            alert("Неправильно введено значение P")
        } else {
            if (buttonText2 === "Зашифровать") {

                if (Number(message.val()) < 10 && Number(message.val()) > -1 && message !== "") {
                    let g = Math.floor(Math.random() * (p - 2 + 1)) + 2;
                    let x = Math.floor(Math.random() * (p - 2 + 1)) + 2;
                    let y = (g ** x) % p
                    console.log(g)
                    let k = Math.floor(Math.random() * ((p - 1) - 2 + 1)) + 2;
                    let a = (g ** k) % p
                    let b = ((y ** k) * message.val()) % p
                    setDecript([a,b,x,p])
                    message.val("(" + a + "," + b + ")")
                    setButtonText2("Расшифровать")
                    setDsNone("lr6_none__6e_Xq")

                }else {
                    alert("Введите число от 0 до 9")
                }

            } else{
                setButtonText2("Зашифровать")
                setDsNone("")
                let decrypt = (decript[1] * Math.pow(decript[0], decript[3]-1-decript[2])) % decript[3]
                setDecript("")
                $("#P").val("")
                message.val(decrypt)
            }

        }

    }

    return (
        <div className={styles.wrapper}>
            <PageHead title={"Лабораторная работа 6"}/>
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
                <div className={style.lab_title}>Лабораторная работа №6</div>
                <div className={lr1.labWorkinArea}>
                    <div className={style.ex_count}>RSA шифрование</div>
                    <div className={lr6.ex2_container}>
                        <div className={lr6.input_block}>
                            <input type="text" className={classNames(style.input, lr6.message_input) } id={"input_rsa"} placeholder={"Сообщение"}/>
                        </div>
                        <button className={classNames(style.button, lr6.rsa_button)}
                                id="button_rsa" onClick={RSA}>{buttonText2}</button>
                    </div>
                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <div className={lr6.wrapper}>
                        <div className={lr6.ex2_container}>
                            <div className={classNames(lr6.input_block, DsNone)}>
                                <span className={lr6.input_block_span}>P=</span>
                                <input type="text" className={classNames(style.input, lr6.input_block_input)} id={"P"}
                                       placeholder={"Введите простое число"}/>
                            </div>
                            <div className={lr6.input_block}>
                                <input type="text" className={classNames(style.input, lr6.message_input)} id={"input_el"} placeholder={"Сообщение"}/>
                            </div>
                            <button className={classNames(style.button, lr6.rsa_button)} onClick={el}
                                    id="button_rsa">{buttonText2}</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}