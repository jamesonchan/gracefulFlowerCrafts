import React from 'react'

function SocialIcon({Icon}) {
    return (
        <div className=''>
            {Icon && <Icon fontSize='large' className='icon'/>}
        </div>
    )
}

export default SocialIcon
