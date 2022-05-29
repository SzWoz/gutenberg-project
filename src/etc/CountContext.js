import { createContext, useState } from "react";


const CountContext = createContext();


export const CountProvider = ({ children }) => {
    const [count, setCount] = useState(1);


    const addCount = (value) => {
        setCount(prev => prev + value)
    }
    const subtractCount = (value) => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }
    const resetCount = () => {
        setCount(1)
    }


    return (
        <CountContext.Provider value={{ count, addCount, subtractCount, resetCount }}>
            {children}
        </CountContext.Provider>
    )

}


export default CountContext;