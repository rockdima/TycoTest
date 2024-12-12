import { useContext, useState } from 'react';
import './styles/App.scss';

import SearchFilter from './components/SearchFilter';
import CategoryFilter from './components/CategoryFilter';
import Results from './components/results';

import SearchContextProvider from './context/SearchContext';
import CategoryContextProvider from './context/CategoryContext';


const App = () => {

    return (
        <main>
            <SearchContextProvider>
                <CategoryContextProvider>
                    <div id="top">
                        <SearchFilter />
                    </div>
                    <div id="middle">
                        <h2>Search Results</h2>
                        <CategoryFilter />
                    </div>
                    <div id='buttom'>
                        <Results />
                    </div>
                </CategoryContextProvider>
            </SearchContextProvider>
        </main>
    );
};

export default App;
