import { ReactElement } from 'react';
import BaseLayout from '~/components/layout/BaseLayout';
import ListProduct from '~/components/page/product/ListProduct';
import style from './ProductPage.module.scss';

function ProductPage() {
    return (
        <div>
            <ListProduct />
        </div>
    );
}

export default ProductPage;

ProductPage.getLayout = function (page: ReactElement) {
    return <BaseLayout hiddenFooter>{page}</BaseLayout>;
};
