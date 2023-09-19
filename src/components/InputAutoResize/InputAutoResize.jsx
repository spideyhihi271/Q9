import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

function InputAutoResize({ value, setValue, placeholder }) {
    return (
        <TextareaAutosize
            placeholder={placeholder}
            className="p-2 w-full h-full min-h-[50px] text-sm resize-none outline-none bg-transparent dark:text-white"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            minRows={1}
            maxRows={10}
            aria-placeholder="Xin chào"
        />
    );
}

export default InputAutoResize;
