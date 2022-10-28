import Head from 'next/head'
import styles from '../styles/style.module.css'
import home from '../styles/Home.module.css'

import Link from 'next/link'
import classNames from "classnames";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>
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
