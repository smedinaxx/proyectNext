import React from 'react';

export default function Button({ href, variant = 'primary', children }) {
    let className = `mt-16 md:mt-34 lg:mt-24 px-6 py-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ` 
        + 'text-md text-neutral-300 underline hover:text-white';

    return href.startsWith('http') || href.startsWith('www')
        ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>
        : <button type="button" className={className}>{children}</button>;
}