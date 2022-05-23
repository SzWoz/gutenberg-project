import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const BookPage = () => {

    const { id } = useParams()
    const [book, setBook] = useState()

    useEffect(() => {
        const getBookData = async () => {
            const res = await fetch(`https://gnikdroy.pythonanywhere.com/api/book/${id}`);
            const data = await res.json();

            setBook(data)
        }
        getBookData();
    }, [id])

    console.log(book)
    return (
        <p>asd</p>
    )
}

export default BookPage;