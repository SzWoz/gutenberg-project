import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavouriteContext from '../etc/FavouriteContext';

function Book({ id, title, resources, authors, desc }) {

    const { favItems, addItems, removeItems } = useContext(FavouriteContext)

    const imgSrc = resources.map(item => {
        if (item.uri.includes('medium')) return item.uri;
        else return false;
    }).filter(x => x !== false)

    const author = authors.filter(a => a.type === 'Author')

    const allAuthors = author.map(item => {
        return <h3 key={nanoid()}>{item.person}</h3>
    })


    const online = resources.map(item => {
        if (item.type.includes('text/html')) return item.uri;
        else return false;
    }).filter(x => x !== false)


    const heartIconToggle = () => {
        if (favItems.filter(x => x.id === id).length > 0) return 'icon-heart'
        else return 'icon-heart-empty'
    }

    const favClickHandler = () => {
        if (favItems.filter(x => x.id === id).length > 0) return removeItems(id)
        else return addItems(id, title, desc, author, imgSrc, online)
    }




    return (
        <article>
            <img src={imgSrc} alt="book cover" />
            <div className="details">
                <Link to={`/gutenberg-project/book/${id}`}>
                    <h2>{title}</h2>
                </Link>
                {allAuthors}
                <span onClick={favClickHandler}><i className={heartIconToggle()}></i></span>
            </div>
        </article>
    )
}

export default Book