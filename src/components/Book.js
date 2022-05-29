import { nanoid } from 'nanoid';
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
        const name = item.person;
        const correctOrder = name.split(',').reverse();
        return <h3 key={nanoid()}>{correctOrder.map(item => { return item + ' ' })}</h3>
    })

    const titleLengthChk = (title) => {
        return (title.length > 35) ? title.substr(0, 29) + '...' : title;
    }


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
                    <h2 title={title.length > 35 ? title : ''}>{titleLengthChk(title)}</h2>
                </Link>
                {allAuthors}
                <span onClick={favClickHandler}><i className={heartIconToggle()}></i></span>
            </div>
        </article>
    )
}

export default Book