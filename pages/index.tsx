import { Fragment, ReactElement } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Banner from '~/components/page/home/Banner';
import BaseLayout from '~/components/layout/BaseLayout';
import styles from '~/styles/Home.module.scss';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Trang chu</title>
            </Head>

            <h1 className={styles.title}>Home Page</h1>
            <Banner />
            <Link href={'/product'}>go to product</Link>
        </Fragment>
    );
};

export default Home;

Home.getLayout = function (page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>;
};
