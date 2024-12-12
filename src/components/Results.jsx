import React, { useContext } from 'react'
import data from '../../public/cves.json'

import { SearchContext } from '../context/SearchContext';
import { CategoryContext } from '../context/CategoryContext';

import ShowMore from './ShowMore';
import ProgressBar from './ProgressBar';

function Results() {

    const { category } = useContext(CategoryContext);
    const { term, itemsToShow } = useContext(SearchContext);

    const filtered = data
        .filter((cve) => {
            return cve.title.toLowerCase().includes(term.toLowerCase()) && (cve.categories.includes(category) || category === 0);
        })
        .slice(0, itemsToShow)
        .map((cve, index) => (
            <div key={index} className="cve-card">
                <div className='score'>
                    <span className='name'>{cve.priority}</span>
                    <span className='number'>{cve.score}/10</span>
                </div>
                <ProgressBar score={cve.score} />
                <div className='date'>{cve.cve} | {cve.date}</div>
                <div className='titleDesc'>
                    <div className='title'>{cve.title}</div>
                    <div className='desc'>{cve.description}</div>
                </div>
            </div>
        ));

    return (
        <div id='results'>
            {filtered}
            <ShowMore itemsToShow={itemsToShow} />
        </div>
    )
}

export default Results