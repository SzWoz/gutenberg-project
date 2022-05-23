import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js';


export default function Book({ id, title, resources, authors }) {

    const imgSrc = resources.map(item => {
        if (item.uri.includes('medium')) return item.uri;
        else return false;
    }).filter(x => x !== false)

    const author = authors.filter(a => a.type === 'Author')

    const allAuthors = author.map(item => {
        return <h3 key={nanoid()}>{item.person}</h3>
    })

    console.log(author)
    return (
        <article>
            <img src={imgSrc} alt="book cover" />
            <div className="details">
                <h2>{title}</h2>
                {allAuthors}
            </div>
        </article>
    )
}

