import styles from "../styles/Lrs.module.css";
import PageHead from "../components/head";
import style from "../styles/style.module.css";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";
import lr1 from "../styles/lr1.module.css";
import md5 from "blueimp-md5"
import lr6 from "../styles/lr6.module.css";


// алгоритм Диффи Хеллмана
import { Client } from 'diffie-hellman-ts'
const alice = new Client()
const bob = new Client()
const alicePublicsNumber = alice.generatePublicNumber()
console.log(alicePublicsNumber + " - Номер алисы\n\n\n")
const bobPublicsNumber = bob.generatePublicNumber()
console.log(bobPublicsNumber + " - Номер боба\n\n\n")
const aliceBobSharedKey = alice.generateSharedSecret(bobPublicsNumber)
const aliceBobSharedKeey = bob.generateSharedSecret(alicePublicsNumber)
console.log(aliceBobSharedKey, aliceBobSharedKeey)


export default function LR7() {
    const md = () =>{
        const input = $("#mdinp")
        input.val(md5(input.val()))
    }

    return (
        <div className={styles.wrapper}>
            <PageHead title={"Лабораторная работа 7"}/>
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
                <div className={style.lab_title}>Лабораторная работа №7</div>
                <div className={lr1.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <p className="text-center">Данное задание генерируется в консоль из-за того, что там очень большие цифры и их нет смысла пихать на страницу, объяснять надо по коду</p>
                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <input type="text" className={classNames(style.input, lr6.rsa_input, "mb-5")} id={"mdinp"} placeholder={"Строка"}/>
                    <div className="text-center mb-5">
                        <button className="btn btn-primary" onClick={md}>Зашифровать</button>
                    </div>

                </div>
            </main>
        </div>
    )
}