import { useContext, useEffect, useState } from "react";
import { nanoid } from 'nanoid';


import Loader from "./Loader";
import Book from './Book'
import CountContext from "../etc/CountContext";


const Home = () => {


    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState()

    const { count, addCount, subtractCount, resetCount } = useContext(CountContext)

    const [searched, setSearched] = useState('');
    const [searchBar, setSearchBar] = useState('')

    useEffect(() => {
        if (searched === '') {
            const apiCall = async () => {
                setLoading(true)
                const res = await fetch(`https://gnikdroy.pythonanywhere.com/api/book/?page=${count}`);
                const data = await res.json();
                setBooksData(data);
                setLoading(false)
            }

            apiCall()
        } else {

            const wait = setTimeout(() => {
                const apiCall = async () => {
                    setLoading(true)
                    const res = await fetch(`https://gnikdroy.pythonanywhere.com/api/book/?page=${count}&search=${searched}`);
                    const data = await res.json();
                    setBooksData(data);
                    setLoading(false)
                }
                apiCall()
            }, 1000)
            return () => clearTimeout(wait)

        }
    }, [count, searched])



    const handleSearch = (e) => {
        const value = e.target.value
        setSearched(value.replace(/\s+/g, '+'))
        setSearchBar(value)
        resetCount()
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


    //btns logic to prevent user from crossing data range
    const btnLngt = booksData !== 0 ? Math.ceil(booksData.count / 10) : 0;
    const btnchk = (x) => {
        if (x.target.value > btnLngt) {
            return
        } else {
            if (count > x.target.value) subtractCount(1)
            else addCount(x.target.value - count);
        }
    }

    return (
        <main>

            {
                loading ? <Loader /> :
                    <>
                        <section>
                            <label htmlFor="search-bar">
                                <input type="search" id="search-bar" value={searchBar} placeholder="Search for books" onChange={handleSearch} />
                            </label>
                        </section>
                        <section>
                            <div className="controls">
                                <button value={count - 1} onClick={(e) => btnchk(e)}>Previous</button>
                                {count > 1 ? <button value={count - 1} onClick={(e) => btnchk(e)}>{count - 1}</button> : ""}
                                <button className="current" >{count}</button>
                                <button value={count + 1} onClick={(e) => btnchk(e)}>{count + 1}</button>
                                <button value={count + 2} onClick={(e) => btnchk(e)}>{count + 2}</button>
                                <button value={count + 1} onClick={(e) => btnchk(e)}>Next</button>

                            </div>
                            {books}
                        </section>
                    </>
            }
        </main>
    )
}

export default Home