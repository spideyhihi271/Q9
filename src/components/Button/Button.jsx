import React from 'react';

function Button({
    children,
    to,
    href,
    larger = false,
    small = false,
    onlyIcon = false,
    border = false,
    leftIcon,
}) {
    const Element = 'button';
    const classesDefault = '';
    const classesIcon = 'w-10 h-10 ';
    return (
        <Element
            className={`flex items-center justify-center rounded hover:bg-hoverLight hover:text-light dark:hover:bg-hoverDark dark:hover:text-dark ${
                onlyIcon ? classesIcon : ''
            } ${border ? 'border' : ''} `}
        >
            {children}
        </Element>
    );
}

export default Button;
