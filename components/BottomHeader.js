import React from 'react'
import Image from 'next/image'
import {
    SearchIcon,
    ShoppingBagIcon,
    LoginIcon
} from '@heroicons/react/outline'
import {signIn, signOut, useSession} from 'next-auth/react'


function BottomHeader() {

    const {data:session} = useSession()

    return (
        <div className='relative h-[700px] bg-no-repeat bg-right bg-cover bg-fixed' style={{backgroundImage:'url(https://wallpapercave.com/wp/wp4652766.jpg)'}}>
            {/* bottom nav */}
            <div className='shadow-lg sticky top-0 z-50 bg-white p-2'>
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
                        {session ? (
                            <div className='flex items-center p-1'>
                              <img onClick={signOut} className='ml-3 h-6 sm:h-7 cursor-pointer rounded-full object-cover' src={session.user.image} alt="" />
                              <p onClick={signOut} className='ml-2 headerText'>Sign Out</p>
                            </div>
                        ):(
                            <div className='flex items-center'>
                                <LoginIcon className='h-10 p-2 cursor-pointer'/>
                                <p onClick={signIn} className='headerText'>Sign In</p>
                            </div>
                        )}
                        <div className='relative flex items-center'>
                            <ShoppingBagIcon className='h-10 p-2 cursor-pointer'/>
                            <p className='headerText'>Flower Basket</p>
                            <span className='absolute bg-yellow-500 top-0 left-5 w-4 h-4 font-bold rounded-full text-xs text-center  text-white'>3</span>
                        </div>
                        
                    </div>

                       
                </div>
            </div>
               {/* uttility button center */}
            <div className='absolute top-1/2 w-full text-center'>
                <button className='bg-gray-500 text-red-100 font-semibold rounded-lg p-2 border border-yellow-500 hover:bg-red-300 active:scale-90 transiton duration-150'>UTILITY BUTTON</button>  
            </div>
        </div>
    )
}

export default BottomHeader
