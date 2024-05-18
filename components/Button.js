import React from 'react';

export default function Button({ href, variant = 'primary', children }) {
    let className = `mt-8 px-6 py-3 border border-purple-500 bg-black hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:border-0 to-lime-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ` 
        + 'text-xs text-white/90 font-semibold drop-shadow-lg rounded-xl';

    return href.startsWith('http') || href.startsWith('www')
        ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
        : <button type="button" className={className}>{children}</button>;
}