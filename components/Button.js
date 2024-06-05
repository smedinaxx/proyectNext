import React from 'react';

export default function Button({ buttonText }) {
    return (
        <button
            type="submit"
            className='text-white text-sm border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 py-2 rounded-xl mt-6 md:mt-34 lg:mt-12 px-6 mb-2 mx-auto'
        >
            {buttonText}
        </button>
    );
}
