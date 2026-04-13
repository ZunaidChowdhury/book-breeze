import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { deleteReadlistToLocalStorage, deleteWishlistToLocalStorage, getReadlistFromLocalStorage, getWishlistFromLocalStorage, saveReadlistToLocalStorage, saveWishlistToLocalStorage } from '../utils/localDB';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {

  // readlist
  const [readBooks, setReadBooks] = useState([])
  const handleMarkAsRead = (theBook) => {
    const isExist = readBooks.find(b => b.bookId === theBook.bookId);
    if (isExist) {
      toast.error("Already marked as read!");
    }
    else {
      setReadBooks([...readBooks, theBook])
      toast.success("Marked as Read.");
      saveReadlistToLocalStorage(theBook)
    }
  }

  // wishlist
  const [wishBooks, setWishBooks] = useState([])
  const handleWishlist = (theBook) => {
    const isExist = wishBooks.find(b => b.bookId === theBook.bookId);
    if (isExist) {
      toast.error("Already added to Wishlist!");
    }
    else {
      setWishBooks([...wishBooks, theBook])
      toast.success("Added to Wishlist.");
      saveWishlistToLocalStorage(theBook)
    }
  }


  const deleteFromReadlist = (bookId) => {
    const updatedReadBooks = readBooks.filter(b => b.bookId !== parseInt(bookId))
    setReadBooks(updatedReadBooks)
    deleteReadlistToLocalStorage(bookId)
    toast.success("Deleted from Readlist.");
  }


  const deleteFromWishlist = (bookId) => {
    const updatedWishBooks = wishBooks.filter(b => b.bookId !== parseInt(bookId))
    setWishBooks(updatedWishBooks)
    deleteWishlistToLocalStorage(bookId)
    toast.success("Deleted from Wishlist.");
  }

  useEffect(() => {
    const localReadlist = getReadlistFromLocalStorage();
    setReadBooks(localReadlist);
    const localWishlist = getWishlistFromLocalStorage();
    setWishBooks(localWishlist)

  }, [])

  const data = {
    readBooks,
    setReadBooks,
    handleMarkAsRead,

    wishBooks,
    setWishBooks,
    handleWishlist,

    deleteFromReadlist,
    deleteFromWishlist,
  };

  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider