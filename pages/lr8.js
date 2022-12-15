import styles from "../styles/Lrs.module.css";
import PageHead from "../components/head";
import style from "../styles/style.module.css";
import lr1 from '../styles/lr1.module.css'
import lr8 from '../styles/lr8.module.css'
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";

import i1 from "../public/lr8/1.png"
import i2 from "../public/lr8/2.png"
import i3 from "../public/lr8/3.png"
import i4 from "../public/lr8/4.png"
import i5 from "../public/lr8/5.png"
import i6 from "../public/lr8/6.png"
import i7 from "../public/lr8/7.png"
import i8 from "../public/lr8/8.png"


export default function LR1() {
    return (
        <div className={styles.wrapper}>
            <PageHead title={"Лабораторная работа 8"}/>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <Link href={"/"} className={classNames(style.button, style.button_header)}>
                        На главную
                    </Link>
                    <div className={style.header_logo}>
                        <Image className={style.Biceps} src={leftBiceps} width={80} height={80} alt="left"/>
                        <div className={style.header_logotext}>54 тп</div>
                        <Image className={style.Biceps} src={rightBiceps} width={80} height={80} alt="rigth"/>
                    </div>
                    <Link href={"#"} className={classNames(style.button, style.button_header)}>
                        Документация
                    </Link>
                </div>
            </header>
            <main className={style.main}>
                <div className={style.lab_title}>Лабораторная работа №8</div>
                <div className={lr1.labWorkinArea}>
                    <Image src={i1} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                    <Image src={i2} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                    <Image src={i3} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                    <Image src={i4} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                    <Image src={i5} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                    <Image src={i6} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                    <Image src={i7} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                    <Image src={i8} width={100 + "%"} height={100 + "%"} className={lr8.image}></Image>
                </div>
            </main>
        </div>
    )
}
