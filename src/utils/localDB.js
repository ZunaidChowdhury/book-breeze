export const getReadlistFromLocalStorage = () => {
    const localReadlist = localStorage.getItem('readlist');

    if (localReadlist) {
        return JSON.parse(localReadlist);
    }

    else return [];
}


export const saveReadlistToLocalStorage = (book) => {

    // check local if already exists 
    const localReadlist = getReadlistFromLocalStorage();
    const isExist = localReadlist.find(bk => bk.bookId === book.bookId);
    
    if(!isExist) {
        localReadlist.push(book)
        localStorage.setItem('readlist', JSON.stringify(localReadlist));
    }
}

export const deleteReadlistToLocalStorage = (bookId) => {

    // check local if already exists 
    const localReadlist = getReadlistFromLocalStorage();
    
    const filteredReadlist = localReadlist.filter(bk => bk.bookId !== bookId);

    localStorage.setItem('readlist', JSON.stringify(filteredReadlist));
}


export const getWishlistFromLocalStorage = () => {
    const localWishlist = localStorage.getItem('wishlist');

    if (localWishlist) {
        return JSON.parse(localWishlist);
    }

    else return [];
}


export const saveWishlistToLocalStorage = (book) => {

    // check local if already exists 
    const localWishlist = getWishlistFromLocalStorage();
    const isExist = localWishlist.find(bk => bk.bookId === book.bookId);
    if(!isExist) {
        localWishlist.push(book)
        localStorage.setItem('wishlist', JSON.stringify(localWishlist));
    }
}


export const deleteWishlistToLocalStorage = (bookId) => {

    // check local if already exists 
    const localWishlist = getWishlistFromLocalStorage();
    
    const filteredWishlist = localWishlist.filter(bk => bk.bookId !== bookId);
    localStorage.setItem('wishlist', JSON.stringify(filteredWishlist));
}