import { Fragment, ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Banner from '~/components/page/home/Banner';
import BaseLayout from '~/components/layout/BaseLayout';
import styles from '~/styles/Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/controls/Button';
import { increment } from '~/redux/reducer/counter';
import { RootState } from '~/redux/store';

const Home = () => {
    const { value } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <Head>
                <title>Trang chu</title>
            </Head>
            <main className={styles.container}>
                <h1 className={styles.title}>Home Page</h1>
                <h3>{value}</h3>
                <Banner />
                <Link href={'/product'}>go to product</Link>
                <Button onClick={() => dispatch(increment())}>Click</Button>
            </main>
        </Fragment>
    );
};

export default Home;

Home.getLayout = function (page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>;
};
