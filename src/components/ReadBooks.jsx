import React, { useContext, useEffect, useState } from 'react'
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

const ReadBooks = ({ sortBy, pagesAscending, ratingAscending, resetSortOrder }) => {
    useEffect(() => {

        return () => {
            resetSortOrder();          
        }
    }, [])

    const { readBooks } = useContext(BookContext);
    // console.log(readBooks);
    let filteredList = readBooks;
    // console.log('filteredList: ', filteredList);


    if (sortBy === 'pages') {
        filteredList.sort((a, b) => {
            return pagesAscending ? a.totalPages - b.totalPages : b.totalPages - a.totalPages;
        })

    }


    else if (sortBy === 'rating') {
        filteredList.sort((a, b) => {
            return ratingAscending ? a.rating - b.rating : b.rating - a.rating;
        })
    }

    return (
        <div className='py-6 space-y-6'>
            {filteredList.length < 1 ? <NoDataCard title={'Empty Readlist'} description={'Books you have marked as read will show here.'} /> :
                (filteredList.map((b, i) => <BookCardWide page={'read-books'} key={i} book={b} />))
            }
        </div>
    )
}

export default ReadBooks;