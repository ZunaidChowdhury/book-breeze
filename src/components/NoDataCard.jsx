import React from 'react'
import noDataImg from '/no-data.png'

const NoDataCard = ({ title, description }) => {
    return (
        <div className='w-full max-w-350 mx-auto bg-zinc-100 mt-6 mb-6 rounded-3xl p-20 flex flex-col justify-center items-center'>

            <img className='w-40' src={noDataImg} alt="no data" />

            <h3 className='mt-6 text-2xl font-semibold'>
                {title}
            </h3>

            <p className='text-xl text-text-secondary font-normal'>
                {description}
            </p>

        </div>

    )
}

export default NoDataCard


