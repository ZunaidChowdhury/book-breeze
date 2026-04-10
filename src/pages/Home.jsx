import React from 'react'
import HeroSection from '../components/HeroSection'
import BookListGrid from '../components/BookListGrid'

const bookListDataPromise = fetch('/booksData.json').then(res => res.json());

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BookListGrid bookListDataPromise={bookListDataPromise} />
    </div>
  )
}

export default Home