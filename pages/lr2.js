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
            <main className={lr2.main}>
                <div className={style.lab_title}>Лабораторная работа №2</div>
                <div className={style.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className={lr2.ex1}>
                        <div className={lr2.ex1_inner}>
                            <div className={lr2.inputs}>
                                <div className={lr2.inputs_line}>
                                    <input type="text" placeholder="Поле ввода строки" className={style.input}/>
                                    <button className={classNames(style.button, style.button_click, lr2.button_click)}>Сгенерировать
                                        размеры таблиц
                                    </button>
                                </div>
                                <div className={lr2.table_inner}>
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
                                    <input type="text" placeholder="Результат" className={style.input} readOnly/>
                                    <button className={classNames(style.button, style.button_click, lr2.button_click)}>
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
                                <table className={lr2.table}>
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
                                    <input type="text" placeholder="Поле ввода строки" className={style.input}/>
                                    <button className={classNames(style.button, style.button_click, lr2.button_click, lr2.button_click_ex2)}>Сгенерировать</button>
                                    <input type="text" placeholder="Результат" className={style.input} readOnly/>
                                </div>
                            </div>
                        </lr2>
                    </div>
                </div>
            </main>
        </div>
    )
}
