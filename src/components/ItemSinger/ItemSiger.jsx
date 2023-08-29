import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../configs';

function ItemSiger() {
    return (
        <Link to={config.routes.profile}>
            <img
                className="w-40 h-w-40 object-cover rounded-full"
                src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/08/01/b/e/a/1/1659321743301_600.jpg"
                alt=""
            />
            <main className="text-center">
                <h3 className="mt-2 font-medium dark:text-white hover:underline">
                    Grey D
                </h3>
                <p className=" font-medium text-gray-500 text-sm">
                    1,77 Tr người đăng kí
                </p>
            </main>
        </Link>
    );
}

export default ItemSiger;
