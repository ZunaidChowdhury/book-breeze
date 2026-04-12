import React, { useState } from 'react'

// react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../components/ReadBooks';
import WishlistBooks from '../components/WishlistBooks';

const ListedBooks = () => {
  const [sortBy, setSortBy] = useState(null)
  const [pagesAscending, setPagesAscending] = useState(false)
  const [ratingAscending, setRatingAscending] = useState(false)
  
  return (
    <div className='w-full max-w-350 mx-auto'>

      <div className='w-full max-w-350 mx-auto bg-zinc-200 mt-6 rounded-3xl p-20'>
        <h2 className='text-center text-5xl text-text-primary font-bold'>
          Listed Books
        </h2>
      </div>



      {/* sorting */}
      <div className='mt-8 w-full flex justify-end '>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 text-lg">Sort by -</div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-lg font-semibold">
            <li onClick={() => {setSortBy('pages'); setPagesAscending(!pagesAscending)}}><a>{pagesAscending ? 'Pages [Desceding]' : 'Pages [Asceding]'}</a></li>
            <li onClick={() => {setSortBy('rating'); setRatingAscending(!ratingAscending)}}><a>{ratingAscending ? 'Rating [Desceding]' : 'Rating [Asceding]'}</a></li>
          </ul>
        </div>
      </div>



      <Tabs className='mb-20'>
        <TabList >
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks sortBy={sortBy} pagesAscending={pagesAscending} ratingAscending={ratingAscending} />
        </TabPanel>
        <TabPanel>
          <WishlistBooks sortBy={sortBy} ratingAscending={ratingAscending}  />
        </TabPanel>
      </Tabs>

    </div>
  )
}

export default ListedBooks