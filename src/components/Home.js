import { useEffect, useState } from "react"


const Home = () => {


    const [booksData, setBooksData] = useState([])
    const [state, setState] = useState()

    useEffect(() => {
        const apiCall = async () => {
            const res = await fetch(state !== undefined ? state : 'https://gnikdroy.pythonanywhere.com/api/book/?page=1');
            const data = await res.json();
            setBooksData(data)
            console.log(state)
        }

        apiCall()
    }, [state])

    console.log(booksData)

    const handleNextClick = () => {
        if (booksData.next !== null) {
            setState(booksData.next)
        }
    }

    const handlePrevClick = () => {
        if (booksData.previous !== null) {
            setState(booksData.previous)
        }
    }
    //console.log(state)

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
                books
            </section>
        </main>
    )
}

export default Home