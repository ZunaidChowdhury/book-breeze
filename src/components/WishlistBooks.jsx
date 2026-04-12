import React, { useContext } from 'react'
import NoDataCard from './NoDataCard'
import { BookContext } from '../contexts/BookContext';
import BookCardWide from './cards/BookCardWide';

const WishlistBooks = () => {
  const { wishBooks } = useContext(BookContext);
  // console.log(wishBooks);
  
  return (
    <div className='py-6 space-y-6'>
      {wishBooks.length < 1 ? <NoDataCard title={'No Wishlist!'} description={'Add some books to Wishlist?'} /> :
        (wishBooks.map((b, i) => <BookCardWide page={'wish-books'} key={i} book={b} />))
      }
    </div>
  )
}

export default WishlistBooks



