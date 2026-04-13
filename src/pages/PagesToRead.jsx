import React, { useContext } from 'react'

import CustomChart from '../components/charts/CustomChart'
import CustomShapeBarChart from '../components/charts/CustomShapeBarChart'
import { BookContext } from '../contexts/BookContext'

const PagesToRead = () => {

  const {readBooks} = useContext(BookContext);

  const chartData = readBooks.map(book => {
    return {
      bookName: book.bookName,
      'Total Pages': book.totalPages,
    }
  })

  console.log(chartData);
  

  return (
    <div className='w-full max-w-350 mx-auto bg-zinc-100 mt-6 mb-30 rounded-3xl p-20 '>
      <CustomShapeBarChart chartData={chartData} />
      {/* <CustomChart/> */}
    </div>
  )
}

export default PagesToRead