import { useContext } from 'react';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom'
import FavouriteContext from '../etc/FavouriteContext';


const Favourite = () => {

    const { favItems, removeItems } = useContext(FavouriteContext)



    const items = favItems.length !== 0 ? favItems.map(item => {
        return (
            <div className="book" key={nanoid()}>
                <img src={item.img} alt="book cover" />

                <div className="details">
                    <Link to={`/gutenberg-project/book/${item.id}`}>

                        <h1>{item.title}</h1>
                        <h2>{item.author[0].person}</h2>
                    </Link>

                    <div className="links">
                        <div className="dropdown-wrapper">
                            <h2>Description <i className="arrow  right" /></h2>
                            <div className="dropdown">
                                <p>{item.desc !== null ? item.desc.includes('http') ? <a href={item.desc} target="_blank" rel="noreferrer">Link to external description</a> : item.desc : "Sadly there's no description yet :("}</p>
                            </div>
                        </div>
                        <a href={item.ebook.length > 1 ? item.ebook[0] : item.ebook} target="_blank" rel="noreferrer">Read book online &#128241;</a>
                        <span onClick={() => { removeItems(item.id) }}>X</span>
                    
                    </div>

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