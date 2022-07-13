import React from 'react'
import styles from './Paginator.module.css'

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    if (currentPage <= 3) {
        for (let i = 1; i <= 7; i++) {
            pages.push(i)
        }
    } else if (currentPage + 3 >= pagesCount) {
        for (let i = (currentPage - 3); i <= pagesCount; i++) {
            pages.push(i)
        }
    } else {
        for (let i = (currentPage - 3); i <= (currentPage + 3); i++) {
            pages.push(i)
        }
    }

    return (
        <div>
            {pages.map(page =>
                <span className={currentPage === page ? styles.selectedPage : ''}
                      onClick={() => onPageChanged(page)}
                      key={page}>
                        {page}
                    </span>
            )}
        </div>
    )
}