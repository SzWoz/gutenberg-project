import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import FavouriteContext from '../etc/FavouriteContext';


const BookPage = () => {

    const { id } = useParams()
    const [book, setBook] = useState([])
    const { favItems, addItems, removeItems } = useContext(FavouriteContext)

    console.log(favItems)



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



    const author = book.length !== 0 ? book.agents.filter(a => a.type === 'Author') : ''

    const allAuthors = book.length !== 0 ? author.map(item => {
        return <h2 key={nanoid()}>{item.person}</h2>
    }) : ''


    const online = book.length !== 0 ? book.resources.map(item => {
        if (item.type.includes('text/html')) return item.uri;
        else return false;
    }).filter(x => x !== false) : ''


    const subjects = book.length !== 0 ? book.subjects.map(element => {
        return <li key={nanoid()}>{element}</li>
    }) : '';


    const heartIconToggle = () => {
        console.log('gowno')
        if (favItems.filter(x => x.id === book.id).length > 0) return 'icon-heart'
        else return 'icon-heart-empty'
    }

    const favClickHandler = () => {
        if (favItems.filter(x => x.id === book.id).length > 0) return removeItems(book.id)
        else return addItems(book.id, book.title, book.description, author, imgSrc)
    }



    return (
        <main>
            <div className="book">
                <img src={imgSrc} alt="book cover" />

                <div className="details">
                    <h1>{book.title}</h1>
                    <p>Downloads: {book.downloads}</p>

                    {allAuthors}

                    <div className="dropdown-wrapper">
                        <h2>Subjects</h2>
                        <div className="dropdown">
                            <ul>
                                {subjects}
                            </ul>
                        </div>
                    </div>

                    <div className="links">
                        {
                            book.description !== null ? <a href={book.description} target="_blank" rel="noreferrer">Link to description &#128214;</a> : <p>Currently there's no book description</p>
                        }

                        <a href={online.length > 1 ? online[0] : online} target="_blank" rel="noreferrer">Read book online &#128241;</a>
                    </div>

                    <span onClick={favClickHandler}><i className={heartIconToggle()}></i></span>


                </div>

            </div >
        </main>
    )
}

export default BookPage;