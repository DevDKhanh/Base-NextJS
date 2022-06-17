import { Fragment } from 'react';
import { PropsBaseLayout } from './interfaces';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';

function BaseLayout({ children, hiddenFooter, hiddenHeader }: PropsBaseLayout) {
    return (
        <Fragment>
            {!hiddenHeader && <Header />}
            <main>{children}</main>
            {!hiddenFooter && <Footer />}
        </Fragment>
    );
}

export default BaseLayout;
