import React from 'react'

// react tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from '../components/ReadBooks';
import WishlistBooks from '../components/WishlistBooks';

const ListedBooks = () => {
  return (
    <div className='w-full max-w-350 mx-auto min-h-screen'>

      <div className='w-full max-w-350 mx-auto bg-zinc-200 mt-6 mb-6 rounded-3xl p-20'>
        <h2 className='text-center text-5xl text-text-primary font-bold'>
          Listed Books
        </h2>
      </div>

      <Tabs className='my-20 '>
        <TabList >
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <ReadBooks />
        </TabPanel>
        <TabPanel>
          <WishlistBooks />
        </TabPanel>
      </Tabs>

    </div>
  )
}

export default ListedBooks