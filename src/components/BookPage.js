import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import FavouriteContext from '../etc/FavouriteContext';
import Loader from "./Loader";


const BookPage = () => {

    const { id } = useParams()
    const [book, setBook] = useState([])
    const [loading, setLoading] = useState()

    const { favItems, addItems, removeItems } = useContext(FavouriteContext)





    useEffect(() => {
        const getBookData = async () => {
            setLoading(true)
            const res = await fetch(`https://gnikdroy.pythonanywhere.com/api/book/${id}`);
            const data = await res.json();
            setBook(data)
            setLoading(false)
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
        if (favItems.filter(x => x.id === book.id).length > 0) return 'icon-heart'
        else return 'icon-heart-empty'
    }

    const favClickHandler = () => {
        if (favItems.filter(x => x.id === book.id).length > 0) return removeItems(book.id)
        else return addItems(book.id, book.title, book.description, author, imgSrc, online)
    }


    return (
        <main>
            <Link className="get-back" to="/gutenberg-project">Return</Link>

            {loading ?
                <div className="loader">
                    <span></span>
                    <span></span>
                </div>

                :

                <div className="book">

                    <img src={imgSrc} alt="book cover" />

                    <div className="details">
                        <h1>{book.title}</h1>
                        <p>Downloads: {book.downloads}</p>

                        {allAuthors}

                        <div className="dropdown-wrapper">
                            <h2>Subjects <i className="arrow  right" /></h2>
                            <div className="dropdown">
                                <ul>
                                    {subjects}
                                </ul>
                            </div>
                        </div>

                        <div className="links">
                            <div className="dropdown-wrapper">
                                <h2>Description <i className="arrow  right" /></h2>
                                <div className="dropdown">
                                    <p>{book.description !== null && book.description !== undefined ? book.description.includes('http') ? <a href={book.description} target="_blank" rel="noreferrer">Link to external description</a> : book.description : "Sadly there's no description yet :("}</p>
                                </div>
                            </div>

                            <a href={online.length > 1 ? online[0] : online} target="_blank" rel="noreferrer">Read book online &#128241;</a>

                            <span onClick={favClickHandler}><i className={heartIconToggle()}></i></span>

                        </div>



                    </div>

                </div >

            }


        </main>
    )
}

export default BookPage;