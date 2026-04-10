import React from 'react'
import heroBook from '../../public/dating-book.png'

const HeroSection = () => {
    return (
        <div className='w-full max-w-292.5 mx-auto bg-zinc-200 h-138.5 mt-2 mb-6 rounded-3xl p-20'>

            <div className='grid grid-cols-[1.3fr_1fr] items-center'>
                {/* left */}
                <div className=''>
                    <h2 className='text-text-primary text-6xl font-extrabold'>
                        Become the Grounded Man
                    </h2>
                    <p className='mt-4 text-text-secondary text-base font-medium'>
                        Master the proven 7-step system to stop being the "Nice Guy," build unstoppable confidence, and attract the woman of your dreams.
                    </p>
                    <button className='tracking-wider mt-8 btn text-white text-base font-medium bg-theme-primary hover:bg-green-600 transition-colors duration-300'>Explore Books</button>
                </div>
                {/* right */}
                <div className='justify-self-end'>
                    <img src={heroBook} alt="The Dating Playbook for Men" />
                </div>
            </div>

        </div>
    )
}

export default HeroSection