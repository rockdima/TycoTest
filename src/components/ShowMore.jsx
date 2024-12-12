import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';


function ShowMore() {
    const { itemsToShow, setItemsToShow } = useContext(SearchContext);
    return (
        <div className='showMoreBox'>
            <button className='showMore'
                onClick={() => setItemsToShow(itemsToShow + 6)}
            >Show More</button>
        </div>
    )
}

export default ShowMore