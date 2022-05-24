import { createContext, useState } from "react";


const FavouriteContext = createContext();


export const FavouriteProvider = ({ children }) => {
    const [favItems, setFavItems] = useState(JSON.parse(localStorage.getItem('favourite') || "[]"));


    const addItems = (id, title, desc, author, img) => {

        if (favItems.length < 1) {
            setFavItems([{ id, title, desc, author, img }])
        }

    }

    localStorage.setItem('favourite', JSON.stringify(favItems));

    return (
        <FavouriteContext.Provider value={{ favItems, addItems }}>
            {children}
        </FavouriteContext.Provider>
    )

}


export default FavouriteContext;