import React from 'react'
import Image from 'next/image'

function FooterPhoto({url}) {
    return (
        <div>
            <img className='w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[90px] md:h-[90px] lg:w-[120px] lg:h-[120px] xl:w-[140px] xl:h-[140px] object-cover border border-yellow-400 cursor-pointer transtion hover:scale-105 duration-200' src={url} alt="" />
        </div>
    )
}

export default FooterPhoto
