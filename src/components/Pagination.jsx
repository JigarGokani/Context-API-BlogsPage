import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

  const { page, handlePageChange, totalPages } = useContext(AppContext)

  return (
    <div className='fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-t-gray-300 w-full'>
      <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
        {
          page > 1 &&
          <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => handlePageChange(page - 1)}>Previous</button>
        }
        {
          page < totalPages &&
          <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={() => handlePageChange(page + 1)}>Next</button>
        }

        <p className='text-sm font-semibold ml-auto'>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination