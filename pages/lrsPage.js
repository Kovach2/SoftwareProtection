import styles from '../styles/Lrs.module.css'
import Link from 'next/link'
import Image from 'next/image'
import rightBiceps from '../public/mainPageLabs/rightBiceps.png'
import leftBiceps from '../public/mainPageLabs/leftBiceps.png'
import PageHead from "../components/head";


export default function LRS() {
    return (
        <div className={styles.page}>
            <PageHead title={"Лабораторные работы"}/>
            <header className={styles.header}>
                <div className={styles.header_inner}>
                    <Link href={"/"} className={styles.button}>
                        На главную
                    </Link>
                    <div className={styles.header_logo}>
                        <Image className={styles.leftBiceps} src={leftBiceps} width={80} height={80}/>
                        <div className={styles.header_logotext}>54 тп</div>
                        <Image className={styles.rightBiceps} src={rightBiceps} width={80} height={80}/>
                    </div>
                    <Link href={"#"} className={styles.button}>
                        Документация
                    </Link>
                </div>
            </header>
            <div className={styles.wrapper}>
                <div className={styles.page_labs}>
                    <div className={styles.page__innerlabs}>
                        <div className={styles.page__title}>
                            Лабораторные работы от Жекича и Егорыча
                        </div>
                        <div className={styles.labs_bg}>
                            <div className={styles.labs_buttons}>
                                <Link href={"lr1"} className={styles.button_lab}>Лабораторная работа №1</Link>
                                <Link href={"lr6"} className={styles.button_lab}>Лабораторная работа №6</Link>

                            </div>
                            <div class={styles.labs_buttons}>
                                <Link href={"lr2"} className={styles.button_lab}>Лабораторная работа №2</Link>
                                <Link href={"lr7"} className={styles.button_lab}>Лабораторная работа №7</Link>

                            </div>
                            <div class={styles.labs_buttons}>
                                <Link href={"lr3"} className={styles.button_lab}>Лабораторная работа №3</Link>
                                <Link href={"lr8"} className={styles.button_lab}>Лабораторная работа №8</Link>


                            </div>
                            <div class={styles.labs_buttons}>
                                <Link href={"lr4"} className={styles.button_lab}>Лабораторная работа №4</Link>
                                <Link href={"lr9"} className={styles.button_lab}>Лабораторная работа №9</Link>
                            </div>
                            <div className={styles.labs_buttons}>
                                <Link href={"lr5"} className={styles.button_lab}>Лабораторная работа №5</Link>
                                <Link href={"lr10"} className={styles.button_lab}>Лабораторная работа №10</Link>
                            </div>
                            <div className={styles.labs_buttons}>
                                <Link href={"lr11"} className={styles.button_lab}>Лабораторная работа №11</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
