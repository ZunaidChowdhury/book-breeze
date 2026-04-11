import React, { Suspense, use, useContext, useState } from 'react'
import { useParams } from 'react-router';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ bookId, booksDataPromise }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const booksData = use(booksDataPromise);
    const theBook = booksData.find(b => b.bookId === parseInt(bookId));

    // console.log(theBook);

    const {
        handleMarkAsRead, handleWishlist
    } = useContext(BookContext);



    return (
        // <div className='w-full max-w-292.5 mx-auto mt-2 mb-6 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16'>
        <div className='mt-8 mb-20 w-full max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16'>

            {/* left  */}
            <div className='bg-zinc-200 rounded-2xl p-18.5 flex justify-center items-center'>
                <img src={theBook.image} alt={`${theBook.bookName} image`} />
            </div>

            {/* right */}
            <div className='pt-8'>
                <h3 className='text-text-primary text-5xl font-extrabold '>{theBook.bookName}</h3>
                <p className='mt-6 text-text-secondary text-2xl font-semibold'>By: {theBook.author}</p>
                <div className='h-px w-full bg-zinc-200 mt-6' />

                <p className='mt-6 text-text-secondary text-2xl font-semibold'>{theBook.category}</p>
                <div className='h-px w-full bg-zinc-200 mt-6' />

                <p className={`mt-6 text-text-secondary text-lg ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
                    <span className='font-bold'>Review: </span>{theBook.review}
                </p>
                <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-500 underline">
                    {isExpanded ? 'Show Less' : 'Read More'}
                </button>

                {/* tags */}
                <div className='mt-6 flex gap-2 text-text-secondary text-lg'>
                    <span className='font-bold'>Tags: </span>
                    {
                        theBook.tags.map((tag, i) => (
                            <span key={i} className='bg-zinc-200 rounded-full px-4 py-1 text-base text-text-secondary font-semibold'>{tag}</span>
                        ))
                    }
                </div>
                <div className='mt-6 h-px w-full bg-zinc-200 mb-4' />

                {/* table  */}
                <table className='text-text-secondary text-lg border-separate'>
                    <tbody>
                        <tr>
                            <td className="py-2">Number of Pages:</td>
                            <td className='pl-20 py-2 font-bold'>{theBook.totalPages}</td>
                        </tr>

                        <tr>
                            <td className="py-2">Publisher:</td>
                            <td className='pl-20 py-2 font-bold'>{theBook.publisher}</td>
                        </tr>

                        <tr>
                            <td className="py-2">Year of Publishing:</td>
                            <td className='pl-20 py-2 font-bold'>{theBook.yearOfPublishing}</td>
                        </tr>

                        <tr>
                            <td className="py-2">Rating:</td>
                            <td className='pl-20 py-2 font-bold'>{theBook.rating}</td>
                        </tr>
                    </tbody>
                </table>

                <div className='mt-6'>
                    <button onClick={() => handleMarkAsRead(theBook)} className="btn bg-white border border-black text-black mr-2 text-lg font-normal px-5 py-5.5">Mark as Read</button>
                    <button onClick={() => handleWishlist(theBook)} className="btn bg-theme-secondary text-white text-lg font-normal px-5 py-5.5">Add to Wishlist</button>
                </div>


            </div>



        </div>
    )
}


const BookDetailsPage = () => {

    const { bookId } = useParams();
    const booksDataPromise = fetch('/booksData.json').then(res => res.json());

    return (
        <Suspense fallback={<>loading...</>}>
            <BookDetails bookId={bookId} booksDataPromise={booksDataPromise} />
        </Suspense>
    )
}

export default BookDetailsPage