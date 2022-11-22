import Head from 'next/head'
import styles from '../styles/style.module.css'
import home from '../styles/Home.module.css'

import Link from 'next/link'
import classNames from "classnames";
import PageHead from "../components/head";

export default function Home() {
    return (
        <div className={styles.container}>
            <PageHead title={"Главная"}/>
            <main className={home.home}>
                <h1 className={home.title}>Software protection</h1>
                <div className={home.buttons}>
                    <div className={home.buttons_line}>
                        <Link href={"lrsPage"} className={home.button_lr}>Лабораторные работы</Link>
                        <Link href={"#"} className={classNames(styles.button, home.button)}>Документация</Link>
                    </div>
                    <div className={home.buttons_lineUnder}><Link href={"#"} className={classNames( home.button, styles.button)}>Разработчики</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
