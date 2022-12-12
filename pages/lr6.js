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

import ElGamal from '../MyScripts/elgamal_src';

import {useEffect, useState} from "react";

export default function LR6(){

    const RSAa = require("../MyScripts/RSA")
    const keys = RSAa.generate(250);
    const [buttonText1, setButtonText1] = useState("Зашифровать")
    const [buttonText2, setButtonText2] = useState("Зашифровать")


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


    return(
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
                <div className={style.lab_title}>Лабораторная работа №1</div>
                <div className={lr1.labWorkinArea}>
                    <div className={style.ex_count}>RSA шифрование</div>
                    <input className={classNames(style.input,lr6.rsa_input)} id="input_rsa"/>
                    <button className={classNames(style.button, lr6.rsa_button)} onClick={RSA} id="button_rsa">{buttonText1}</button>
                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <input className={classNames(style.input,lr6.rsa_input)} id="input_el"/>
                    <button className={classNames(style.button, lr6.rsa_button)} onClick={run} id="button_el">{buttonText2}</button>
                </div>
            </main>
        </div>
    )
}