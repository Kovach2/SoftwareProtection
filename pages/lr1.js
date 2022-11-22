// Components
import PageHead from "../components/head";


// Styles
import lr1 from '../styles/lr1.module.css'
import styles from '../styles/Lrs.module.css'
import style from "../styles/style.module.css";

// Link
import Link from "next/link";

// add more classes on element
import classNames from "classnames";


// Images
import Image from "next/image";
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";


export default function LR1() {
    return (
        <div className={styles.wrapper}>
            <PageHead title={"Лабораторная работа 1"}/>
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
                <div className={style.lab_title}>Лабораторная работа №1</div>
                <div className={lr1.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className={lr1.ex1}>
                        <div className={lr1.exInner}>
                            <div className={lr1.PVT}>
                                <div className={lr1.PVT__input}>
                                    <div className={lr1.input__name}>P=</div>
                                    <div className={lr1.input__block}>
                                        <div className={lr1.input__description}>Поле ввода для вероятности подбора
                                            пароля
                                        </div>
                                        <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                                    </div>
                                </div>
                                <div className={lr1.PVT__input}>
                                    <div className={lr1.input__name}>V=</div>
                                    <div className={lr1.input__block}>
                                        <div className={lr1.input__description}>Поле ввода для скорости перебора
                                            паролей
                                        </div>
                                        <input className={lr1.input} type="text"
                                               placeholder={"Ну вот тут если не понятно"}/>
                                    </div>
                                </div>
                                <div className={lr1.PVT__input}>
                                    <div className={lr1.input__name}>T=</div>
                                    <div className={lr1.input__block}>
                                        <div className={lr1.input__description}>Поле ввода для максимального срока
                                            действия пароля
                                        </div>
                                        <input className={lr1.input} type="text" placeholder={"Да-да, это поле ввода"}/>
                                    </div>
                                </div>
                                <div className={lr1.PVT__input}>
                                    <div className={lr1.input__name}>S=</div>
                                    <div className={lr1.input__block}>
                                        <div className={lr1.input__description}>Поле ввода для рассчета нижней границы
                                            S*
                                        </div>
                                        <input className={lr1.input} type="text" placeholder={"Результат тут"}
                                               readOnly/>
                                    </div>
                                </div>
                                <div className={lr1.PVT__buttons}>
                                    <button className={classNames(style.button, lr1.lr1_button)}>Рассчитать</button>
                                    <button className={classNames(style.button, lr1.lr1_button)}
                                            id={"copyButton"}>Скопировать
                                    </button>
                                </div>
                            </div>
                            <div className={lr1.generate_password}>
                                <div className={lr1.data_input}>
                                    <h1 className={lr1.generate_password_title}></h1>
                                    <div className={lr1.PVT__input}>
                                        <div className={lr1.input__name}>P=</div>
                                        <div className={lr1.input__block}>
                                            <div className={lr1.input__description}>Поле ввода для вероятности подбора
                                                пароля
                                            </div>
                                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                                        </div>
                                    </div>
                                    <div className={lr1.PVT__input}>
                                        <div className={lr1.input__block}>
                                            <div className={lr1.input__description_big}>Сгенерированный пароль</div>
                                            <input className={lr1.input} type="text" placeholder={"Тут будет пароль"}/>
                                        </div>
                                    </div>
                                    <div className={lr1.PVT__buttons}>
                                        <button className={classNames(style.button, lr1.lr1_button)}>Рассчитать</button>
                                        <button className={classNames(style.button, lr1.lr1_button)}
                                                id={"copyButton"}>Скопировать
                                        </button>
                                    </div>
                                </div>
                                <div className={lr1.generate_password_choice}>
                                    <label>
                                        <input id="option1" className={lr1.checkbox} type="checkbox" value="а"/>
                                        <label htmlFor="option1" className={lr1.text}>a...я</label>
                                    </label>
                                    <br/>
                                    <label>
                                        <input id="option2" className={lr1.checkbox} type="checkbox" value="А"/>
                                        <label htmlFor="option2">A...Я</label>
                                    </label>
                                    <br/>
                                    <label>
                                        <input id="opiton3" className={lr1.checkbox} type="checkbox" value="a"/>
                                        <label htmlFor="opiton3">a...z</label>
                                    </label>
                                    <br/>
                                    <label>
                                        <input id="opiton4" className={lr1.checkbox} type="checkbox" value="A"/>
                                        <label htmlFor="opiton4">A...Z</label>
                                    </label>
                                    <br/>
                                    <label>
                                        <input id="opiton5" className={lr1.checkbox} type="checkbox" value="0"/>
                                        <label htmlFor="opiton5">0...9</label>
                                    </label>
                                    <br/>
                                    <label>
                                        <input id="opiton6" className={lr1.checkbox} type="checkbox" value="!"/>
                                        <label htmlFor="opiton6">!...@</label>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 2</div>
                    <div className={lr1.exInner}>
                        <div className={lr1.ex2}>
                            <select className={lr1.choice_variat}>
                                <option value="11">Вариант 11</option>
                                <option value="15">Вариант 15</option>
                            </select>

                            <div className={lr1.flex}>
                                <div className={lr1.ex_condition}>
                                    <div className={lr1.ex_condition__title}>Условие</div>
                                    <div className={lr1.ex_condition__description}>
                                        1. b1,b2...b1+q - случайные символы из множества "!,”,#,$,%,&,’,(,),*", где
                                        Q=Nmod5. <br/>
                                        2. Оставшиеся символы пароля, кроме b9 , - случайные малые буквы русские
                                        алфавита. <br/>
                                        3. b9 - случайная цифра.
                                    </div>
                                </div>
                                <div className={lr1.ex_complete}>
                                    <div>
                                        <input className={lr1.input} type="text" placeholder="Результат тут" readOnly/>
                                    </div>
                                    <div className={lr1.PVT__buttons}>
                                        <button className={classNames(style.button, lr1.lr1_button)}>Сгенерировать</button>
                                        <button className={classNames(style.button, lr1.lr1_button)}
                                                id={"copyButton"}>Скопировать
                                        </button>
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

