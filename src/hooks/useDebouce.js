import { useEffect } from 'react';
import { useState } from 'react';

function useDebouce(value, delay) {
    const [result, setResult] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setResult(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return result;
}

export default useDebouce;
