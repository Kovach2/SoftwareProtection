import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
            </Head>
            <main className={styles.home}>
                <h1 className={styles.title}>Software protection</h1>
                <div className={styles.buttons}>
                    <div className={styles.buttons_line}>
                        <Link href={"lrsPage"} className={styles.button_lr}>Лабораторные работы</Link>
                        <Link href={"#"} className={styles.button}>Документация</Link>
                    </div>
                    <div className={styles.buttons_lineUnder}><Link href={"#"} className={styles.button}>Разработчики</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
