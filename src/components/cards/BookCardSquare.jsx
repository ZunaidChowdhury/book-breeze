import React from 'react'
import { CiStar } from 'react-icons/ci'
import { Link } from 'react-router'

const BookCardSquare = ({ book }) => {

    return (
            <Link to={`/books/${book.bookId}`} className='p-4 border border-zinc-200 rounded-2xl flex flex-col justify-between group hover:shadow-lg transition-all duration-300'>
                <div >
                    {/* top image */}
                    <div className='w-full h-57.5 py-8 bg-zinc-100 rounded-lg flex justify-center items-center'>
                        <img src={book.image} alt="" className='h-41.5 group-hover:scale-110 transition-transform duration-300' />
                    </div>

                    <h3 className='mt-4 text-text-primary text-xl font-semibold group-hover:text-theme-primary transition-colors duration-300'>{book.bookName}</h3>
                    <p className='mt-2 text-text-secondary text-base'>By: {book.author}</p>
                </div>

                <div className='mt-4 '>
                    {/* tags */}
                    <div className='my-6 flex gap-2'>
                        {
                            book.tags.map((tag, i) => (
                                <span key={i} className='bg-zinc-100 rounded-full px-4 py-1 text-sm text-text-secondary'>{tag}</span>
                            ))
                        }
                    </div>

                    <div className='h-px w-full bg-zinc-200 mb-4' />
                    {/* bottom flex */}
                    <div className='flex justify-between items-center'>
                        <p className='text-text-secondary text-base'>{book.category}</p>
                        <span className='text-text-secondary text-base flex gap-1 items-center justify-center'>
                            {book.rating}<CiStar />
                        </span>
                    </div>
                </div>
            </Link>
    )
}

export default BookCardSquare