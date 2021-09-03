import Head from 'next/Head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Post | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared bucket.</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared bucket.</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared bucket.</p>
                    </a>
                    <a href="#">
                        <time>12 de março de 2021</time>
                        <strong>Creating a Monorepo with Lerna and Yarn Workspaces</strong>
                        <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared bucket.</p>
                    </a>
                </div>
            </main>
        </>
    )
}