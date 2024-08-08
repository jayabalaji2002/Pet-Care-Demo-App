import React, { useState } from 'react'

export default function Pagination(postsPerPage, totalPosts, paginate) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    const handlePageClick =(number)=>{
        setActivePage(number);
        paginate(number)
    }

    return (
        <div>
            <ul className='pagination'>
                {pageNumber.map((number) => {
                    <li key={number}>
                        <a onClick={() => {
                            handlePageClick(number);
                            paginate(number)
                        }} href='!#' className='page-link'>{number}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}
