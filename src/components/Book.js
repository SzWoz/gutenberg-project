

export default function Book({ id, title, resources }) {

    const imgSrc = resources.map(item => {
        let src = '';
        if (item.uri.includes('medium')) return src = item.uri;
        else return false;
    }).filter(x => x !== false)

    return (
        <article>
            <img src={imgSrc} alt="" />
        </article>
    )
}

