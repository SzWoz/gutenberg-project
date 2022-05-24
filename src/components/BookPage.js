import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';



const BookPage = () => {

    const { id } = useParams()
    const [book, setBook] = useState([])

    useEffect(() => {
        const getBookData = async () => {

            const res = await fetch(`https://gnikdroy.pythonanywhere.com/api/book/${id}`);
            const data = await res.json();
            setBook(data)
        }
        getBookData();
    }, [id])

    const imgSrc = book.length !== 0 ? book.resources.map(item => {
        if (item.uri.includes('medium')) return item.uri;
        else return false;
    }).filter(x => x !== false) : 'loading'


    const online = book.length !== 0 ? book.resources.map(item => {
        if (item.type.includes('text/html')) return item.uri;
        else return false;
    }).filter(x => x !== false) : ''


    const subjects = book.length !== 0 ? book.subjects.map(element => {
        return <li key={nanoid()}>{element}</li>
    }) : '';
    console.log(book)



    return (
        <div className="book">
            <h1>{book.title}</h1>
            <img src={imgSrc} alt="book cover" />
            {
                book.description !== null ? <a href={book.description}>Link to description &#128214;</a> : <p>Currently there's no book description</p>
            }
            <a href={online.length > 1 ? online[0] : online}>Read book online &#128241;</a>
            <p>Downloads: {book.downloads}</p>
            <ul>
                <li><h2>Subjects</h2>
                    <ul>
                        {subjects}
                    </ul>
                </li>
            </ul>
        </div >
    )
}

export default BookPage;