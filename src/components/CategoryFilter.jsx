import React, {useContext} from 'react';
import {CategoryContext} from '../context/CategoryContext';
import categories from '../../public/categories.json';

function CategoryFilter() {

    const { category, setCategory } = useContext(CategoryContext);

    const list = categories.map((category) => 
        <div key={category.id} className='category-item'>
            <input 
                type="radio" 
                id={category.id} 
                name="category"
                className='category-radio'
                onChange={() => setCategory(category.id)}
            />
            <label htmlFor={category.id}>{category.title}</label>
        </div>
    );

  return (
    <>
        <div id="category-filter">
            {list}
        </div>
    </>
  )
}

export default CategoryFilter