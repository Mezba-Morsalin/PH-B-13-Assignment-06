import React from 'react';

const Links = ({navLink}) => {
    return (
        <li><a className='hover:bg-indigo-600 hover:text-white font-bold text-lg p-2 rounded-2xl' href={navLink.path}>{navLink.name}</a></li>
    );
};

export default Links;