import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    ShoppingBagIcon,
    LoginIcon
} from '@heroicons/react/outline'


function BottomHeader() {
    return (
        <div className='h-[800px] bg-no-repeat bg-right bg-cover bg-fixed' style={{backgroundImage:'url(https://wallpapercave.com/wp/wp4652766.jpg)'}}>
            {/* bottom nav */}
            <div className='shadow-lg sticky top-0 z-50 bg-white p-8'>
                <div className='max-w-7xl xl:mx-auto flex items-center justify-between'>
                    {/* image container */}
                    <div className='items-center pl-1'>
                        <Image 
                            src='https://www.nicepng.com/png/full/14-141836_simply-vintage-co-logo-vintage-floral-png.png'
                            width={130}
                            height={60}
                            objectFit='contain'
                            className='cursor-pointer'
                        />
                    </div>
                        {/* search middle */}
                    <div className='flex bg-gray-100 border rounded-md mx-5'>
                        <input className='outline-none rounded-md pl-4 bg-gray-100 text-sm' type="text" placeholder='Search your favorites'/>
                        <SearchIcon className='h-10 p-3'/>
                        
                    </div>
                        {/*utility right  */}
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center'>
                            <LoginIcon className='h-10 p-2 cursor-pointer'/>
                            <p className='headerText'>Sign In</p>
                        </div>
                        <div className='flex items-center'>
                            <ShoppingBagIcon className='h-10 p-2 cursor-pointer'/>
                            <p className='headerText'>Flower Basket</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomHeader
