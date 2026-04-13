import React, { useContext } from 'react'
import { User, Calendar, BookOpen, Star, Info } from 'lucide-react';
import { Link } from 'react-router';
import { MdDelete } from 'react-icons/md';
import { BookContext } from '../../contexts/BookContext';

const BookCardWide = ({ book, page }) => {
    const { image, bookName, author, tags, publisher, yearOfPublishing, totalPages, category, rating, bookId } = book;
    // console.log(typeof page);

    const {deleteFromReadlist, deleteFromWishlist} = useContext(BookContext);
    
    return (
        <div className="relative group flex w-full h-100  rounded-3xl p-6 border border-zinc-200 hover:border-theme-primary  hover:shadow-md transition-all duration-300 font-sans">

            <button onClick={() => {page === 'read-books' ?  deleteFromReadlist(bookId) : page === 'wish-books' ? deleteFromWishlist(bookId) : null}} className='group/delete absolute top-6 right-6 bg-zinc-100 p-2 rounded-full cursor-pointer'>
                <MdDelete size={30} className='group-hover/delete:text-red-600 transition-colors duration-300'/>
            </button>
            {/* Book Cover Image */}
            <div className="shrink-0 mr-8 p-12 w-80 h-full bg-zinc-100 rounded-lg overflow-hidden">
                    <img
                        src={image}
                        alt="Annotated Texas Family Code 2019"
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
            </div>

            {/* Content Section */}
            <div className="grow flex flex-col justify-between pt-6">
                <div>
                    <h2 className="text-3xl font-bold text-text-primary group-hover:text-theme-primary transition-colors duration-300 mb-2">{bookName}</h2>
                    <div className="flex items-center mb-4 text-gray-600 text-lg font-medium">
                        <span>By:</span>
                        <span className='px-2'>{author}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-text-primary text-lg font-bold">Tags</span>

                            {
                                tags.map((item, i) => (
                                    <span key={i} className="px-4 py-1 bg-green-100 text-theme-primary rounded-full text-base font-medium">
                                        #{item}
                                    </span>
                                ))
                            }


                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <div className="space-y-2  mb-6 text-text-secondary text-lg font-medium">
                        <div className="flex items-center gap-2 ">
                            <User size={16} />
                            <span >Publisher: <span>{publisher}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>Year of Publishing: <span >{yearOfPublishing}</span></span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen size={16} />
                            <span>Page {totalPages}</span>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-4 text-base">
                    <span className="px-6 py-2 bg-blue-100 text-blue-600 rounded-full  font-medium">
                        Category: {category}
                    </span>
                    <div className="px-6 py-2 bg-orange-50 text-orange-400 rounded-full  font-medium border border-orange-100 flex items-center gap-1">
                        Rating: {rating}
                    </div>

                    <Link to={`/books/${bookId}`} className="ml-auto bg-[#44ad11] hover:bg-[#3d9a0f] text-white px-10 py-3 rounded-full font-bold transition-colors shadow-md active:scale-95">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BookCardWide