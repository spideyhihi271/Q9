import React from 'react';
import { Link } from 'react-router-dom';
import config from '../../configs';

function NeedSignNotify() {
    return (
        <div className="my-5 lg:my-7 flex flex-wrap dark:text-white">
            <h1>Bạn cần đăng nhập để sử dụng chức năng này</h1>
            <Link to={config.routes.login} className="lg:mx-2 underline">
                Đăng nhập ngay
            </Link>
        </div>
    );
}

export default NeedSignNotify;
