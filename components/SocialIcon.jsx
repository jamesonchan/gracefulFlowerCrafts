import React from 'react'
import Link from 'next/link'

function SocialIcon({Icon,title}) {
    return (
        
            <Link href={`https://www.${title}.com/jamesonchan/?hl=en`}>
                {Icon && <Icon fontSize='large' className='icon'/>}
            </Link>
       
    )
}

export default SocialIcon
