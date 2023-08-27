import React from 'react';

function Button({ children, icon }) {
    let Comp = 'button';
    return (
        <Comp className="h-10 w-full border-[2px] dark:border-transparent dark:text-white rounded-3xl dark:bg-secondDark dark:hover:bg-hoverDark transition-colors">
            {icon && <span className="mr-2">{icon}</span>}
            <span className="text-sm">{children}</span>
        </Comp>
    );
}

export default Button;
