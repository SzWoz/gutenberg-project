import { useEffect, useState } from "react"


const Home = () => {


    const [booksData, setBooksData] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            const res = await fetch('https://gnikdroy.pythonanywhere.com/api/book/');
            const data = await res.json();

            setBooksData(data)

        }

        apiCall()
    }, [])

    console.log(booksData)

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
                books
            </section>
        </main>
    )
}

export default Home