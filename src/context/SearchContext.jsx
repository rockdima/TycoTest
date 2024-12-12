import { createContext, useState } from 'react';

export const SearchContext = createContext("");

export default function SearchContextProvider({ children }) {
    const [term, setTerm] = useState("");
    const [itemsToShow, setItemsToShow] = useState(6);

    return (
        <SearchContext.Provider value={{ term, setTerm, itemsToShow, setItemsToShow }}>
            {children}
        </SearchContext.Provider>
    );
}