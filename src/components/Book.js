

export default function Book({ id, title, resources, authors }) {

    const imgSrc = resources.map(item => {
        if (item.uri.includes('medium')) return item.uri;
        else return false;
    }).filter(x => x !== false)

    const author = authors.filter(a => a.type === 'Author')
    return (
        <article>
            <img src={imgSrc} alt="book cover" />
            <div className="details">
                <h2>{title}</h2>
                <h3>{author[0].person}</h3>
            </div>
        </article>
    )
}

