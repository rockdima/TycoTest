import { createContext, useState } from 'react';

export const CategoryContext = createContext(0);

export default function CategoryContextProvider({ children }) {
    const [category, setCategory] = useState(0);

    return (
        <CategoryContext.Provider value={{ category, setCategory }}>
            {children}
        </CategoryContext.Provider>
    );
}