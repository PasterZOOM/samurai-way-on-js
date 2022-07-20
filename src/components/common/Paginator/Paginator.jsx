import React, {useState} from 'react'
import styles from './Paginator.module.css'

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged}) => {
    const [page, setPage] = useState(currentPage)

    let pagesCount = Math.ceil(totalItemsCount / pageSize)
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

    const inChangeInputNumberHandler = (e) => {
        if (e.currentTarget.valueAsNumber > pagesCount) setPage(pagesCount)
        else if (e.currentTarget.valueAsNumber < 1) setPage(1)
        else setPage(e.currentTarget.valueAsNumber)
    }
    const onKeyEnter = (e) => {
        e.key === 'Enter' && onPageChanged(page)
    }

    return (
        <div>
            {pages.map(page =>
                <span className={currentPage === page ? styles.selectedPage : styles.page}
                      onClick={() => onPageChanged(page)}
                      key={page}>
                        {page}
                    </span>
            )}
            <input type="number" min={1} max={pagesCount} value={page}
                   onChange={inChangeInputNumberHandler}
                   onKeyUp={onKeyEnter}/>
            <button onClick={() => onPageChanged(page)}>go</button>
        </div>
    )
}