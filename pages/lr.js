import styles from '../styles/Lrs.module.css'
import Link from 'next/link'
import Image from 'next/image'
import rightBiceps from '/public/mainPageLabs/rightBiceps.png'
import leftBiceps from '/public/mainPageLabs/leftBiceps.png'


export default function LR1() {
  return (
    <div className='page'>
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <Link href={"#"} className={styles.button}>
                    На главную  
                </Link>
                <div className={styles.header_logo}>
                    <Image src={leftBiceps} width={105} height={105}/>
                    <div class={styles.header_logotext}>54 тп</div>
                    <Image src={rightBiceps} width={105} height={105}/>
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
                        <a href="#" className={styles.button_lab}>Лабораторная работа №1</a>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №2</a>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №3</a>
                    </div>
                    <div class={styles.labs_buttons}>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №4</a>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №5</a>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №6</a>
                    </div>
                    <div class={styles.labs_buttons}>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №7</a>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №8</a>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №9</a>
                    </div>
                    <div class={styles.labs_buttons}>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №10</a>
                        <a href="#" className={styles.button_lab}>Лабораторная работа №11</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
