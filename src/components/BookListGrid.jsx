import React, { use } from 'react'
import BookCardSquare from './cards/BookCardSquare'

const BookListGrid = ({bookListDataPromise}) => {
    const bookListData = use(bookListDataPromise);
    // console.log(bookListData);
    
    return (
        <div id='book-collection' className='w-full py-10 tablet:py-20 bg-background'>
            <div className='w-full max-w-350 mx-auto  px-4 xl:px-0'>
                {/* section heading  */}
                <div className='text-center'>
                    <h3 className='text-text-primary text-[2.5rem] tablet:text-[3rem] font-extrabold mb-4 leading-tight'>
                        Browse the Collection
                    </h3>
                    <p className='text-text-secondary text-xl font-normal leading-tight'>
                        Beyond the playbook — explore our curated collection of guides designed to level up<br/>every area of your life, from mindset to social mastery.
                    </p>
                </div>

                {/* card container */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        bookListData.map((book, i) => (
                            // each card
                            <BookCardSquare key={i} book={book} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BookListGrid