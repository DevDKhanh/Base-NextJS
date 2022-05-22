import Link from 'next/link';
import type { NextPage } from 'next';

import Banner from '~/components/page/home/Banner';

import styles from '../styles/Home.module.scss';
import { Fragment } from 'react';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Trang chu</title>
            </Head>
            <main className={styles.container}>
                <h1 className={styles.title}>Home Page</h1>
                <Banner />
                <Link href={'/product'}>go to product</Link>
            </main>
        </Fragment>
    );
};

export default Home;
