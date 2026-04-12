import React, { useContext } from 'react'
import NoDataCard from './NoDataCard'
import { BookContext } from '../contexts/BookContext';
import BookCardWide from './cards/BookCardWide';

// const testData = {
//     author: "Harper Lee",
//     bookId: 2,
//     bookName: "To Kill a Mockingbird",
//     category: "Fiction",
//     image: "/b2.png",
//     publisher: "J.B. Lippincott & Co.",
//     rating: 4.8,
//     review: "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations.",
//     tags: ['Drama', 'Social Justice'],
//     totalPages: 281,
//     yearOfPublishing: 1960
// }

const ReadBooks = () => {
    const { readBooks } = useContext(BookContext);
    // console.log(readBooks);

    return (
        <div className='py-6 space-y-6'>
            {readBooks.length < 1 ? <NoDataCard title={'Empty Readlist'} description={'Books you have marked as read will show here.'} /> :
                (readBooks.map((b, i) => <BookCardWide page={'read-books'} key={i} book={b} />))
            }
        </div>
    )
}

export default ReadBooks