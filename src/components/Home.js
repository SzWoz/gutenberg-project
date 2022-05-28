import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Loader from "./Loader";



import Book from './Book'


const Home = () => {


    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState()

    const [newCall, setNewCall] = useState()

    useEffect(() => {
        const apiCall = async () => {
            setLoading(true)
            const res = await fetch(newCall !== undefined || null || '' ? newCall : 'https://gnikdroy.pythonanywhere.com/api/book/?page=1');
            const data = await res.json();
            setBooksData(data);
            setLoading(false)
        }

        apiCall()
    }, [newCall])
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

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            const value = e.target.value
            setNewCall(`https://gnikdroy.pythonanywhere.com/api/book/?search=${value.replace(/\s+/g, '+')}`)
        }
    }

    const books = booksData.length !== 0 ? booksData.results.map(item => {
        return <Book
            key={nanoid()}
            id={item.id}
            title={item.title}
            resources={item.resources}
            authors={item.agents}
            desc={item.description}
        />
    }) : "";


    return (
        <main>

            {
                loading ? <Loader /> :
                    <>
                        <section>
                            <label htmlFor="search-bar">
                                <input type="text" id="search-bar" placeholder="Search for books" onKeyDown={handleKeyDown} />
                            </label>
                        </section>
                        <section>
                            <div className="controls">
                                <button onClick={handlePrevClick}>Previous</button>
                                <button onClick={handleNextClick}>Next</button>
                            </div>
                            {books}
                        </section>
                    </>
            }
        </main>
    )
}

export default Home