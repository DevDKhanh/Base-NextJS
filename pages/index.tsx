import { Fragment, ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Banner from '~/components/page/home/Banner';
import BaseLayout from '~/components/layout/BaseLayout';
import styles from '~/styles/Home.module.scss';

const Home = () => {
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

Home.getLayout = function (page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>;
};
