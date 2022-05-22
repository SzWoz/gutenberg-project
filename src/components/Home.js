import { useEffect, useState } from "react";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';

import Book from './Book'
const Home = () => {


    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState()

    const [newCall, setNewCall] = useState()

    useEffect(() => {
        const apiCall = async () => {
            setLoading(true)
            const res = await fetch(newCall !== undefined ? newCall : 'https://gnikdroy.pythonanywhere.com/api/book/?page=1');
            const data = await res.json();
            setBooksData(data);
            setLoading(false)
        }

        apiCall()
    }, [newCall])
    console.log(booksData)
    //handling prev and next btns calls
    const handleNextClick = () => {
        if (booksData.next !== null) {
            setNewCall(booksData.next)
        }
    }
    const handlePrevClick = () => {
        if (booksData.previous !== null) {
            setNewCall(booksData.previous)
        }
    }

    const books = booksData.length !== 0 ? booksData.results.map(item => {
        return <Book
            key={nanoid()}
            id={item.id}
            title={item.title}
            resources={item.resources}
        />
    }) : "";

    return (
        <main>
            <div className="carousel">
                carousel
            </div>
            <section>
                <label htmlFor="search-bar">
                    <input type="text" id="search-bar" />
                </label>
            </section>
            <section>
                <div className="controls">
                    <button onClick={handlePrevClick}>Previous</button>
                    <button onClick={handleNextClick}>Next</button>
                </div>
                {loading ? 'loading' : books}
            </section>
        </main>
    )
}

export default Home