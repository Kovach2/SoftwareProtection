import styles from "../styles/Lrs.module.css";
import PageHead from "../components/head";
import style from "../styles/style.module.css";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import leftBiceps from "../public/mainPageLabs/leftBiceps.png";
import rightBiceps from "../public/mainPageLabs/rightBiceps.png";
import lr1 from '../styles/lr1.module.css'
import lr9 from '../styles/lr9.module.css'


export default function LR1() {

    const ex1 = () =>{
        let bool = true
        let inputs = document.querySelectorAll(".lr1_input__oIl9t")
        for (let i = 0; i < 5; i++) {
            if(inputs[i].value === "" || !Number(inputs[i].value)){
                bool = false
            }
        }
        if(bool){
            let n = inputs[0].value
            let k = inputs[1].value
            let s = inputs[2].value
            let m = inputs[3].value
            let v = inputs[4].value
            let C = n**k
            let t = C/s
            let T = (t*v)/m
            inputs[5].value = Math.floor((t+T)/60/60/24) + " Дней"

        }else{
            alert("Ошибка ввода")
        }
    }

    const ex2 = () =>{
        let bool = true
        let inputs = document.querySelectorAll(".lr1_input__oIl9t")

        for (let i = 6; i < 8; i++) {
            console.log(inputs[i].value)
            if(inputs[i].value === "" || !Number(inputs[i].value)){
                bool = false
            }
        }
        if(bool){
            let n = inputs[6].value
            let t = inputs[7].value
            let s = inputs[8].value
            let C = t*s*365*24*60*60
            let k = Math.log10(C)
            inputs[9].value = Math.floor(k) + " Дней"

        }else{
            alert("Ошибка ввода")
        }

    }

    const ex3 = () =>{
        let bool = true
        let inputs = document.querySelectorAll(".lr1_input__oIl9t")

        for (let i = 10; i < 13; i++) {
            console.log(inputs[i].value)
            if(inputs[i].value === "" || !Number(inputs[i].value)){
                bool = false
            }
        }
        if(bool){
            let k = inputs[10].value
            let t = inputs[11].value
            let s = inputs[12].value
            let f = t * 365 *24 * 60 * 60 * s
            inputs[13].value = Math.floor(Math.pow(f,1.0/k)) + " Символов"

        }else{
            alert("Ошибка ввода")
        }

    }



    return (
        <div className={styles.wrapper}>
            <PageHead title={"Лабораторная работа 1\9"}/>
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
                <div className={style.lab_title}>Лабораторная работа №9</div>
                <div className={lr1.labWorkinArea}>
                    <div className={style.ex_count}>Задание 1</div>
                    <div className={lr9.container}>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>n=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>k=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>s=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={classNames(lr1.PVT__input, lr9.ml_5)}>
                            <div className={lr1.input__name}>m=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>

                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>v=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <input className={lr1.input} type="text" placeholder={"Результат"}/>
                        </div>
                        <button className={"p-2"} onClick={ex1}>Рассчитать</button>
                    </div>

                    <hr className={lr1.devision_line}/>

                    <div className={style.ex_count}>Задание 2</div>
                    <div className={lr9.container}>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>n=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>t=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>s=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <input className={lr1.input} type="text" placeholder={"Результат"}/>
                        </div>
                        <button className={"p-2"} onClick={ex2}>Рассчитать</button>
                    </div>
                    <hr className={lr1.devision_line}/>
                    <div className={style.ex_count}>Задание 3</div>
                    <div className={lr9.container}>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>k=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>t=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <div className={lr1.input__name}>s=</div>
                            <input className={lr1.input} type="text" placeholder={"Вводить тут"}/>
                        </div>
                        <div className={lr1.PVT__input}>
                            <input className={lr1.input} type="text" placeholder={"Результат"}/>
                        </div>
                        <button className={"p-2"} onClick={ex3}>Рассчитать</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
