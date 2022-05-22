import { useEffect, useState } from 'react';
import { PropsHeader } from './interfaces';

function Header(props: PropsHeader) {
    const [counter, setCount] = useState<number>(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(counter + 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [counter]);

    return <div>Header: {counter}</div>;
}

export default Header;
