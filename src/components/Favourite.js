import { useContext } from 'react';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';
import { Link } from 'react-router-dom'
import FavouriteContext from '../etc/FavouriteContext';


const Favourite = () => {

    const { favItems, addItems, removeItems } = useContext(FavouriteContext)



    const items = favItems.length !== 0 ? favItems.map(item => {
        return (
            <div className="book" key={nanoid()}>
                <img src={item.img} alt="book cover" />

                <div className="details">
                    <Link to={`/book/${item.id}`}>

                        <h1>{item.title}</h1>
                        <h2>{item.author[0].person}</h2>
                    </Link>

                    <div className="links">
                        <div className="dropdown-wrapper">
                            <h2>Description <i className="arrow  right" /></h2>
                            <div className="dropdown">
                                <p>{item.desc !== null ? item.desc : "Sadly there's no description yet :("}</p>
                            </div>
                        </div>
                        <a href={item.ebook.length > 1 ? item.ebook[0] : item.ebook} target="_blank" rel="noreferrer">Read book online &#128241;</a>
                    </div>
                    <span onClick={() => { removeItems(item.id) }}>X</span>

                </div>
            </div >
        )
    }) : "You don't have any faovurite books!"


    return (
        <main>
            <div className="favourite-wrapper">
                {items}
            </div>
        </main>
    )
}

export default Favourite