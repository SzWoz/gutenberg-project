import { createContext, useState } from "react";


const FavouriteContext = createContext();


export const FavouriteProvider = ({ children }) => {
    const [favItems, setFavItems] = useState(JSON.parse(localStorage.getItem('favourite') || "[]"));


    const addItems = (id, title, desc, author, img) => {


        if (favItems.length < 1) {
            setFavItems([{ id, title, desc, author, img }])
        } else {
            if (favItems.filter(x => x.id === id).length > 0) {
                return
            } else {
                setFavItems(prevItems => [...prevItems, { id, title, desc, author, img }])
            }
        }

    }


    const removeItems = (id) => {
        setFavItems(prevItems => prevItems.filter(x => x.id !== id));
    }


    localStorage.setItem('favourite', JSON.stringify(favItems));

    return (
        <FavouriteContext.Provider value={{ favItems, addItems, removeItems }}>
            {children}
        </FavouriteContext.Provider>
    )

}


export default FavouriteContext;