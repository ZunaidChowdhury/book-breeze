import React, { useContext, useEffect } from 'react'
import NoDataCard from './NoDataCard'
import { BookContext } from '../contexts/BookContext';
import BookCardWide from './cards/BookCardWide';

const WishlistBooks = ({ sortBy, pagesAscending, ratingAscending, resetSortOrder }) => {

  useEffect(() => {

    return () => {
      resetSortOrder();
    }
  }, [])

  const { wishBooks } = useContext(BookContext);

  let filteredList = wishBooks;

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
      {wishBooks.length < 1 ? <NoDataCard title={'No Wishlist!'} description={'Add some books to Wishlist?'} /> :
        (wishBooks.map((b, i) => <BookCardWide page={'wish-books'} key={i} book={b} />))
      }
    </div>
  )
}

export default WishlistBooks



